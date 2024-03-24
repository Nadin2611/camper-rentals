import { DetailsItem } from 'components/Catalog/AdvertItem.styled';
import { capitalize } from '../../services';
import {
  AdultsIcon,
  AutomaticIcon,
  BedsIcon,
  CdIcon,
  ConditionerIcon,
  HobIcon,
  KitchenIcon,
  PetrolIcon,
  RadioIcon,
} from 'components/Icons';
import AcIcon from 'components/Icons/AcIcon';
import {
  FeaturesContainer,
  DetailsWrapper,
  VehicleWrapper,
  VehicleTitle,
  VehicleList,
  VehicleItem,
  Name,
  Value,
} from './Features.styled';

const Features = ({ advert }) => {
  const {
    adults,
    transmission,
    engine,
    form,
    length,
    width,
    height,
    tank,
    consumption,
    details,
  } = advert;

  return (
    <FeaturesContainer>
      <DetailsWrapper>
        <DetailsItem>
          <AdultsIcon size={20} />
          <span>{adults} Adults</span>
        </DetailsItem>
        <DetailsItem>
          <AutomaticIcon size={20} />
          <span>{capitalize(transmission)}</span>
        </DetailsItem>
        <DetailsItem>
          <AcIcon size={20} />
          <span> AC </span>
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
          <ConditionerIcon size={20} />
          <span> {details.airConditioner} air conditioner</span>
        </DetailsItem>
        <DetailsItem>
          <CdIcon size={20} />
          <span>CD</span>
        </DetailsItem>
        <DetailsItem>
          <RadioIcon size={20} />
          <span>Radio</span>
        </DetailsItem>
        <DetailsItem>
          <HobIcon size={20} />
          <span>{details.hob} hob</span>
        </DetailsItem>
      </DetailsWrapper>
      <VehicleWrapper>
        <VehicleTitle>Vehicle details</VehicleTitle>
        <VehicleList>
          <VehicleItem>
            <Name>Form</Name>
            <Value>{capitalize(form)}</Value>
          </VehicleItem>
          <VehicleItem>
            <Name>Length</Name>
            <Value>
              {length.slice(0, -1)} {length.slice(-1)}
            </Value>
          </VehicleItem>
          <VehicleItem>
            <Name>Width</Name>
            <Value>
              {width.slice(0, -1)} {width.slice(-1)}
            </Value>
          </VehicleItem>
          <VehicleItem>
            <Name>Height</Name>
            <Value>
              {height.slice(0, -1)} {height.slice(-1)}
            </Value>
          </VehicleItem>
          <VehicleItem>
            <Name>Tank</Name>
            <Value>
              {tank.slice(0, -1)} {tank.slice(-1)}
            </Value>
          </VehicleItem>
          <VehicleItem>
            <Name>Consumption</Name>
            <Value>{consumption}</Value>
          </VehicleItem>
        </VehicleList>
      </VehicleWrapper>
    </FeaturesContainer>
  );
};

export default Features;
