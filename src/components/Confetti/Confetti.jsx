/* eslint-disable react/prop-types */
//import confetti dependency
import Confetti from "react-confetti";
// create component
const ConfettiComponent = ({ numberOfPieces }) => {
  // pass in props for width, height, and number of pieces
  return (
    <Confetti
      width={window.innerWidth}
      height={window.innerHeight}
      numberOfPieces={numberOfPieces}
    />
  );
};

export default ConfettiComponent;
