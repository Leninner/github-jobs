import styled from 'styled-components';

export const LocationFilterContainer = styled.div`
  width: 379px;
  margin-top: 33px;

  h2 {
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 21px;
    text-transform: uppercase;
    color: #b9bdcf;
    margin-bottom: 14px;
  }

  form {
    width: 100%;
    height: 48px;
    position: relative;

    .material-icons-outlined.md-18 {
      position: absolute;
      top: 0;
      left: 14px;
      bottom: 0;
      margin: auto;
      width: 15px;
      height: 15px;
      font-size: 15px;
      color: #b9bdcf;
    }
  }

  ul {
    margin-top: 26px;
  }
`;

export const LocationInput = styled.input`
  width: 100%;
  height: 100%;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  border: none;
  outline: none;
  padding: 0 0 0 45px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #b9bdcf;

  &::placeholder {
    color: #b9bdcf;
  }
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 19px;
  cursor: pointer;

  div {
    margin-right: 12.5px;
    width: 18px;
    height: 18px;
    border: 1px solid #b9bdcf;
    box-sizing: border-box;
    border-radius: 59px;

    &.active {
      background-color: #1e86ff;
      border: 1px solid #1e86ff;
      box-shadow: inset 0 0 0 2px #fff;
    }
  }

  span {
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    color: #334680;
  }
`;
