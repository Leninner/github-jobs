import { LocationFilterContainer, LocationInput, Label } from './CommonStyles';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const LocationsFilter = ({ customLocations, currentLocation, handleLocation, currentKeyword }: any) => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleChange = (e: any) => setSearch(e.target.value);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    handleLocation(search);
    setSearch('');
    navigate(`/location=${search}/q=${currentKeyword}`);
  };

  return (
    <LocationFilterContainer>
      <h2>LOCATION</h2>
      <form onSubmit={handleSubmit}>
        <LocationInput
          type='text'
          placeholder='City, state, zip code or country'
          onChange={handleChange}
          value={search}
        />
        <span className='material-icons-outlined md-18'>public</span>
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
