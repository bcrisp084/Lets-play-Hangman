/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import categories from "../utils/categories.js";
import Keyboard from "../components/Keyboard/Keyboard.jsx";
import Word from "../components/Word/Word.jsx";
import Reset from "../components/Reset/Reset.jsx";
import Timer from "../components/Timer/Timer.jsx";
import Stickman from "../components/Stickman/Stickman.jsx";
import { useParams } from "react-router";

const Game = () => {
  const [disabledKeys, setDisabledKeys] = useState([]);
  const [incorrectGuesses, setIncorrectGuesses] = useState(10);
  const [currentWord, setCurrentWord] = useState("");
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [time, setTime] = useState(30);
  const params = useParams();
  const category = params.category;
  console.log("category", category);
  console.log("time", time);

  useEffect(() => {
    const index = Math.floor(Math.random() * categories[category].length);
    const word = categories[category][index];
    setCurrentWord(word); // Set the word state
    const timerInterval = setInterval(() => {
      setTime((prev) => {
        if (prev === 0) {
          clearInterval(timerInterval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timerInterval);
  }, [category]);

  const handleKeyClick = (key) => {
    // Update the state to include the clicked key
    if (!currentWord.includes(key)) {
      setIncorrectGuesses(incorrectGuesses - 1);
    }
    if (incorrectGuesses < 1) {
      setGameOver(true);
    }
    if (
      currentWord.split("").every((letter) => guessedLetters.includes(letter))
    ) {
      setGameWon(true);
    }
    setGuessedLetters([...guessedLetters, key]);
    // Update the state to include the clicked key
    setDisabledKeys([...disabledKeys, key]);
  };

  const handleReset = () => {
    setDisabledKeys([]);
    setIncorrectGuesses(10);
    setGuessedLetters([]);
    setGameOver(false);
    setGameWon(false);
    setTime(30);
  };

  return (
    <>
      <div className="header">
        <Reset handleClick={handleReset} />
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
      <Stickman />
      <Word guessed={guessedLetters} word={currentWord} />
      <Keyboard disabledKeys={disabledKeys} onKeyClick={handleKeyClick} />
    </>
  );
};

export default Game;
