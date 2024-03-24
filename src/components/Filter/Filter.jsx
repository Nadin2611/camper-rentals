import { Button } from 'components/Button/Button.styled';
import {
  Checkbox,
  CheckboxContainer,
  FilterContainer,
  FilterForm,
  FilterLabel,
  FilterTitle,
  LocationLabel,
  Option,
  Select,
  OptionSelect,
  HiddenCheckbox,
  TypeCheckbox,
  FormWrapper,
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

const Filter = ({ locations }) => {
  return (
    <FilterContainer>
      <FilterForm>
        <FormWrapper>
          <LocationLabel>Location</LocationLabel>
          <MapPinIcon size={20} />
          <Select>
            <OptionSelect value="city">City</OptionSelect>
            {locations.map((location, index) => (
              <Option key={index}>
                {location.split(',').reverse().join(',')}
              </Option>
            ))}
          </Select>
        </FormWrapper>

        <FormWrapper>
          <FilterTitle>Filters</FilterTitle>
          <FilterLabel>Vehicle equipment</FilterLabel>
          <CheckboxContainer>
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
          </CheckboxContainer>
        </FormWrapper>

        <FormWrapper>
          <FilterLabel>Vehicle type</FilterLabel>
          <CheckboxContainer>
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
          </CheckboxContainer>
        </FormWrapper>

        <Button type="submit">Search</Button>
      </FilterForm>
    </FilterContainer>
  );
};

export default Filter;
