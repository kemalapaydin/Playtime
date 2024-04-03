import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import * as web3 from "@solana/web3.js";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { FC, useState } from "react";
import styles from "../styles/Home.module.css";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { HistoryEntry } from "../pages/api/playtime-claim";

export const SendSolForm: FC = () => {
  const [txSig, setTxSig] = useState("");
  const [gmtm, setGmtm] = useState<string | null>(null);
  const [playtimeAmount, setPlaytimeAmount] = useState<number | null>(null); // New state to store the user's playtime
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  const [history, setHistory] = useState<HistoryEntry[]>([]); // New state to store the user's playtime history
  const link = () => {
    return txSig
      ? `https://explorer.solana.com/tx/${txSig}?cluster=devnet`
      : "";
  };

  const fetchGmtm = async () => {
    if (!connection || !publicKey) {
      return;
    }
    const walletAddress = document.getElementById(
      "walletAddress"
    ) as HTMLInputElement;
    const playtime = document.getElementById("playtime") as HTMLInputElement;

    try {
      const response = await fetch("/api/playtime-claim", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          walletAddress: walletAddress.value,
          playtime: playtime.value,
          timestamp: new Date(),
        }),
      });
      const data = await response.json();
      const gmtm = data.playtimeDifference; // Assuming the response contains a property called "gmtm"

      setPlaytimeAmount(gmtm / 10000);
      setGmtm(
        formatTime(gmtm) + " playtime." + "Reward is " + gmtm / 10000 + " $GMTM"
      );
      setHistory(data.historyArray);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const formatTime = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    return `${hours} hours ${minutes} minutes ${remainingSeconds} seconds`;
  };
  const sendSol = (event) => {
    const walletAddress = document.getElementById(
      "walletAddress"
    ) as HTMLInputElement;

    event.preventDefault();
    if (!connection || !publicKey) {
      return;
    }

    if (playtimeAmount <= 0) {
      return;
    }
    const transaction = new web3.Transaction();

    const lamports = Math.floor(LAMPORTS_PER_SOL * 0.0000887 * playtimeAmount);
    const sendSolInstruction = web3.SystemProgram.transfer({
      fromPubkey: publicKey,
      toPubkey: new web3.PublicKey(walletAddress.value),
      lamports: lamports,
    });

    transaction.add(sendSolInstruction);
    sendTransaction(transaction, connection).then((sig) => {
      setTxSig(sig);
    });
  };

  return (
    <div>
      <WalletMultiButton />
      {publicKey ? (
        <form onSubmit={sendSol} className={styles.form}>
          <label htmlFor="userId">User WA:</label> {/* New input for user ID */}
          <input
            id="walletAddress"
            type="text"
            className={styles.formField}
            placeholder="Enter wallet address"
            required
          />
          <label htmlFor="userId">User Playtime:</label>{" "}
          {/* New input for user ID */}
          <input
            id="playtime"
            type="text"
            className={styles.formField}
            placeholder="Enter playtime"
            required
          />
          <button
            type="button"
            onClick={fetchGmtm}
            className={styles.formButton}
          >
            Calculate Playtime for the user
          </button>{" "}
          <label htmlFor="amount">{gmtm}</label>
          <br />
          <button type="submit" className={styles.formButton} onClick={sendSol}>
            SEND
          </button>
        </form>
      ) : (
        <span>Connect Your Wallet for GAMETIME</span>
      )}

      {txSig ? (
        <div>
          <p>View your transaction on </p>
          <a href={link()}>Solana Explorer</a>
        </div>
      ) : null}
      {history.length > 0 ? (
        <div>
          <h2>Playtime History</h2>
          {history.map((entry, index) => (
            <div
              key={index}
              style={{
                backgroundColor: index % 2 === 0 ? "lightgray" : "darkgray",
                padding: "10px",
                borderBottom: "1px solid gray",
              }}
            >
              <h3>{formatTime(entry.playtime)}</h3>
              <p>{entry.timestamp.toString()}</p>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};
