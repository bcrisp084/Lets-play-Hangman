/* eslint-disable react/prop-types */
const Timer = ({ time }) => {
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
