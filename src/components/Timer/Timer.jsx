/* eslint-disable react/prop-types */
// pass in the time state
const Timer = ({ time }) => {
  //check how much time is left and determine the string added to it
  return (
    <div>
      <h3>
        {time > 1
          ? time + " seconds left"
          : time === 1
          ? time + " second left"
          : "Times up!"}
      </h3>
    </div>
  );
};

export default Timer;
