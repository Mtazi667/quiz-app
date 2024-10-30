import React from 'react';
import '../styles/Scoreboard.css';

const Scoreboard = ({ scores }) => {
  return (
    <div className="scoreboard">
      <h2>Scoreboard</h2>
      <ul>
        {scores.map((score, index) => (
          <li key={index}>
            Team {index + 1}: {score} points
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Scoreboard;
