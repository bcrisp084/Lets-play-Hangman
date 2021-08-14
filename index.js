// create array of random words
// iterate through the array to select a random word for the game
// set up array for pushing users answers to the game
// prompt user for a guess
// check the guess against the letters in the current word.
// if lette is correct show some validation
// if choice is wrong push wrong choice to array and game is one step closer to being over
// 

window.onload = function () {


    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
        "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    const buttons = function () {
        manyButtons = document.getElementById("button");
        letters = document.createElement("ul")

        for (let i = 0; i < alphabet.length; i++) {
            letters.id = "alphabet";
            list = document.createElement("li");
            list.id = "letter";
            list.innerHTML = alphabet[i];
            manyButtons.appendChild(letters);
            letters.appendChild(list);

        }
    }
    buttons()
}
