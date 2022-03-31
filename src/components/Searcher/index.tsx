import imageBackGround from '../../assets/backgroundImg.png';
import { SearcherContainer } from './styles';
import { useState } from 'react';

export const Searcher = ({ setCurrentKeyword }: any) => {
  const [search, setSearch] = useState('');

  const handleChange = (e: any) => setSearch(e.target.value);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setCurrentKeyword(search);
    setSearch('');
  };

  return (
    <SearcherContainer>
      <img src={imageBackGround} alt='background' />
      <form onSubmit={handleSubmit}>
        <span className='material-icons-outlined'>work_outline</span>
        <input
          type='text'
          placeholder='Title, companies, expertise or benefits'
          onChange={handleChange}
          value={search}
        />
        <button type='submit'>Search</button>
      </form>
    </SearcherContainer>
  );
};
