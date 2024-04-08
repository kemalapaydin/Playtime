// Profile.js

import React from "react";
import styles from "./Profile.module.css";
import GameTime from "../../components/Gametime";

const Profile = () => {
  const profilePhoto = "https://avatars.githubusercontent.com/u/68289275?v=4";
  const username = "johndoe";
  const achievements = [
    "Completed the tutorial",
    "Completed the game",
    "Achieved a high score",
  ];
  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileHeader}>
        <img src={profilePhoto} alt="Profile" className={styles.profilePhoto} />
        <h2 className={styles.username}>{username}</h2>
        <GameTime />
      </div>
      <div className={styles.achievementsContainer}>
        <h3 className={styles.achievementsHeader}>Achievements</h3>
        <ul className={styles.achievementsList}>
          {achievements.map((achievement, index) => (
            <li key={index} className={styles.achievement}>
              {achievement}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
