import "./Keyboard.css";
import { useState } from "react";

const Keyboard = () => {
  const letters = "abcdefghijklmnopqrstuvwxyz".split("");
  const [disabled, setDisabled] = useState([]);

  const handleClick = (letter) => {
    setDisabled([...disabled, letter]);
  };

  return (
    <div className="letter">
      {letters.map((letter, index) => {
        const isDisabled = disabled.includes(letter);
        return (
          <button
            className="letter-btn"
            key={index}
            disabled={isDisabled}
            onClick={() => handleClick(letter)}
          >
            {letter}
          </button>
        );
      })}
    </div>
  );
};

export default Keyboard;
