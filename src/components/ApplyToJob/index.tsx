interface ApplyToJobProps {
  link: string;
  location: string;
  source: string;
}
import { Link } from 'react-router-dom';
import { ApplyToJobContainer, Back } from './styles';

export const ApplyToJob = ({ link, location, source }: ApplyToJobProps) => {
  return (
    <ApplyToJobContainer>
      <Link
        to='/'
        style={{
          textDecoration: 'none',
        }}>
        <Back>
          <span className='material-icons-outlined'>arrow_back</span>
          <p>Back to search</p>
        </Back>
      </Link>

      <h3>HOW TO APPLY</h3>

      <p>
        Location: <strong>{location}</strong>
      </p>
      <p>
        Portal: <strong>{source.charAt(0).toUpperCase() + source.slice(1)}</strong>
      </p>
      <a href={link} target='_blank' rel='noopener noreferrer'>
        Apply here
      </a>
    </ApplyToJobContainer>
  );
};
