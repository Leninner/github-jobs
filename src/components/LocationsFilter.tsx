import { LocationFilterContainer, LocationInput, Label } from './CommonStyles';
import { useState } from 'react';
import { motion } from 'framer-motion';

export const LocationsFilter = ({ customLocations, currentLocation, handleLocation }: any) => {
  const [search, setSearch] = useState('');

  const handleChange = (e: any) => setSearch(e.target.value);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    handleLocation(search);
    setSearch('');
    localStorage.setItem('currentLocation', search);
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
          <Label
            as={motion.label}
            key={customLocation}
            onClick={() => handleLocation(customLocation)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}>
            <div className={`${currentLocation === customLocation && 'active'}`} />
            <span>{customLocation}</span>
          </Label>
        ))}
      </ul>
    </LocationFilterContainer>
  );
};
