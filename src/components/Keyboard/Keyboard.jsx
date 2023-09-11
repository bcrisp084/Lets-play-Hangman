import "./Keyboard.css";

const Keyboard = () => {
  const letters = "abcdefghijklmnopqrstuvwxyz".split("");

  return (
    <div className="letter">
      {letters.map((letter, index) => {
        return (
          <button className="letter-btn" key={index}>
            {letter}
          </button>
        );
      })}
      {console.log(letters)}
    </div>
  );
};

export default Keyboard;
