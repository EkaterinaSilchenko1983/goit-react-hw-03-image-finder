import { PropTypes } from 'prop-types';
import {
  ImageGalleryItemImage,
  ImageGalleryItems,
} from './ImageGalleryItem.styled';
export const ImageGalleryItem = ({ image, onSelect }) => {
  return (
    <ImageGalleryItems id={image.id}>
      <ImageGalleryItemImage
        src={image.webformatURL}
        alt=""
        onClick={() => onSelect(image.largeImageURL)}
      />
    </ImageGalleryItems>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.object.isRequired,
  onSelect: PropTypes.func.isRequired,
};
