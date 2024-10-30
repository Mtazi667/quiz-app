import React, { useState } from 'react';
import '../styles/TeamSetup.css';

const TeamSetup = ({ onStartGame }) => {
  const [numTeams, setNumTeams] = useState(2);

  const handleStart = () => {
    if (numTeams > 0) {
      onStartGame(numTeams);
    }
  };

  return (
    <div className="team-setup">
      <h2>Welcome to the Quiz Game</h2>
      <label>
        Number of Teams:
        <input
          type="number"
          min="1"
          max="10"
          value={numTeams}
          onChange={(e) => setNumTeams(parseInt(e.target.value))}
        />
      </label>
      <button onClick={handleStart}>Start Game</button>
    </div>
  );
};

export default TeamSetup;
