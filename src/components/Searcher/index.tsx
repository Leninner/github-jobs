import imageBackGround from '../../assets/backgroundImg.png';
import { SearcherContainer } from './styles';
import { useState } from 'react';
import { motion } from 'framer-motion';

export const Searcher = ({ setCurrentKeyword }: any) => {
  const [search, setSearch] = useState('');

  const handleChange = (e: any) => setSearch(e.target.value);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setCurrentKeyword(search);
    setSearch('');
    localStorage.setItem('currentKeyword', search);
  };

  return (
    <SearcherContainer as={motion.div} initial={{ y: '-100%' }} animate={{ y: '0' }} transition={{ duration: 0.5 }}>
      <img src={imageBackGround} alt='background' />
      <form onSubmit={handleSubmit}>
        <span className='material-icons-outlined'>work_outline</span>
        <input
          type='text'
          placeholder='Title, companies, expertise or benefits'
          onChange={handleChange}
          value={search}
        />
        <button type='submit' disabled={search.length > 0 ? false : true}>
          Search
        </button>
      </form>
    </SearcherContainer>
  );
};
