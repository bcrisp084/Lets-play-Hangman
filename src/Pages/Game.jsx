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
  const [currentImage, setCurrentImage] = useState(images[index]); // [0, 1, 2, 3, 4, 5, 6
  const params = useParams();
  const category = params.category;

  useEffect(() => {
    if (!gameOver) {
      const index = Math.floor(Math.random() * categories[category].length);
      const word = categories[category][index];
      setCurrentWord(word); // Set the word state
    }
    let timerInterval;
    if (!gameOver) {
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
  }, [category, gameOver]);

  const handleKeyClick = (key) => {
    // Check if the clicked key is in the current word
    if (!currentWord.includes(key)) {
      setIncorrectGuesses(incorrectGuesses - 1);
      index++;
      setCurrentImage(images[index]);
    }

    // Update the state to include the clicked key
    setGuessedLetters([...guessedLetters, key]);
    setDisabledKeys([...disabledKeys, key]);

    // Check for a win condition
    if (
      currentWord.split("").every((letter) => guessedLetters.includes(letter))
    ) {
      setGameWon(true);
      return; // Exit the function early to prevent further processing
    }

    // Check for a loss condition
    if (incorrectGuesses <= 1) {
      setGameOver(true);
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
      <Word guessed={guessedLetters} word={currentWord} />
      <Keyboard disabledKeys={disabledKeys} onKeyClick={handleKeyClick} />
    </>
  );
};

export default Game;
