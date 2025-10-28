import { useState } from 'react';
import './ImageSlider.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';

type ImageSliderProps = {
  images: string[];
  altText: string;
};
const ImageSlider = ({ images, altText }: ImageSliderProps) => {
  const [currentImg, setCurrentImg] = useState<number>(0);
  const [image, setImage] = useState<string>(images[0]);
  const LeftArrow = FaArrowLeft as any;
  const RightArrow = FaArrowRight as any;

  function handleImageSwipe(direction: number) {
    if (currentImg === images.length - 1 && direction > 0) {
      setCurrentImg(0);
    } else if (currentImg === 0 && direction < 0) {
      setCurrentImg(images.length - 1);
    } else {
      setCurrentImg(currentImg + direction);
    }

    setImage(images[currentImg]);
  }
  return (
    <div className="image-slider-container">
      <img src={image} alt={altText} className="image-slider-content-img" />
      <button className="arrow left-arrow" onClick={() => handleImageSwipe(1)}>
        <LeftArrow />
      </button>
      <button
        className="arrow right-arrow"
        onClick={() => handleImageSwipe(-1)}
      >
        <RightArrow />
      </button>
    </div>
  );
};

export default ImageSlider;
