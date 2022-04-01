import { JobsFilterContainer, Lista, CheckCuadro } from './styles';
import { VacanciesTypes } from '../VacanciesTypes';
import { LocationsFilter } from '../LocationsFilter';
import { useNavigate } from 'react-router-dom';

export const JobsFilter = ({
  currentFilter,
  setCurrentFilter,
  setCurrentLocation,
  currentLocation,
  currentKeyword,
}: any) => {
  const typeVacancies = ['All', 'Full Time', 'Part Time', 'Sin especificar'];
  const customLocations = ['London', 'Amsterdam', 'Madrid', 'Paris', 'Roma'];
  const navigate = useNavigate();

  const handleVacancies = (type: string) => setCurrentFilter(type);
  const handleLocation = (location: string) => {
    setCurrentLocation(location);
    localStorage.setItem('currentLocation', location);
    navigate(`/${location}/${currentKeyword}`);
  };

  return (
    <JobsFilterContainer>
      <VacanciesTypes
        Lista={Lista}
        vacanciesType={typeVacancies}
        handleVacancies={handleVacancies}
        CheckCuadro={CheckCuadro}
        currentFilter={currentFilter}
      />
      <LocationsFilter
        customLocations={customLocations}
        handleLocation={handleLocation}
        currentLocation={currentLocation}
        currentKeyword={currentKeyword}
      />
    </JobsFilterContainer>
  );
};
