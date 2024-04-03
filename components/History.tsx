import { FC } from "react";
import { HistoryEntry } from "../pages/api/playtime-claim";

export const BalanceDisplay: FC<{ history: HistoryEntry[] }> = ({
  history,
}) => {
  return (
    <div>
      {history.map((entry, index) => (
        <div
          key={index}
          style={{
            backgroundColor: index % 2 === 0 ? "lightgray" : "darkgray",
            padding: "10px",
            borderBottom: "1px solid gray",
          }}
        >
          <h3>{entry.playtime}</h3>
          <p>{entry.timestamp.toDate().toISOString()}</p>
        </div>
      ))}
    </div>
  );
};
