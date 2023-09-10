import { useParams } from "react-router";
import {
  movies,
  countries,
  animals,
  fruits,
  programmingLanguages,
  sports,
  cars,
  music,
} from "../utils/categories.js";

const Game = () => {
  const params = useParams();
  const category = params.category;
  const categories = {
    movies,
    countries,
    animals,
    fruits,
    programmingLanguages,
    sports,
    cars,
    music,
  };
  const words = categories[category];
  console.log(words);

  return (
    <div>
      <h1>Game</h1>
    </div>
  );
};

export default Game;
