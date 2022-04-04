import styled from 'styled-components';

const commonStyles = `border: 1px solid #b7bcce;
    box-sizing: border-box;
    border-radius: 4px;
    width: 36px;
    height: 36px;
    color: #b7bcce;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    transition: 0.2s;

    &:hover {
      border: 1px solid #1e86ff;
      color: #1e86ff;
    }`;

export const PaginationContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  .pagination {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
    list-style: none;
    max-width: 312.89px;
    min-width: 312.89px;

    li {
      cursor: pointer;
    }
  }

  .previous_next {
    ${commonStyles}
    font-size: 20px;
  }

  .pages {
    ${commonStyles}
    font-size: 12px;
  }

  .active {
    background: #1e86ff;
    border: 1px solid #1e86ff;
    color: #ffffff;
  }

  .break-me {
    color: #b7bcce;
    font-size: 25px;
    font-weight: bold;
  }
`;
