/* eslint-disable react/prop-types */
import LetterButton from "../LetterButton/LetterButton";
import "./Keyboard.css";

const Keyboard = ({ disabledKeys, onKeyClick }) => {
  const letters = "abcdefghijklmnopqrstuvwxyz".split("");

  return (
    <div className="letter">
      {letters.map((letter, index) => {
        const isDisabled = disabledKeys.includes(letter);
        return (
          <LetterButton
            key={index}
            isDisabled={isDisabled}
            letter={letter}
            onClick={onKeyClick}
          >
            {letter}
          </LetterButton>
        );
      })}
    </div>
  );
};

export default Keyboard;
