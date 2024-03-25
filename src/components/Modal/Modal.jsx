import { useEffect, useRef, useState } from 'react';
import { formatPrice, reverseLocation } from '../../services';
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
} from 'components/AdvertCatalog/AdvertItem.styled';
import Features from 'components/Features';
import Reviews from 'components/Reviews';
import BookingForm from 'components/BookingForm';

const Modal = ({ advert, closeModal }) => {
  const [activeTab, setActiveTab] = useState('');
  const modalRef = useRef(null);

  const { _id, name, price, rating, location, description, reviews, gallery } =
    advert;

  const formattedPrice = formatPrice(price);
  const renderLocation = reverseLocation(location);

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

  const handleFeaturesClick = () => setActiveTab('features');
  const handleReviewsClick = () => setActiveTab('reviews');

  return (
    <ModalBackdrop onClick={handleCloseModal}>
      <ModalContent ref={modalRef}>
        <CloseButton
          type="button"
          onClick={() => {
            closeModal();
          }}
        >
          <CloseIcon size={40} />
        </CloseButton>
        <Title style={{ marginBottom: '10px' }}>{name}</Title>
        <RatingWrapper style={{ marginBottom: '16px' }}>
          <RatingContainer>
            <StarIcon size={20} color={'var(--color-rating)'} />
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
          <InfoContainer>
            <List>
              <ListItem>
                <Button
                  onClick={handleFeaturesClick}
                  className={activeTab === 'features' ? 'active' : ''}
                >
                  Features
                </Button>
              </ListItem>
              <ListItem>
                <Button
                  onClick={handleReviewsClick}
                  className={activeTab === 'reviews' ? 'active' : ''}
                >
                  Reviews
                </Button>
              </ListItem>
            </List>
          </InfoContainer>
          <ModalWrap>
            {activeTab === 'features' && (
              <>
                <Features advert={advert} />
                <BookingForm closeModal={closeModal} />
              </>
            )}
            {activeTab === 'reviews' && (
              <>
                <Reviews advert={advert} />
                <BookingForm closeModal={closeModal} />
              </>
            )}
          </ModalWrap>
        </SideContent>
      </ModalContent>
    </ModalBackdrop>
  );
};

export default Modal;
