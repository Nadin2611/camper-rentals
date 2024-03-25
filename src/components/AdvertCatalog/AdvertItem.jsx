import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { selectFavorites } from '../../redux/adverts/selectors';
import { addToFavorites, removeFromFavorites } from '../../redux/adverts/slice';
import { formatPrice, reverseLocation, capitalize } from '../../services';

import { Button } from 'components/Button/Button.styled';
import {
  CardContainer,
  Description,
  DetailsItem,
  DetailsContainer,
  Image,
  ImageWrapper,
  InfoWrapper,
  TitleContainer,
  Title,
  Price,
  FavoriteButton,
  RatingContainer,
  Location,
  InfoContainer,
  RatingWrapper,
} from './AdvertItem.styled';

import * as Icons from '../Icons';
import DefaultImage from 'components/DefaultImage/DefaultImage';
import Modal from 'components/Modal';

const {
  AdultsIcon,
  AutomaticIcon,
  PetrolIcon,
  KitchenIcon,
  BedsIcon,
  HeartIcon,
  StarIcon,
  MapPinIcon,
  AcIcon,
} = Icons;

const AdvertItem = ({ advert }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const favorites = useSelector(selectFavorites);

  const {
    name,
    price,
    rating,
    location,
    description,
    adults,
    transmission,
    engine,
    details,
  } = advert;
  const isFavorite = favorites.find(item => item._id === advert._id);
  const formattedPrice = formatPrice(price);
  const renderLocation = reverseLocation(location);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <CardContainer>
      <ImageWrapper>
        {advert.gallery && advert.gallery.length > 0 ? (
          <Image src={advert.gallery[0]} alt={name} />
        ) : (
          <DefaultImage alt="no photo" />
        )}
      </ImageWrapper>
      <InfoWrapper>
        <InfoContainer>
          <TitleContainer>
            <Title>{name}</Title>
            <Price>&euro;{formattedPrice}</Price>
            <FavoriteButton
              onClick={() =>
                isFavorite
                  ? dispatch(removeFromFavorites(advert._id))
                  : dispatch(addToFavorites(advert))
              }
              $isFavorite={isFavorite}
            >
              <HeartIcon size={24} />
            </FavoriteButton>
          </TitleContainer>
          <RatingWrapper>
            <RatingContainer>
              <StarIcon size={14} />
              <span>
                {rating}({advert.reviews.length} reviews)
              </span>
            </RatingContainer>
            <Location>
              <MapPinIcon size={16} />
              <span> {renderLocation}</span>
            </Location>
          </RatingWrapper>
        </InfoContainer>
        <Description>{description}</Description>
        <DetailsContainer>
          <DetailsItem>
            <AdultsIcon size={20} />
            <span>{adults} Adults</span>
          </DetailsItem>
          <DetailsItem>
            <AutomaticIcon size={20} />
            <span>{capitalize(transmission)}</span>
          </DetailsItem>
          <DetailsItem>
            <PetrolIcon size={20} />
            <span>{capitalize(engine)}</span>
          </DetailsItem>
          <DetailsItem>
            <KitchenIcon size={20} />
            <span> {details.kitchen} Kitchen</span>
          </DetailsItem>
          <DetailsItem>
            <BedsIcon size={20} />
            <span> {details.beds} beds</span>
          </DetailsItem>
          <DetailsItem>
            <AcIcon size={20} />
            <span> AC </span>
          </DetailsItem>
        </DetailsContainer>
        <Button onClick={openModal}>Show more</Button>
      </InfoWrapper>

      {isModalOpen && <Modal advert={advert} closeModal={closeModal} />}
    </CardContainer>
  );
};

export default AdvertItem;
