import styled from 'styled-components';

export const DailyForecastWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;

  ${({ theme }) =>
    theme.media.mobile(`
      grid-row: 2;
  `)}
`;

export const DailyForecastTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
`;

export const DailyForecastContainer = styled.div`
  display: flex;
  gap: 1.5%;
  flex: 1 1 auto;

  ${({ theme }) =>
    theme.media.mobile(`
      flex-wrap: wrap;
      gap: 16px;

  `)}
`;

export const TempContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
