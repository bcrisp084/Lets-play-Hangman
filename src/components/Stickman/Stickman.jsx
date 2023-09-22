/* eslint-disable react/prop-types */
import ImageFig from "../ImageFig/ImageFig";
import "./Stickman.css";
// pass in the current image to down to the imageFig component
const Stickman = ({ currentImage }) => {
  return (
    <div className="stick-figure">
      <ImageFig image={currentImage} />
    </div>
  );
};

export default Stickman;
