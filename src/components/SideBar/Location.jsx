const Sidebar = ({ locations }) => {
    return (
<Location Container>
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
     
    );
  };