import { useState } from 'react';
import { Button } from 'components/Button/Button.styled';
import {
  Checkbox,
  CheckboxField,
  FilterContainer,
  FilterForm,
  FilterLabel,
  FilterTitle,
  LocationLabel,
  Select,
  InputCheckbox,
  HiddenCheckbox,
  TypeCheckbox,
  FormWrapper,
  Option,
  HiddenRadio,
} from './Filter.styled';
import {
  AlcoveIcon,
  AutomaticIcon,
  FullyIcon,
  KitchenIcon,
  MapPinIcon,
  ShowerIcon,
  TvIcon,
  VanIcon,
} from 'components/Icons';
import AcIcon from 'components/Icons/AcIcon';
import { reverseLocation } from 'services';
import { locationsList } from './locations';

const Filter = () => {
  const [checkedValues, setCheckedValues] = useState({});

  const locations = locationsList.map(location => ({
    label: reverseLocation(location),
    value: location,
  }));

  const handleSelectLocation = event => {
    const { name, checked } = event.target;
    setCheckedValues({ ...checkedValues, [name]: checked });
  };

  const handleSelectEquipment = event => {
    const { name, checked } = event.target;
    setCheckedValues(prevState => ({ ...prevState, [name]: checked }));
  };

  const handleSubmit = event => {
    event.preventDefault();
  };

  return (
    <FilterContainer>
      <FilterForm onSubmit={handleSubmit}>
        <FormWrapper>
          <LocationLabel>
            Location
            <Select value="" onChange={handleSelectLocation}>
              <Option value="" disabled hidden>
                City
              </Option>
              {locations.map((location, index) => (
                <Option key={index} value={location.value}>
                  {location.label}
                </Option>
              ))}
            </Select>
            <MapPinIcon size={20} />
          </LocationLabel>
        </FormWrapper>

        <FormWrapper>
          <FilterTitle>Filters</FilterTitle>
          <FilterLabel>Vehicle equipment</FilterLabel>
          <CheckboxField>
            <Checkbox>
              <InputCheckbox
                type="checkbox"
                name="AC"
                checked={checkedValues.AC}
                onChange={handleSelectEquipment}
              />
              <AcIcon size={32} />
              AC
            </Checkbox>
            <Checkbox>
              <HiddenCheckbox
                type="checkbox"
                name="Automatic"
                checked={checkedValues.Automatic}
                onChange={handleSelectEquipment}
              />
              <AutomaticIcon size={32} />
              Automatic
            </Checkbox>
            <Checkbox>
              <InputCheckbox
                type="checkbox"
                name="Kitchen"
                checked={checkedValues.Kitchen}
                onChange={handleSelectEquipment}
              />
              <KitchenIcon size={32} />
              Kitchen
            </Checkbox>
            <Checkbox>
              <InputCheckbox
                type="checkbox"
                name="TV"
                checked={checkedValues.TV}
                onChange={handleSelectEquipment}
              />
              <TvIcon size={32} />
              TV
            </Checkbox>
            <Checkbox>
              <InputCheckbox
                type="checkbox"
                name="Shower"
                checked={checkedValues.Shower}
                onChange={handleSelectEquipment}
              />
              <ShowerIcon size={32} />
              Shower/WC
            </Checkbox>
          </CheckboxField>
        </FormWrapper>

        <FormWrapper>
          <FilterLabel>Vehicle type</FilterLabel>
          <CheckboxField>
            <TypeCheckbox>
              <HiddenRadio type="radio" name="vehicleType" value="van" />
              <VanIcon width={40} height={28} />
              Van
            </TypeCheckbox>
            <TypeCheckbox
              style={{ paddingTop: '8.5px', paddingBottom: '8.5px' }}
            >
              <HiddenRadio
                type="radio"
                name="vehicleType"
                value="fullyIntegrated"
              />
              <FullyIcon width={40} height={28} />
              Fully <br />
              Integrated
            </TypeCheckbox>
            <TypeCheckbox>
              <HiddenRadio type="radio" name="vehicleType" value="alcove" />
              <AlcoveIcon width={40} height={28} />
              Alcove
            </TypeCheckbox>
          </CheckboxField>
        </FormWrapper>

        <Button type="submit">Search</Button>
      </FilterForm>
    </FilterContainer>
  );
};

export default Filter;
