/* eslint-disable react/prop-types */
// Keyboard.js
import "./Keyboard.css";

const Keyboard = ({ disabledKeys, onKeyClick }) => {
  const letters = "abcdefghijklmnopqrstuvwxyz".split("");

  return (
    <div className="letter">
      {letters.map((letter, index) => {
        const isDisabled = disabledKeys.includes(letter);
        return (
          <button
            className="letter-btn"
            key={index}
            disabled={isDisabled}
            onClick={() => {
              if (!isDisabled) {
                onKeyClick(letter); // Notify the parent of the key click
              }
            }}
          >
            {letter}
          </button>
        );
      })}
    </div>
  );
};

export default Keyboard;
