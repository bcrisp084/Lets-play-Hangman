/* eslint-disable react/prop-types */
// pass in the letter, onclick and isDisabled props
const LetterButton = ({ letter, onClick, isDisabled }) => {
  const handleClick = () => {
    if (!isDisabled) {
      onClick(letter);
    }
  };
  //create a button for each letter with a click function and disabled property
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
