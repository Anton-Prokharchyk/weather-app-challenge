import styled from 'styled-components';

export const HourlyForecastContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 32px;
  border-radius: var(--b-radius-large);
  background-color: var(--neutral-800);
  grid-row: span 2;
  &::-webkit-scrollbar-button {
    display: none;
    height: 0;
    width: 0;
  }
`;

export const HourlyForecastHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`;

export const HourlyHeading = styled.h2`
  font-size: 20px;
  font-weight: 600;
`;

export const HorulyScrollBarWrapper = styled.div`
  padding-right: 30px;

  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const HourlyForecastList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow-y: scroll;
  overflow-x: hidden;

  margin-right: -30px;
  box-sizing: content-box;

  &::-webkit-scrollbar-button {
    display: none;
    height: 0;
    width: 0;
  }
  &::-webkit-scrollbar-button:vertical:increment {
    display: none;
    height: 0;
    width: 0;
  }

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--neutral-700);
    border: solid 1px var(--neutral-600);
    border-radius: 4px;
  }
`;
