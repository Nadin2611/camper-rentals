import { Button } from 'components/Button/Button.styled';
import {
  CardContainer,
  Description,
  DetailItem,
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
} from './AdvertCard.styled';

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
} = Icons;

const AdvertItem = ({ advert }) => {
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

  const formattedPrice = price.toFixed(2);
  const renderLocation = location.split(', ').reverse().join(', ');
  const capitalize = string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

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
            <FavoriteButton>
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
          <DetailItem>
            <AdultsIcon size={20} />
            <span>{adults} Adults</span>
          </DetailItem>
          <DetailItem>
            <AutomaticIcon size={20} />
            <span>{capitalize(transmission)}</span>
          </DetailItem>
          <DetailItem>
            <PetrolIcon size={20} />
            <span>{capitalize(engine)}</span>
          </DetailItem>
          <DetailItem>
            <KitchenIcon size={20} />
            <span> {details.kitchen} Kitchen</span>
          </DetailItem>
          <DetailItem>
            <BedsIcon size={20} />
            <span> {details.beds} beds</span>
          </DetailItem>
        </DetailsContainer>
        <Button>Show more</Button>
      </InfoWrapper>
    </CardContainer>
  );
};

export default AdvertItem;