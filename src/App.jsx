import React, { useState } from 'react';
import TeamSetup from './components/TeamSetup';
import Game from './components/Game';
import questions from './questions';
import './styles/App.css';
function App() {
    const [numTeams, setNumTeams] = useState(0);
    const [scores, setScores] = useState([]);
    const [gameStarted, setGameStarted] = useState(false);

    const handleStartGame = (teams) => {
        setNumTeams(teams);
        setScores(Array(teams).fill(0));
        setGameStarted(true);
    };

    return (
        <div className="app-container">
            {!gameStarted ? (
                <TeamSetup onStartGame={handleStartGame} />
            ) : (
                <Game
                    numTeams={numTeams}
                    scores={scores}
                    setScores={setScores}
                    questions={questions}
                />
            )}
        </div>
    );
}

export default App;
