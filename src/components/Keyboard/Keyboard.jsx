/* eslint-disable react/prop-types */
import LetterButton from "../LetterButton/LetterButton";
import "./Keyboard.css";
import { motion } from "framer-motion";

const Keyboard = ({ disabledKeys, onKeyClick }) => {
  const letters = "abcdefghijklmnopqrstuvwxyz".split("");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="letter"
    >
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
