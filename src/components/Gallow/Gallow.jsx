/* eslint-disable react/prop-types */
const Gallow = (props) => {
  return (
    <>
      <line
        id="gallow-leg"
        x1="75"
        y1="50"
        x2="75"
        y2="100%"
        style={{ stroke: "black", strokeWidth: "10" }}
      />
      <line
        id="gallow-top"
        x1="75"
        y1="50"
        x2="50%"
        y2="50"
        style={{ stroke: "black", strokeWidth: "10" }}
      />
      <line
        id="gallow-right-foot"
        x1="75"
        y1="100%"
        x2="30%"
        y2="100%"
        style={{ stroke: "black", strokeWidth: "10" }}
      />
      <line
        id="gallow-left-foot"
        x1="75"
        y1="100%"
        x2="-25%"
        y2="100%"
        style={{ stroke: "black", strokeWidth: "10" }}
      />
      <line
        id="gallow-rope"
        x1="50%"
        y1="50"
        x2="50%"
        y2="30%"
        style={{ stroke: "black", strokeWidth: "10" }}
      />
      {props.children}
    </>
  );
};

export default Gallow;
