// Score.js
import React from 'react';

const Score = ({ score, onNextQuestion }) => (
    <div className="score-container">
        <h2>Results</h2>
        <h4>Your score: {score}</h4>
        <button className="btn btn-primary mt-3" onClick={onNextQuestion}>
            Next Question
        </button>
    </div>
);

export default Score;
