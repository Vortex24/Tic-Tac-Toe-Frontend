import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../assets/styles/LandingPage.css';

function LandingPage() {
  const navigate = useNavigate();

  const startGame = () => {
    navigate('/game');
  };

  return (
    <div className="landing-container">
      <h1 className="landing-heading">Welcome to Tic-Tac-Toe</h1>
      <p className="landing-text">Instructions on how to play...</p>
      <button className="start-button" onClick={startGame}>Start Game</button>
    </div>
  );
}

export default LandingPage;
