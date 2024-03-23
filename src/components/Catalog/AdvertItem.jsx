import { useDispatch, useSelector } from 'react-redux';

import { selectFavorites } from '../../redux/adverts/selectors';
import { addToFavorites, removeFromFavorites } from '../../redux/adverts/slice';
import { formatPrice, reverseLocation, capitalize } from 'utilities/utilities';

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

const AdvertItem = ({ advert, onShowMore }) => {
  const dispatch = useDispatch();

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

  const formattedPrice = formatPrice(price);
  const renderLocation = reverseLocation(location);

  const favorites = useSelector(selectFavorites);
  const isFavorite = favorites.find(item => item._id === advert._id);

  return (
    <CardContainer>
      <ImageWrapper>
        <Image src={advert.gallery[0]} alt={name} />
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
              $isFavorite={!!isFavorite}
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
        <Button onClick={onShowMore}>Show more</Button>
      </InfoWrapper>
    </CardContainer>
  );
};

export default AdvertItem;
