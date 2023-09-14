/* eslint-disable react/prop-types */
const LetterButton = ({ letter, onClick, isDisabled }) => {
  const handleClick = () => {
    if (!isDisabled) {
      onClick(letter);
    }
  };
  return (
    <div>
      <button
        className="letter-btn"
        disabled={isDisabled}
        onClick={handleClick}
      >
        {letter}
      </button>
    </div>
  );
};

export default LetterButton;
