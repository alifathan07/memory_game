import React, { useState, useEffect } from 'react';

const ScoreComponent = () => {
  const [score, setScore] = useState(0); // This is the real score
  const [bestScore, setBestScore] = useState(0); // This is the best score

  useEffect(() => {
    // Whenever the score changes, check if it's a new best score
    if (score > bestScore) {
      setBestScore(score);
    }

    // If the score is 0, reset the best score
    if (score === 0) {
      setBestScore(bestScore); // Keep the best score unchanged
    }
  }, [score, bestScore]);

  const incrementScore = () => setScore(prevScore => prevScore + 1);
  const resetScore = () => setScore(0); // Resets the score to 0

  return (
    <div>
      <h1>Score: {score}</h1>
      <h2>Best Score: {bestScore}</h2>
      <button onClick={incrementScore}>Increment Score</button>
      <button onClick={resetScore}>Reset Score</button>
    </div>
  );
};

export default ScoreComponent;
