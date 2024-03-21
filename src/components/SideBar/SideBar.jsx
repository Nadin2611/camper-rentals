import { Button } from 'components/Button/Button.styled';
import {
  Checkbox,
  CheckboxContainer,
  SidebarContainer,
  SidebarForm,
  SidebarLabel,
  SidebarTitle,
  LocationLabel,
  Option,
  Select,
  OptionSelect,
  HiddenCheckbox,
  TypeCheckbox,
  FormWrapper,
} from './SideBar.styled';
import {
  AlcoveIcon,
  AutomaticIcon,
  ConditionerIcon,
  FullyIcon,
  KitchenIcon,
  MapPinIcon,
  ShowerIcon,
  TvIcon,
  VanIcon,
} from 'components/Icons';

const Sidebar = ({ locations }) => {
  return (
    <SidebarContainer>
      <SidebarForm>
        <FormWrapper>
          <LocationLabel>Location</LocationLabel>
          <Select>
            <OptionSelect value="city">City</OptionSelect>
            {locations.map((location, index) => (
              <Option key={index}>
                <MapPinIcon size={20} />
                {location.split(',').reverse().join(',')}
              </Option>
            ))}
          </Select>
        </FormWrapper>

        <FormWrapper>
          <SidebarTitle>Filters</SidebarTitle>
          <SidebarLabel>Vehicle equipment</SidebarLabel>
          <CheckboxContainer>
            <Checkbox>
              <HiddenCheckbox type="checkbox" />
              <ConditionerIcon size={32} />
              AC
            </Checkbox>
            <Checkbox>
              <HiddenCheckbox type="checkbox" />
              <AutomaticIcon size={32} />
              Automatic
            </Checkbox>
            <Checkbox>
              <HiddenCheckbox type="checkbox" />
              <KitchenIcon size={32} />
              Kitchen
            </Checkbox>
            <Checkbox>
              <HiddenCheckbox type="checkbox" />
              <TvIcon size={32} />
              TV
            </Checkbox>
            <Checkbox>
              <HiddenCheckbox type="checkbox" />
              <ShowerIcon size={32} />
              Shower/WC
            </Checkbox>
          </CheckboxContainer>
        </FormWrapper>

        <FormWrapper>
          <SidebarLabel>Vehicle type</SidebarLabel>
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
      </SidebarForm>
    </SidebarContainer>
  );
};

export default Sidebar;
