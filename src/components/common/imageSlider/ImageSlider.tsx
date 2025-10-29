import { useState } from 'react';
import './ImageSlider.css';
import { FaArrowLeft, FaArrowRight, FaImage } from 'react-icons/fa6';
import NoDataMessage from '../noDataMessage/NoDataMessage';

type ImageSliderProps = {
  images: string[];
  altText: string;
};
const ImageSlider = ({ images, altText }: ImageSliderProps) => {
  const [currentImgIdx, setCurrentImgIdx] = useState<number>(0);
  const [image, setImage] = useState<string>(images[0]);
  const LeftArrow = FaArrowLeft as any;
  const RightArrow = FaArrowRight as any;
  const ImageIcon = FaImage as any;

  function handleImageSwipe(direction: number) {
    console.log(`Direction: ${direction}, current idx: ${currentImgIdx}`);
    if (currentImgIdx === images.length - 1 && direction > 0) {
      setCurrentImgIdx(0);
    } else if (currentImgIdx === 0 && direction < 0) {
      setCurrentImgIdx(images.length - 1);
    } else {
      setCurrentImgIdx((prev) => prev + direction);
    }

    setImage(images[currentImgIdx]);
  }
  return (
    <div className="image-slider-container">
      {images.length > 0 ? (
        <>
          <img src={image} alt={altText} className="image-slider-content-img" />
          <button
            className="arrow left-arrow"
            onClick={() => handleImageSwipe(-1)}
            disabled={images.length <= 1}
          >
            <LeftArrow />
          </button>
          <button
            className="arrow right-arrow"
            onClick={() => handleImageSwipe(1)}
            disabled={images.length <= 1}
          >
            <RightArrow />
          </button>{' '}
        </>
      ) : (
        <NoDataMessage
          Icon={ImageIcon}
          message="No available images to display!"
        />
      )}
    </div>
  );
};

export default ImageSlider;
