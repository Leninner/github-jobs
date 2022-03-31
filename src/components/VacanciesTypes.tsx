export const VacanciesTypes = ({ Lista, vacanciesType, handleVacancies, CheckCuadro, currentFilter }: any) => {
  return (
    <div>
      <Lista>
        {vacanciesType.map((typeVacancy: string) => (
          <label key={typeVacancy} onClick={() => handleVacancies(typeVacancy)}>
            <CheckCuadro className={`${currentFilter === typeVacancy && 'active'}`} />
            <span>{typeVacancy}</span>
          </label>
        ))}
      </Lista>
    </div>
  );
};
