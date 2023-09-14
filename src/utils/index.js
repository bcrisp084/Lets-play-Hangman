// let score = 0;
// const $score = $(".total");
// let letterBtn;
// $score.html(score);
// let blankArray = [];
// let chosenMovie = "";
// let numOfBlanks = 0;

// function createBlanks() {
//   chosenMovie = movies[Math.floor(Math.random() * movies.length)].split("");
//   console.log(chosenMovie);
//   numOfBlanks = chosenMovie.length;
//   for (let i = 0; i < numOfBlanks; i++) {
//     blankArray.push("_");
//   }
//   wordSpotlight.text(blankArray.join(" "));
// }

// function checkGuessed(letter) {
//   let correctGuess = false;
//   for (let i = 0; i < numOfBlanks; i++) {
//     if (chosenMovie[i] === letter) {
//       correctGuess = true;
//     }
//   }
//   if (correctGuess) {
//     for (let j = 0; j < numOfBlanks; j++) {
//       if (chosenMovie[j] === letter) {
//         blankArray[j] = letter;
//       }
//     }
//     wordSpotlight.text(blankArray.join(""));
//   }
// }

// $(document).on("click", ".letter", function (event) {
//   const key = $(this).attr("data-letter").toLowerCase();
//   var alphabetNumericCharacters = "abcdefghijklmnopqrstuvwxyz0123456789 ".split(
//     ""
//   );
//   if (alphabetNumericCharacters.includes(key)) {
//     let letterGuessed = $(this).attr("data-letter");
//     checkGuessed(letterGuessed);
//   }
// });
