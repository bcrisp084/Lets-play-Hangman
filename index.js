
const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
    "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const gamePhrases = {
    phrase1: {
        phrase: 'programming',
        category: 'technology',
        hint: 'the skill required to create this game',
    },

    phrase2: {
        phrase: 'batman',
        category: 'super heroes',
        hint: 'his ears are pointy',
    },

    phrase3: {
        phrase: 'barber',
        category: 'grooming',
        hint: 'i shave every day but my beard stays the same',
    },

    phrase4: {
        phrase: 'darkness',
        category: 'interesting facts',
        hint: 'the more there is the less you see'
    }
}

$(document).ready(function () {

    for (let i = 0; i < alphabet.length; i++) {
        const element = alphabet[i]
        const letterBtn = $('<button>')
        letterBtn.addClass("letter-button letter letter-button-color");
        letterBtn.attr("data-letter", element)
        letterBtn.text(element)
        $('#alphabet').append(letterBtn)
    }

    function loadGame() {

    }

})


