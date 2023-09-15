/* eslint-disable react/prop-types */
import "./Reset.css";

const Reset = ({ handleClick }) => {
  return (
    <div>
      <button className="reset" onClick={handleClick}>
        Reset
      </button>
    </div>
  );
};

export default Reset;
