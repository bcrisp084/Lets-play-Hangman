import StickOne from "../../images/stick-one.png";
import ImageFig from "../ImageFig/ImageFig";
import "./Stickman.css";

const Stickman = () => {
  return (
    <div className="stick-figure">
      <ImageFig image={StickOne} />
    </div>
  );
};

export default Stickman;
