/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import categories from "../utils/categories.js";
import Keyboard from "../components/Keyboard/Keyboard.jsx";
import Word from "../components/Word/Word.jsx";
import { useParams } from "react-router";

const Game = () => {
  const [disabledKeys, setDisabledKeys] = useState([]);
  const [incorrectGuesses, setIncorrectGuesses] = useState(0);
  const [correctGuesses, setCorrectGuesses] = useState(0);
  const [currentWord, setCurrentWord] = useState("");
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);

  const params = useParams();
  const category = params.category;

  useEffect(() => {
    const word =
      categories[category][
        Math.floor(Math.random() * categories[category].length)
      ];
    setCurrentWord(word); // Set the word state
  }, [category]);

  const handleKeyClick = (key) => {
    // Update the state to include the clicked key
    setDisabledKeys([...disabledKeys, key]);
  };

  return (
    <div>
      <h1>Category: {category}</h1>
      <Word word={currentWord} />
      <Keyboard disabledKeys={disabledKeys} onKeyClick={handleKeyClick} />
    </div>
  );
};

export default Game;
