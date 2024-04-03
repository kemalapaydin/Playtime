import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  limit,
  where,
  Timestamp,
} from "firebase/firestore";

import type { NextApiRequest, NextApiResponse } from "next";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export type HistoryEntry = {
  playtime: number;
  timestamp: Timestamp;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    walletAddress,
    playtime,
    timestamp,
  }: { walletAddress: string; playtime: number; timestamp: string } = req.body;

  // Validate input data
  if (!walletAddress || !playtime || !timestamp) {
    return res.status(400).json({ message: "Missing required data" });
  }

  const historyCollectionRef = collection(
    db,
    "users",
    walletAddress,
    "history"
  );

  try {
    // Add the current playtime to the user's history
    await addDoc(historyCollectionRef, {
      playtime,
      timestamp: Timestamp.fromDate(new Date(timestamp)),
    });

    const historyQuery = query(
      historyCollectionRef,
      orderBy("timestamp", "desc")
    );
    const historySnapshot = await getDocs(historyQuery);

    if (historySnapshot.size > 1) {
      const historyDocs = historySnapshot.docs;
      const lastPlayed = historyDocs[0].data() as HistoryEntry;
      const secondLastPlayed = historyDocs[1].data() as HistoryEntry;

      const historyArray = historyDocs.map((doc) => {
        const data = doc.data() as HistoryEntry;
        return {
          ...data,
          timestamp: data.timestamp.toDate().toISOString(),
        };
      });

      const playtimeDifference =
        lastPlayed.playtime - secondLastPlayed.playtime;
      res.status(200).json({ playtimeDifference, historyArray });
    } else {
      res.status(200).json({ success: true, message: "Playtime added" });
    }
  } catch (error) {
    console.error("Error adding playtime to history:", error);
    res.status(500).json({ message: "Error processing request" });
  }
}
