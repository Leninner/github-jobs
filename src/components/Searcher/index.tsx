import imageBackGround from '../../assets/backgroundImg.png';
import { SearcherContainer } from './styles';

export const Searcher = () => {
  return (
    <SearcherContainer>
      <img src={imageBackGround} alt='background' />
      <form action=''>
        <span className='material-icons-outlined'>work_outline</span>
        <input type='text' placeholder={`Title, companies, expertise or benefits`} />
        <button>Search</button>
      </form>
    </SearcherContainer>
  );
};
