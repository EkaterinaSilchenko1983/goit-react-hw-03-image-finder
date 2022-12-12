// import { PropTypes } from 'prop-types';
export const ImageGalleryItem = ({ image }) => {
  return (
    <li className="gallery-item" id={image.id}>
      <img src={image.webformatURL} name={image.largeImageURL} alt="" />
    </li>
  );
};
