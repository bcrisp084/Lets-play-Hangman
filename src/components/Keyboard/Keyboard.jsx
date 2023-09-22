/* eslint-disable react/prop-types */
//import LetterButton component
import LetterButton from "../LetterButton/LetterButton";
import "./Keyboard.css";
//import framer motion
import { motion } from "framer-motion";
// pass in props for disabled keys and on key click
const Keyboard = ({ disabledKeys, onKeyClick }) => {
  const letters = "abcdefghijklmnopqrstuvwxyz".split("");

  return (
    // use framer motion to animate keyboard
    // map over each letter and create a letter button component
    <motion.div className="letter">
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
    </motion.div>
  );
};

export default Keyboard;
