import imageBackGround from '../../assets/backgroundImg.png';
import { SearcherContainer } from './styles';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Searcher = ({ setCurrentKeyword, currentLocation }: any) => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleChange = (e: any) => setSearch(e.target.value);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setCurrentKeyword(search);
    setSearch('');
    sessionStorage.setItem('currentKeyword', search);
    navigate(`/${currentLocation}/${search}`);
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
        <button type='submit' disabled={search.length > 0 ? false : true}>
          Search
        </button>
      </form>
    </SearcherContainer>
  );
};
