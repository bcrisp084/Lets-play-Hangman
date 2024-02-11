export const Head = () => {
  return (
    <>
      <circle
        id="head"
        cx="50%"
        cy="40%"
        r="50"
        stroke="black"
        strokeWidth="3"
        fillOpacity={0}
      />
      <circle
        id="left-eye"
        cx="45%"
        cy="38%"
        r="10"
        stroke="black"
        strokeWidth="3"
        fill="white"
      />
      <circle
        id="right-eye"
        cx="55%"
        cy="38%"
        r="10"
        stroke="black"
        strokeWidth="3"
        fill="white"
      />
      <circle
        id="left-eye-ball"
        cx="45%"
        cy="38%"
        r="4"
        stroke="black"
        strokeWidth="3"
      />
      <circle
        id="right-eye-ball"
        cx="55%"
        cy="38%"
        r="4"
        stroke="black"
        strokeWidth="3"
      />
      <polyline
        id="mouth"
        points="225,220, 240,210 260,210, 275,220"
        style={{ fill: "none", stroke: "black", strokeWidth: "3" }}
      />
    </>
  );
};

export const Body = () => {
  return (
    <>
      <line
        id="body"
        x1="50%"
        y1="50%"
        x2="50%"
        y2="80%"
        style={{ stroke: "black", strokeWidth: "3" }}
      />
    </>
  );
};

export const LeftArm = () => {
  return (
    <line
      id="left-arm"
      x1="50%"
      y1="55%"
      x2="40%"
      y2="65%"
      style={{ stroke: "black", strokeWidth: "3" }}
    />
  );
};

export const RightArm = () => {
  return (
    <line
      id="right-arm"
      x1="50%"
      y1="55%"
      x2="60%"
      y2="65%"
      style={{ stroke: "black", strokeWidth: "3" }}
    />
  );
};

export const LeftLeg = () => {
  return (
    <>
      <line
        id="left-leg"
        x1="50%"
        y1="80%"
        x2="45%"
        y2="90%"
        style={{ stroke: " black", strokeWidth: "3" }}
      />
    </>
  );
};

export const RightLeg = () => {
  return (
    <line
      id="right-leg"
      x1="50%"
      y1="90%"
      x2="45%"
      y2="90%"
      style={{ stroke: "black", strokeWidth: "3" }}
    />
  );
};
