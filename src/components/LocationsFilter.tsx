import { LocationFilterContainer, LocationInput, Label } from './CommonStyles';

export const LocationsFilter = ({ customLocations, currentLocation, handleLocation }: any) => {
  console.log(currentLocation);

  return (
    <LocationFilterContainer>
      <h2>LOCATION</h2>
      <form>
        <LocationInput type='text' placeholder='City, state, zip code or country' />
      </form>

      <ul>
        {customLocations.map((customLocation: string) => (
          <Label key={customLocation} onClick={() => handleLocation(customLocation)}>
            <div className={`${currentLocation === customLocation && 'active'}`} />
            <span>{customLocation}</span>
          </Label>
        ))}
      </ul>
    </LocationFilterContainer>
  );
};
