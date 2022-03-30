import { JobsFilterContainer, Lista, CheckCuadro } from './styles';
import { VacanciesTypes } from '../VacanciesTypes';

export const JobsFilter = ({ currentFilter, setCurrentFilter }: any) => {
  const typeVacancies = ['All', 'Full Time', 'Part Time', 'Sin especificar'];

  const handleFilter = (type: string) => {
    setCurrentFilter(type);
  };

  return (
    <JobsFilterContainer>
      <VacanciesTypes
        Lista={Lista}
        vacanciesType={typeVacancies}
        handleFilter={handleFilter}
        CheckCuadro={CheckCuadro}
        currentFilter={currentFilter}
      />
    </JobsFilterContainer>
  );
};
