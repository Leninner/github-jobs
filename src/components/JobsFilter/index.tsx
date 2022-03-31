import { JobsFilterContainer, Lista, CheckCuadro } from './styles';
import { VacanciesTypes } from '../VacanciesTypes';
import { LocationsFilter } from '../LocationsFilter';

export const JobsFilter = ({ currentFilter, setCurrentFilter, setCurrentLocation, currentLocation }: any) => {
  const typeVacancies = ['All', 'Full Time', 'Part Time', 'Sin especificar'];
  const customLocations = ['London', 'Amsterdam', 'Madrid', 'Paris', 'Roma'];

  const handleVacancies = (type: string) => {
    setCurrentFilter(type);
  };

  const handleLocation = (location: string) => {
    setCurrentLocation(location);
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
      />
    </JobsFilterContainer>
  );
};
