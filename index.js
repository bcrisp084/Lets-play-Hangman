$(document).ready(function () {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  let score = 0;
  const $score = $(".total");
  $score.html(score);

  function createButton() {
    for (let i = 0; i < alphabet.length; i++) {
      const element = alphabet[i];
      const letterBtn = $("<button>");
      letterBtn.addClass("letter-button letter letter-button-color");
      letterBtn.attr("data-letter", element);
      letterBtn.text(element);
      $("#alphabet").append(letterBtn);
    }
  }
  createButton();

  function drawBody() {
    const c = document.getElementById("myCanvas");
    const torso = c.getContext("2d");
    torso.lineWidth = 7;
    torso.lineCap = "round";
    torso.moveTo(200, 120);
    torso.lineTo(200, 220);
    torso.stroke();
  }

  function rightLeg() {
    const c = document.getElementById("myCanvas");
    const leftLeg = c.getContext("2d");
    leftLeg.lineWidth = 7;
    leftLeg.lineCap = "round";
    leftLeg.moveTo(200, 220);
    leftLeg.lineTo(250, 250);
    leftLeg.stroke();
  }
  function leftLeg() {
    const c = document.getElementById("myCanvas");
    const rightLeg = c.getContext("2d");
    rightLeg.lineWidth = 7;
    rightLeg.lineCap = "round";
    rightLeg.moveTo(200, 220);
    rightLeg.lineTo(150, 250);
    rightLeg.stroke();
  }
  function rightArm() {
    const c = document.getElementById("myCanvas");
    const rightArm = c.getContext("2d");
    rightArm.lineWidth = 7;
    rightArm.lineCap = "round";
    rightArm.moveTo(200, 120);
    rightArm.lineTo(150, 150);
    rightArm.stroke();
  }
  function leftArm() {
    const c = document.getElementById("myCanvas");
    const leftArm = c.getContext("2d");
    leftArm.lineWidth = 7;
    leftArm.lineCap = "round";
    leftArm.moveTo(200, 120);
    leftArm.lineTo(250, 150);
    leftArm.stroke();
  }
  function head() {
    const c = document.getElementById("myCanvas");
    const head = c.getContext("2d");
    head.lineWidth = 7;
    head.lineCap = "round";
    head.beginPath();
    head.arc(200, 80, 35, 0, 2 * Math.PI);
    head.stroke();
  }

  function gallowPole() {
    const c = document.getElementById("myCanvas");
    const g = c.getContext("2d");
    g.lineWidth = 10;
    g.lineCap = "square";
    g.beginPath();
    g.moveTo(10, 10);
    g.lineTo(10, 1500);
    g.stroke();
  }

  function gallowBase() {
    const c = document.getElementById("myCanvas");
    const b = c.getContext("2d");
    b.lineWidth = 25;
    b.beginPath();
    b.moveTo(300, 392);
    b.lineTo(20, 392);
    b.stroke();
  }

  function gallowRail() {
    const c = document.getElementById("myCanvas");
    const r = c.getContext("2d");
    r.lineWidth = 8;
    r.beginPath();
    r.moveTo(200, 45);
    r.lineTo(10, 8);
    r.stroke();
  }
  gallowRail();
  gallowPole();
  gallowBase();

  drawBody();
  leftLeg();
  rightLeg();
  leftArm();
  rightArm();
  head();
});
