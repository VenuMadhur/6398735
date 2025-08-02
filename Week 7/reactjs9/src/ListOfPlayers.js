import React from "react";

function ListOfPlayers() {
  // Step A: Declare an array of 11 players with name & score
  const players = [
    { name: "Virat Kohli", score: 95 },
    { name: "Rohit Sharma", score: 88 },
    { name: "KL Rahul", score: 66 },
    { name: "Shubman Gill", score: 72 },
    { name: "Suryakumar Yadav", score: 45 },
    { name: "Hardik Pandya", score: 74 },
    { name: "Ravindra Jadeja", score: 68 },
    { name: "R Ashwin", score: 52 },
    { name: "Mohammed Shami", score: 36 },
    { name: "Jasprit Bumrah", score: 41 },
    { name: "Kuldeep Yadav", score: 60 }
  ];

  // Step B: Use map() to display all players
  const allPlayers = players.map((player, index) => (
    <li key={index}>{player.name} - {player.score}</li>
  ));

  // Step C: Filter players with score < 70 using arrow functions
  const lowScorers = players
    .filter(p => p.score < 70)
    .map((player, index) => <li key={index}>{player.name} - {player.score}</li>);

  return (
    <div>
      <h2>All Players</h2>
      <ul>{allPlayers}</ul>

      <h2>Players with score below 70</h2>
      <ul>{lowScorers}</ul>
    </div>
  );
}

export default ListOfPlayers;
