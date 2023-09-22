/* eslint-disable react/prop-types */
import "./Word.css";
// pass in the current word and the letters guessed
const Word = ({ word, guessed }) => {
  //split the word and either return the letter or an underscore
  const isLetter = word.split("").map((letter) => {
    return guessed.includes(letter) ? letter : "_";
  });

  return (
    // we create spans for each letter of the current word
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
