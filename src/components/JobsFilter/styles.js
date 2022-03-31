import styled from 'styled-components';

export const JobsFilterContainer = styled.div`
  width: 379px;
`;

export const Lista = styled.ul`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,500;1,500;0&display=swap');
  display: flex;
  flex-direction: column;

  label {
    display: flex;
    align-items: center;
    margin: 9px 0;
    cursor: pointer;

    span {
      font-family: 'Poppins', sans-serif;
      height: 21px;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 21px;
      color: #334680;
    }
  }
`;

export const CheckCuadro = styled.div`
  width: 18px;
  height: 18px;
  border: 1px solid #b9bdcf;
  box-sizing: border-box;
  border-radius: 2px;
  margin-right: 12px;

  &.active {
    &.active {
      background-color: #1e86ff;
      border: 1px solid #1e86ff;
      box-shadow: inset 0 0 0 2px #fff;
    }
  }
`;
