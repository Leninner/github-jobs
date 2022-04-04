import moment from 'moment';
import { JobInformationContainer, Header, Date, CompanyInfo, Snippet } from './styles';

interface JobInformationProps {
  title: string;
  company: string;
  location: string;
  type: string;
  snippet: string;
  updated: string;
}

export const JobInformation = ({ title, company, location, type, snippet, updated }: JobInformationProps) => {
  return (
    <JobInformationContainer>
      <Header>
        <h3>{title}</h3>
        {type === 'Completa' ? <div>Full Time</div> : type === '' ? <div>N/A</div> : <div>Part Time</div>}
      </Header>

      <Date>
        <span className='material-icons-outlined'>schedule</span>
        {moment(updated).fromNow()}
      </Date>

      <CompanyInfo>
        <img
          src='https://img.freepik.com/vector-gratis/ilustracion-dibujos-animados-lindo-bulldog-funcionamiento-portatil-concepto-icono-tecnologia-animal_138676-1912.jpg?t=st=1648749241~exp=1648749841~hmac=77e6b8a2ab0179268a6740da3aadc9b704a9f7bcf4ae2bdc3f3ba7918270a863&w=740'
          alt=''
        />

        <div>
          <h3>{company}</h3>
          <div>
            <span className='material-icons-outlined'>public</span>
            {location}
          </div>
        </div>
      </CompanyInfo>

      <Snippet>
        <h3>Snippet</h3>
        {snippet}
      </Snippet>
    </JobInformationContainer>
  );
};
