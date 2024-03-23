import React, { useEffect, useState } from 'react';

import {
  ModalBackdrop,
  ModalContent,
  CloseButton,
  SideContent,
  ImageList,
  ImageItem,
  Description,
  InfoContainer,
  List,
  ListItem,
  Button,
  ModalWrap,
} from './Modal.styled';

import { CloseIcon, MapPinIcon, StarIcon } from 'components/Icons';
import {
  Location,
  Price,
  RatingWrapper,
  RatingContainer,
  Title,
} from 'components/Catalog/AdvertItem.styled';
import Features from 'components/Features';
import Reviews from 'components/Reviews';
import BookingForm from 'components/BookingForm/BookingForm';

const Modal = ({ advert, closeModal }) => {
  const [showFeatures, setShowFeatures] = useState(false);
  const [showReviews, setShowReviews] = useState(false);
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

  const handleFeaturesClick = () => {
    setShowFeatures(true);
    setShowReviews(false);
  };

  const handleReviewsClick = () => {
    setShowFeatures(false);
    setShowReviews(true);
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

        <SideContent>
          <ImageList>
            {gallery.length > 0 &&
              gallery.map((link, index) => (
                <ImageItem key={`${_id}/${index}`}>
                  <img src={link} alt={name} />
                </ImageItem>
              ))}
          </ImageList>
          <Description>{description}</Description>
        </SideContent>
        <InfoContainer>
          <List>
            <ListItem>
              <Button onClick={handleFeaturesClick}>Features</Button>
            </ListItem>
            <ListItem>
              <Button onClick={handleReviewsClick}>Reviews</Button>
            </ListItem>
          </List>
        </InfoContainer>
        {showFeatures && (
          <ModalWrap>
            <Features advert={advert} /> <BookingForm closeModal={closeModal} />
          </ModalWrap>
        )}
        {showReviews && (
          <ModalWrap>
            <Reviews advert={advert} /> <BookingForm closeModal={closeModal} />
          </ModalWrap>
        )}
      </ModalContent>
    </ModalBackdrop>
  );
};

export default Modal;
