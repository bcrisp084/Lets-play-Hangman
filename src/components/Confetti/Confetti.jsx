import React from "react";
import Confetti from "react-confetti";

const ConfettiComponent = ({ numberOfPieces }) => {
  return (
    <Confetti
      width={window.innerWidth}
      height={window.innerHeight}
      numberOfPieces={numberOfPieces}
    />
  );
};

export default ConfettiComponent;
