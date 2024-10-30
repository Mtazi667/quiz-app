import React from 'react';
import '../styles/QuestionDisplay.css';
const QuestionDisplay = ({
    questionData,
    revealedOptionsCount,
    onRevealNextOption,
    onOptionSelected,
    selectedAnswer,
    answerResult,
}) => {
    if (!questionData) return null;

    const { question, options } = questionData;
    const optionKeys = ['a', 'b', 'c', 'd'];

    const revealedOptions = optionKeys.slice(0, revealedOptionsCount);

    return (
        <div className="question-display">
            <h2 className="question-text">{question}</h2>
            <div className="options-container">
                {revealedOptions.map((key) => (
                    <div
                        key={key}
                        className={`option ${selectedAnswer === key
                            ? answerResult === 'correct'
                                ? 'correct'
                                : answerResult === 'incorrect'
                                    ? 'incorrect'
                                    : 'pending'
                            : ''
                            }`}
                        onClick={() => onOptionSelected(key)}
                    >
                        <span className="option-key">{key.toUpperCase()}:</span> {options[key]}
                    </div>
                ))}
                {optionKeys.slice(revealedOptionsCount).map((key) => (
                    <div key={key} className="option blank">
                        <span className="option-key">{key.toUpperCase()}:</span> __________
                    </div>
                ))}
            </div>
            {revealedOptionsCount < 4 && (
                <button className="reveal-button" onClick={onRevealNextOption}>
                    {/* Right arrow icon */}
                    <i className="fas fa-arrow-right"></i>
                    <span className="arrow-icon">➔</span>
                </button>
            )}
        </div>
    );
};

export default QuestionDisplay;