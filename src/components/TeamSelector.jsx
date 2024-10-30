import React from 'react';
import '../styles/TeamSelector.css';

const TeamSelector = ({ numTeams, onTeamSelected }) => {
    return (
        <div className="team-selector">
            <h3>Select the Team that Buzzed</h3>
            <div className="team-buttons">
                {Array.from({ length: numTeams }, (_, index) => (
                    <button
                        key={index}
                        className="team-button"
                        onClick={() => onTeamSelected(index)}
                    >
                        Team {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default TeamSelector;
