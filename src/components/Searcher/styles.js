import styled from 'styled-components';

export const SearcherContainer = styled.section`
  width: 100%;
  max-height: 138px;
  min-height: 138px;
  height: 138px;
  position: relative;

  img {
    width: 100%;
    height: 100%;
  }

  form {
    position: absolute;
    max-width: 790px;
    max-height: 55px;
    width: 80%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;

    span {
      position: absolute;
      width: 26px;
      height: 26px;
      top: 0;
      margin: auto;
      bottom: 0;
      left: 10px;
      color: #b9bdcf;
    }

    input {
      width: 100%;
      height: 100%;
      padding-left: 40px;
      color: #b9bdcf;
      font-weight: 400;
      outline: none;
      border: none;

      &::placeholder {
        color: #b9bdcf;
      }

      @media (max-width: 768px) {
        padding-right: 120px;
      }
    }

    button {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      max-width: 146px;
      border: 0;
      cursor: pointer;
      transition: all 0.3s;
      margin: 4px;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      color: #ffffff;
      width: 146px;
      height: 47px;
      background: #1e86ff;
      border-radius: 4px;

      @media (max-width: 768px) {
        width: 104px;
        background: #1e86ff;
      }

      &:disabled {
        background: #b9bdcf;
        cursor: default;
      }
    }
  }
`;
