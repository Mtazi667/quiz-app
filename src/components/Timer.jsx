import React from 'react';
import '../styles/Timer.css';

const Timer = ({ time }) => {
  return (
    <div className="timer">
      <p>Time Remaining: {time} seconds</p>
    </div>
  );
};

export default Timer;
