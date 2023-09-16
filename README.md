# Hangman

The traditional Hangman game, built with React and Vite.

## Description

This is a simple game of Hangman, built with React and Vite. The game is played by guessing letters to complete a word. If the player guesses incorrectly 6 times, the game is over and the player loses. If the player guesses all the letters correctly, the player wins. This game is also timed, so the player must guess the word before the timer runs out. I wanted to take a different approach to this game, so I decided to use images that are displayed based on the number of incorrect guesses. The depiction of the images is a stick figure essentially walking to the gallos making different distinct faces on each display.

## Installation

To install this project, clone the repository and run `npm install` to install the dependencies. Then run `npm run dev` to start the development server.

## Usage

To play the game start by choosing a category. Once a category is chosen, the game will start. The player will have 6 incorrect guesses before the game is over. The player can guess a letter by clicking on the letter buttons. If the player guesses all the letters correctly, the player wins. If the player guesses incorrectly 6 times or the timer runs out the player loses. The player can also restart the game at any time by clicking the restart button.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Site

Click the link to go the live webpage => [Hangman](https://lets-play-hangman.vercel.app/)

## Resources

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)

# Vite + React

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
