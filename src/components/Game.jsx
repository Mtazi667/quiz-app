import React, { useState, useEffect } from 'react';
import QuestionDisplay from './QuestionDisplay';
import TeamSelector from './TeamSelector';
import Scoreboard from './Scoreboard';
import Timer from './Timer';
import '../styles/Game.css';

const Game = ({ numTeams, scores, setScores, questions }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [revealedOptionsCount, setRevealedOptionsCount] = useState(0);
    const [selectedTeam, setSelectedTeam] = useState(null);
    const [timerActive, setTimerActive] = useState(false);
    const [timer, setTimer] = useState(10);
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [answerResult, setAnswerResult] = useState(null);

    const currentQuestion = questions[currentQuestionIndex];

    const revealNextOption = () => {
        if (revealedOptionsCount < 4) {
            setRevealedOptionsCount(revealedOptionsCount + 1);
        }
    };

    const handleTeamSelected = (teamIndex) => {
        setSelectedTeam(teamIndex);
        setTimerActive(true);
        setTimer(10);
    };

    useEffect(() => {
        let timerInterval;
        if (timerActive && timer > 0) {
            timerInterval = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);
        } else if (timer === 0) {
            setTimerActive(false);
            setSelectedTeam(null);
            setSelectedAnswer('');
            setAnswerResult(null);
        }
        return () => clearInterval(timerInterval);
    }, [timerActive, timer]);

    const handleOptionSelected = (optionKey) => {
        if (selectedTeam === null || selectedTeam === undefined || selectedAnswer || answerResult) {
            return;
        }

        setSelectedAnswer(optionKey);
        if (optionKey === currentQuestion.answer.toLowerCase()) {
            setAnswerResult('correct');
            setScores((prevScores) =>
                prevScores.map((score, index) =>
                    index === selectedTeam ? score + 10 : score
                )
            );
            setTimerActive(false);
        } else {
            setAnswerResult('incorrect');
            setTimerActive(false);
            setTimeout(() => {
                setSelectedTeam(null);
                setSelectedAnswer('');
                setAnswerResult(null);
            }, 1500);
        }
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
            setRevealedOptionsCount(0);
            setSelectedTeam(null);
            setTimerActive(false);
            setTimer(10);
            setSelectedAnswer('');
            setAnswerResult(null);
        } else {
            alert('Quiz Finished!');
        }
    };

    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.key === 'Enter' && answerResult === 'correct') {
                handleNextQuestion();
            }
        };
        window.addEventListener('keydown', handleKeyPress);
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [answerResult]);

    return (
        <div className="game-container">
            <div className="center-container">
                <div className="question-section">
                    <QuestionDisplay
                        questionData={currentQuestion}
                        revealedOptionsCount={revealedOptionsCount}
                        onRevealNextOption={revealNextOption}
                        onOptionSelected={handleOptionSelected}
                        selectedAnswer={selectedAnswer}
                        answerResult={answerResult}
                    />
                    {revealedOptionsCount < 4 && (
                        <button className="reveal-button" onClick={revealNextOption}>
                            <i className="fas fa-arrow-right"></i>
                        </button>
                    )}
                    {revealedOptionsCount === 4 && !selectedTeam && !selectedAnswer && (
                        <TeamSelector numTeams={numTeams} onTeamSelected={handleTeamSelected} />
                    )}
                    {selectedTeam !== null && (
                        <div className="timer-section">
                            <Timer time={timer} />
                        </div>
                    )}
                    {answerResult === 'correct' && (
                        <button className="next-question-button" onClick={handleNextQuestion}>
                            Next Question
                        </button>
                    )}
                </div>
            </div>
            <Scoreboard scores={scores} />
        </div>
    );
};

export default Game;
