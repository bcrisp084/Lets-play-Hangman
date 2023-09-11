/* eslint-disable react/prop-types */
import "./Word.css";
const Word = ({ word }) => {
  return (
    <div className="word-area">
      {word.split("").map((letter, index) => {
        return (
          <span className="word-letter" key={index}>
            _
          </span>
        );
      })}
    </div>
  );
};

export default Word;
