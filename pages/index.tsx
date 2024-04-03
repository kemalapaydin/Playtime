import { NextPage } from "next";
import styles from "../styles/Home.module.css";
import WalletContextProvider from "../components/WalletContextProvider";
import { AppBar } from "../components/AppBar";
import { BalanceDisplay } from "../components/BalanceDisplay";
import { SendSolForm } from "../components/SendSolForm";
import Head from "next/head";

const Home: NextPage = (props) => {
  return (
    <div className={styles.App}>
      <Head>
        <title>GAMETIME $GMTM CLAIM</title>
        <meta name="description" content="gmtm" />
      </Head>
      <WalletContextProvider>
        <div className={styles.AppBody}>
          <BalanceDisplay />
          <SendSolForm />
        </div>
      </WalletContextProvider>
    </div>
  );
};

export default Home;
