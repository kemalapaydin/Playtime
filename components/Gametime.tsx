import React from "react";

const GameTime: React.FC = () => {
  const [time, setTime] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div style={{ flexDirection: "column", marginLeft: "auto" }}>
      <p
        style={{
          fontSize: "1.2em",
          textAlign: "center",
          color: "white",
          marginLeft: "auto",
        }}
      >
        Game Time: {time} seconds
      </p>
      <button
        style={{
          backgroundColor: "gold",
          fontWeight: "bold",
          padding: "10px",
          border: "none",
          borderRadius: "5px",
          marginTop: "10px",
          width: "100%",
        }}
        onClick={() => {
          // Call the playtime claim API here
          // Replace the following line with the actual API call
          fetch("https://api.example.com/playtime/claim")
            .then((response) => response.json())
            .then((data) => {
              // Handle the API response here
            })
            .catch((error) => {
              // Handle any errors here
            });
        }}
      >
        Claim
      </button>
    </div>
  );
};

export default GameTime;
