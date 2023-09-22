/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import categories from "../utils/categories.js";
import Keyboard from "../components/Keyboard/Keyboard.jsx";
import Word from "../components/Word/Word.jsx";
import Timer from "../components/Timer/Timer.jsx";
import Stickman from "../components/Stickman/Stickman.jsx";
import { useParams } from "react-router";
import Stickone from "../images/Stickone.png";
import Sticktwo from "../images/Sticktwo.png";
import Stickthree from "../images/Stickthree.png";
import Stickfour from "../images/Stickfour.png";
import Stickfive from "../images/Stickfive.png";
import Sticksix from "../images/Sticksix.jpg";
import Restart from "../components/Restart/Restart.jsx";
const images = [Stickone, Sticktwo, Stickthree, Stickfour, Stickfive, Sticksix];

let index = 0;
const Game = () => {
  const [disabledKeys, setDisabledKeys] = useState([]);
  const [incorrectGuesses, setIncorrectGuesses] = useState(5);
  const [currentWord, setCurrentWord] = useState("");
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [time, setTime] = useState(45);
  const [currentImage, setCurrentImage] = useState(images[index]);
  const params = useParams();
  const category = params.category;

  useEffect(() => {
    index = 0;
    if (!gameOver && !gameWon) {
      const wordIndex = Math.floor(Math.random() * categories[category].length);
      const word = categories[category][wordIndex];
      setCurrentWord(word);
    }
    let timerInterval;
    if (!gameOver && !gameWon) {
      timerInterval = setInterval(() => {
        setTime((prev) => {
          if (prev === 0) {
            clearInterval(timerInterval);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timerInterval);
  }, [category, gameOver, gameWon]);

  const handleKeyClick = (key) => {
    if (!currentWord.includes(key)) {
      setIncorrectGuesses(incorrectGuesses - 1);
      index++;
      setCurrentImage(images[index]);
    }

    // Update the state to include the clicked key
    const newGuessedLetters = [...guessedLetters, key];
    setGuessedLetters(newGuessedLetters);
    setDisabledKeys([...disabledKeys, key]);

    // Check for a loss condition
    if (incorrectGuesses <= 1) {
      setGameOver(true);
    }

    // Check for a win condition here when a letter is guessed
    if (
      currentWord
        .split("")
        .every((letter) => newGuessedLetters.includes(letter))
    ) {
      // Check if there are any underscores left in the word
      if (!currentWord.includes("_")) {
        setGameWon(true);
      }
    }
  };

  // Function to check if the game should end
  const checkGameEnd = () => {
    if (gameOver || gameWon) {
      return true;
    }
  };

  return (
    <>
      <div className="header">
        <div className="heading">
          <h1>Category: {category}</h1>
          <Timer time={time} />
        </div>
      </div>
      {gameOver ? (
        <h2>Game Over!</h2>
      ) : (
        <h2>Guesses Left: {incorrectGuesses}</h2>
      )}
      {gameWon ? (
        <h2>You Won!</h2>
      ) : gameOver ? (
        <h2>You Lost!</h2>
      ) : (
        <Stickman currentImage={currentImage} />
      )}
      {checkGameEnd() ? (
        <>
          <h2>The word was: {currentWord}</h2>
          <Restart />
        </>
      ) : (
        <>
          <Word guessed={guessedLetters} word={currentWord} />
          <Keyboard disabledKeys={disabledKeys} onKeyClick={handleKeyClick} />
        </>
      )}
    </>
  );
};

export default Game;
