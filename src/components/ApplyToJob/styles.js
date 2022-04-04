import styled from 'styled-components';

const commonStyles = `
  font-size: 14px;
  font-style: normal;
  line-height: 21px;
  font-family: 'Poppins', sans-serif;
`;

export const ApplyToJobContainer = styled.section`
  max-width: 306.79px;
  width: 100%;
  font-weight: 500;
  color: #334680;
  ${commonStyles}

  @media (max-width: 800px) {
    margin-bottom: 36px;
  }

  h3 {
    font-weight: 700;
    text-transform: uppercase;
    ${commonStyles}
    color: #b9bdcf;
    margin-bottom: 16px;
  }

  a {
    color: #1e86ff;
    text-decoration: none;
  }
`;

export const Back = styled.div`
  display: flex;
  align-items: center;
  color: #1e86ff;
  font-weight: 500;
  color: #1e86ff;
  ${commonStyles}
  margin-bottom: 36px;

  span {
    margin-right: 15px;
    font-size: 18px;
  }
`;
