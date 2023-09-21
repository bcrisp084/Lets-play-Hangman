/* eslint-disable react/prop-types */
import ImageFig from "../ImageFig/ImageFig";
import "./Stickman.css";

const Stickman = ({ currentImage }) => {
  return (
    <div className="stick-figure">
      <ImageFig image={currentImage} />
    </div>
  );
};

export default Stickman;
