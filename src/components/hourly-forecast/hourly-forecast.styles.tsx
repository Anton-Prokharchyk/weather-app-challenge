import styled from 'styled-components';

export const HourlyForecastContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 32px;
  border-radius: var(--b-radius-large);
  background-color: var(--neutral-800);
  grid-row: span 2;
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

export const HourlyForecastList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow: scroll;
`;
