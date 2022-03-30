export const VacanciesTypes = ({ Lista, vacanciesType, handleFilter, CheckCuadro, currentFilter }: any) => {
  return (
    <div>
      <Lista>
        {vacanciesType.map((typeVacancy: string) => (
          <label key={typeVacancy} onClick={() => handleFilter(typeVacancy)}>
            <CheckCuadro className={`${currentFilter === typeVacancy && 'active'}`} />
            <span>{typeVacancy}</span>
          </label>
        ))}
      </Lista>
    </div>
  );
};
