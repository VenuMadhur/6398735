import React from "react";

function IndianPlayers() {
  const T20players = ["Virat", "Rohit", "Bumrah"];
  const RanjiTrophy = ["Pujara", "Rahane", "Ishant"];

  // merge using spread
  const allPlayers = [...T20players, ...RanjiTrophy];

  // destructure odd/even players
  const [odd1, even1, odd2, even2, odd3, even3] = allPlayers;

  return (
    <div>
      <h2>📌 Merged Players</h2>
      <ul>
        {allPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h2>🏏 Odd Team Players</h2>
      <ul>
        <li>{odd1}</li>
        <li>{odd2}</li>
        <li>{odd3}</li>
      </ul>

      <h2>🏏 Even Team Players</h2>
      <ul>
        <li>{even1}</li>
        <li>{even2}</li>
        <li>{even3}</li>
      </ul>
    </div>
  );
}

export default IndianPlayers;
