import React, { useEffect } from 'react';

import {
  ModalBackdrop,
  ModalContent,
  CloseButton,
  ImageList,
  ImageItem,
  Description,
  InfoContainer,
  List,
  ListItem,
  Link,
} from './Modal.styled';

import { CloseIcon, MapPinIcon, StarIcon } from 'components/Icons';
import {
  Location,
  Price,
  RatingWrapper,
  RatingContainer,
  Title,
} from 'components/Catalog/AdvertItem.styled';

const ModalDetails = ({ advert, closeModal }) => {
  const { _id, name, price, rating, location, description, reviews, gallery } =
    advert;

  const formattedPrice = price.toFixed(2);
  const renderLocation = location.split(', ').reverse().join(', ');

  useEffect(() => {
    const handleEscapeKey = event => {
      if (event.code === 'Escape') closeModal();
    };

    window.addEventListener('keydown', handleEscapeKey);

    return () => window.removeEventListener('keydown', handleEscapeKey);
  }, [closeModal]);

  const handleCloseModal = event => {
    if (event.target === event.currentTarget) {
      closeModal();
      document.body.style.overflow = 'visible';
    }
  };

  return (
    <ModalBackdrop onClick={handleCloseModal}>
      <ModalContent>
        <CloseButton type="button" onClick={closeModal}>
          <CloseIcon size={40} />
        </CloseButton>

        <Title style={{ marginBottom: '10px' }}>{name}</Title>
        <RatingWrapper style={{ marginBottom: '16px' }}>
          <RatingContainer>
            <StarIcon size={20} />
            <span>{`${rating}(${reviews.length} Reviews)`}</span>
          </RatingContainer>
          <Location>
            <MapPinIcon size={20} />
            <span>{renderLocation}</span>
          </Location>
        </RatingWrapper>
        <Price style={{ marginBottom: '24px' }}>&euro;{formattedPrice}</Price>
        <ImageList>
          {gallery.length > 0 &&
            gallery.map((link, index) => (
              <ImageItem key={`${_id}/${index}`}>
                <img src={link} alt={name} />
              </ImageItem>
            ))}
        </ImageList>
        <Description>{description}</Description>

        <InfoContainer>
          <List>
            <ListItem>
              <Link to="features">Features</Link>
            </ListItem>
            <ListItem>
              <Link to="reviews">Reviews</Link>
            </ListItem>
          </List>
        </InfoContainer>
      </ModalContent>
    </ModalBackdrop>
  );
};

export default ModalDetails;
