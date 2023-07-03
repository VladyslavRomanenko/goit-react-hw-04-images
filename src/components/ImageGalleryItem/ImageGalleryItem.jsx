import { useState } from 'react';
import css from './ImageGalleryItem.module.css';
import { Modal } from 'components/Modal/Modal';
import PropTypes from 'prop-types';
export const ImageGalleryItem = ({ photo }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <>
      <li className={css.galleryItem} onClick={toggleModal}>
        <img
          className={css.galleryItemImage}
          src={photo.webformatURL}
          alt="card"
        />
      </li>
      {isOpen ? (
        <Modal img={photo.largeImageURL} onClose={toggleModal}></Modal>
      ) : null}
    </>
  );
};

ImageGalleryItem.propTypes = {
  photo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
};
