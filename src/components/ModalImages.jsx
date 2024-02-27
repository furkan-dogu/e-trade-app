import { Image } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";


function ModalImages({ images }) {
  return (
    <Carousel>
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <Image className="d-block w-100 p-2" height="300px" src={image} alt="slide" />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ModalImages;
