
const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
    "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const gamePhrases = {
    phrase1: {
        phrase: 'programming',
        category: ' CATEGORY : technology',
        hint: ' HINT : the skill required to create this game',
    },

    phrase2: {
        phrase: 'batman',
        category: ' CATEGORY : super heroes',
        hint: ' HINT : his ears are pointy',
    },

    phrase3: {
        phrase: 'barber',
        category: ' CATEGORY : grooming',
        hint: ' HINT : i shave every day but my beard stays the same',
    },

    phrase4: {
        phrase: 'darkness',
        category: ' CATEGORY : interesting facts',
        hint: ' HINT : the more there is the less you see'
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
        $('.category').text(gamePhrases.phrase1.category)
        $('.hint').text(gamePhrases.phrase1.hint)
        const starting = gamePhrases.phrase1.phrase;
        console.log(starting)
        $('.phrase').text(starting)

    }

    $('.letter-button').on('click', function (event) {
        console.log(event)
        const letterClicked = ($(this).attr('data-letter'))
        if (letterClicked === 'f') {
            drawBody()
            leftLeg()
            rightLeg()
            rightArm()
            leftArm()
            head()

        }

    })
    loadGame()


    function drawBody() {
        const c = document.getElementById("myCanvas")
        const torso = c.getContext('2d')
        torso.lineWidth = 7;
        torso.lineCap = 'round'
        torso.moveTo(300, 80);
        torso.lineTo(300, 200);
        torso.stroke();

    }

    function leftLeg() {
        const c = document.getElementById('myCanvas')
        const leftLeg = c.getContext('2d')
        leftLeg.lineWidth = 7;
        leftLeg.lineCap = 'round'
        leftLeg.moveTo(300, 200)
        leftLeg.lineTo(250, 250)
        leftLeg.stroke()

    }
    function rightLeg() {
        const c = document.getElementById('myCanvas')
        const rightLeg = c.getContext('2d')
        rightLeg.lineWidth = 7;
        rightLeg.lineCap = 'round'
        rightLeg.moveTo(300, 200)
        rightLeg.lineTo(350, 250)
        rightLeg.stroke()

    }
    function rightArm() {
        const c = document.getElementById('myCanvas')
        const rightArm = c.getContext('2d')
        rightArm.lineWidth = 7;
        rightArm.lineCap = 'round'
        rightArm.moveTo(300, 110)
        rightArm.lineTo(350, 150)
        rightArm.stroke()

    }
    function leftArm() {
        const c = document.getElementById('myCanvas')
        const leftArm = c.getContext('2d')
        leftArm.lineWidth = 7;
        leftArm.lineCap = 'round'
        leftArm.moveTo(300, 110)
        leftArm.lineTo(250, 150)
        leftArm.stroke()

    }
    function head() {
        const c = document.getElementById('myCanvas')
        const head = c.getContext('2d')
        head.lineWidth = 7;
        head.lineCap = 'round'
        head.beginPath()
        head.arc(300, 40, 35, 0, 2 * Math.PI)
        head.stroke()

    }
})


