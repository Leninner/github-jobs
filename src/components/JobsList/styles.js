import styled from 'styled-components';

export const JobsListContainer = styled.div`
  width: 790px;
`;

export const JobInitialDataContainer = styled.div`
  width: 790px;
  height: 114px;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  margin-bottom: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;

  .JobMainInfo {
    max-width: 70%;
  }

  section {
    display: flex;
    height: 100%;
    font-family: 'Roboto';
    font-style: normal;

    .BoxImage {
      width: 90px;
      height: 90px;
      border-radius: 4px;
      background: blue;
      margin-right: 16px;
    }

    .JobData {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      color: #334680;

      span {
        font-weight: 700;
        font-size: 12px;
        line-height: 14px;
      }

      h3 {
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        color: #334680;
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
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
    }
  }

  .DateInfo {
    display: flex;
    align-items: flex-end;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: #b7bcce;

    div {
      margin-left: 28.5px;
      display: flex;
      align-items: center;

      .material-icons-outlined.md-18 {
        margin-right: 8px;
        font-size: 18px;
      }
    }
  }
`;
