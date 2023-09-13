/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import categories from "../utils/categories.js";
import Keyboard from "../components/Keyboard/Keyboard.jsx";
import Word from "../components/Word/Word.jsx";
import { useParams } from "react-router";

const Game = () => {
  const [disabledKeys, setDisabledKeys] = useState([]);
  const [incorrectGuesses, setIncorrectGuesses] = useState(10);
  const [currentWord, setCurrentWord] = useState("");
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);

  const params = useParams();
  const category = params.category;
  console.log(currentWord);

  useEffect(() => {
    const word =
      categories[category][
        Math.floor(Math.random() * categories[category].length)
      ];
    setCurrentWord(word); // Set the word state
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
  };

  return (
    <div>
      <h1>Category: {category}</h1>
      {gameOver ? (
        <h2>Game Over!</h2>
      ) : (
        <h2>Guesses Left: {incorrectGuesses}</h2>
      )}

      <Word word={currentWord} />
      <Keyboard disabledKeys={disabledKeys} onKeyClick={handleKeyClick} />
    </div>
  );
};

export default Game;
