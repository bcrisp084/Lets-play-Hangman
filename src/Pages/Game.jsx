import { useParams } from "react-router";
import { useState } from "react";
import categories from "../utils/categories.js";
import Keyboard from "../components/Keyboard/Keyboard.jsx";
import Word from "../components/Word/Word.jsx";

const Game = () => {
  const [incorrectGuesses, setIncorrectGuesses] = useState(0);
  const [correctGuesses, setCorrectGuesses] = useState(0);
  const [currentWord, setCurrentWord] = useState("");
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);

  const params = useParams();
  const category = params.category;
  const word =
    categories[category][
      Math.floor(Math.random() * categories[category].length)
    ];

  return (
    <div>
      <h1>Game</h1>
      <Word word={word} />
      <Keyboard />
    </div>
  );
};

export default Game;
