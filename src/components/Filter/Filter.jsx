// import { useState } from 'react';
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
  HiddenCheckbox,
  TypeCheckbox,
  FormWrapper,
  Option,
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
  const locations = locationsList.map(location => ({
    label: reverseLocation(location),
    value: location,
  }));

  const handleSelectChange = event => {};

  return (
    <FilterContainer>
      <FilterForm>
        <FormWrapper>
          <LocationLabel>
            Location
            <Select onChange={handleSelectChange}>
              <Option value="" selected disabled hidden>
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
              <HiddenCheckbox type="checkbox" name="AC" />
              <AcIcon size={32} />
              AC
            </Checkbox>
            <Checkbox>
              <HiddenCheckbox type="checkbox" name="Automatic" />
              <AutomaticIcon size={32} />
              Automatic
            </Checkbox>
            <Checkbox>
              <HiddenCheckbox type="checkbox" name="Kitchen" />
              <KitchenIcon size={32} />
              Kitchen
            </Checkbox>
            <Checkbox>
              <HiddenCheckbox type="checkbox" name="TV" />
              <TvIcon size={32} />
              TV
            </Checkbox>
            <Checkbox>
              <HiddenCheckbox type="checkbox" name="Shower/WC" />
              <ShowerIcon size={32} />
              Shower/WC
            </Checkbox>
          </CheckboxField>
        </FormWrapper>

        <FormWrapper>
          <FilterLabel>Vehicle type</FilterLabel>
          <CheckboxField>
            <TypeCheckbox>
              <HiddenCheckbox type="checkbox" />
              <VanIcon width={40} height={28} />
              Van
            </TypeCheckbox>
            <TypeCheckbox
              style={{ paddingTop: '8.5px', paddingBottom: '8.5px' }}
            >
              <HiddenCheckbox type="checkbox" />
              <FullyIcon width={40} height={28} />
              Fully <br />
              Integrated
            </TypeCheckbox>
            <TypeCheckbox>
              <HiddenCheckbox type="checkbox" />
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
