/* eslint-disable react/prop-types */
import "./Word.css";
const Word = ({ word, guessed }) => {
  const isLetter = word.split("").map((letter) => {
    return guessed.includes(letter) ? letter : "_";
  });
  return (
    <div className="word-area">
      {isLetter.map((letter, index) => {
        return (
          <span className="word-letter" key={index}>
            {letter}
          </span>
        );
      })}
    </div>
  );
};

export default Word;
