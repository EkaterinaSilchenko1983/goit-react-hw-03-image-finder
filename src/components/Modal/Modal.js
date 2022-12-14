import propTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { ModalImage, Overlay } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');
export const Modal = ({ src, alt, handleClose }) =>
  createPortal(
    <Overlay onClick={handleClose}>
      <ModalImage>
        <img src={src} alt={alt} />
      </ModalImage>
    </Overlay>,
    modalRoot
  );

Modal.propTypes = {
  src: propTypes.string.isRequired,
  alt: propTypes.string.isRequired,
  handleClose: propTypes.func.isRequired,
};
