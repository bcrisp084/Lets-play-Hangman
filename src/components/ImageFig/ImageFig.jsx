/* eslint-disable react/prop-types */
import "./ImageFig.css";
//create component for stick figure image
const ImageFig = ({ image }) => {
  return (
    <>
      <img src={image}></img>
    </>
  );
};

export default ImageFig;
