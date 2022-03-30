import { JobsFilterContainer, Lista, CheckCuadro } from './styles';
import { useState } from 'react';

export const JobsFilter = () => {
  const [currentFilter, setCurrentFilter] = useState('All');
  const typeVacancies = ['All', 'Full Time', 'Part Time', 'Freelance'];

  const handleFilter = (type: string) => {
    setCurrentFilter(type);
  };

  return (
    <JobsFilterContainer>
      <div>
        <Lista>
          {typeVacancies.map((typeVacancy) => (
            <label key={typeVacancy} onClick={() => handleFilter(typeVacancy)}>
              <CheckCuadro className={`${currentFilter === typeVacancy && 'active'}`} />
              <span>{typeVacancy}</span>
            </label>
          ))}
        </Lista>
      </div>
    </JobsFilterContainer>
  );
};
