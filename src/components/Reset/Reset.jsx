/* eslint-disable react/prop-types */
import "./Reset.css";

const Reset = ({ handleReset }) => {
  return (
    <div>
      <button className="reset" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};

export default Reset;
