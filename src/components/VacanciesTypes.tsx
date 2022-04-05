import { motion } from 'framer-motion';

export const VacanciesTypes = ({ Lista, vacanciesType, handleVacancies, CheckCuadro, currentFilter }: any) => {
  return (
    <div>
      <Lista>
        {vacanciesType.map((typeVacancy: string) => (
          <motion.label
            key={typeVacancy}
            onClick={() => handleVacancies(typeVacancy)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}>
            <CheckCuadro className={`${currentFilter === typeVacancy && 'active'}`} />
            <span>{typeVacancy}</span>
          </motion.label>
        ))}
      </Lista>
    </div>
  );
};
