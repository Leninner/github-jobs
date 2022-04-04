import styled from 'styled-components';

export const JobInformationContainer = styled.section`
  max-width: 889px;
  width: 100%;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  h3 {
    margin-right: 17px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: #334680;
  }

  div {
    width: 63px;
    height: 26px;
    border: 1px solid #334680;
    box-sizing: border-box;
    border-radius: 4px;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    color: #334680;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Date = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #b7bcce;
  margin-bottom: 35px;

  span {
    margin-right: 8.5px;
    font-size: 15px;
  }
`;

export const CompanyInfo = styled.div`
  display: flex;
  margin-bottom: 31px;

  img {
    width: 42px;
    height: 42px;
    border-radius: 4px;
    margin-right: 12px;
  }

  div {
    h3 {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 21px;
      color: #334680;
      margin-bottom: 10px;
    }

    div {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 14px;
      color: #b9bdcf;
      display: flex;
      align-items: center;

      span {
        font-size: 15px;
        margin-right: 7.5px;
      }
    }
  }
`;

export const Snippet = styled.div`
  h3 {
    margin-bottom: 20px;
  }

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #334680;
`;
