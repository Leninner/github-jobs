import { MainTitle } from './styles';
import { motion } from 'framer-motion';

export const Layout = ({ children }: any) => {
  return (
    <div>
      <MainTitle
        as={motion.h1}
        initial={{ y: '-100px' }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}>
        Github <span>Jobs</span>
      </MainTitle>
      {children}
    </div>
  );
};
