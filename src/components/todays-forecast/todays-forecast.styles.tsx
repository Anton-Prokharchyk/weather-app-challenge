import styled from 'styled-components';

import bgImg from '@/assets/images/bg-today-large.svg';

export const TodaysForecastContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 32px;
`;

export const StyledTodaysForecast = styled.div<{ isLoading: boolean }>`
  ${({ isLoading }) =>
    isLoading ? 'background-color: var(--neutral-800)' : `background: url(${bgImg}) no-repeat center/cover`};

  border-radius: 20px;
  flex: 1 1 auto;

  width: 100%;
  padding: 16px;
  display: flex;
  justify-content: ${({ isLoading }) => (isLoading ? 'center' : 'space-between')};
  align-items: center;
`;

export const Location = styled.p`
  margin-bottom: 16px;
  font-size: 32px;
  font-weight: 700;
`;

export const Date = styled.p`
  font-weight: 300;
`;

export const TempWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const Temp = styled.p`
  font-family: 'DSI', sans-serif;
  font-weight: 700;
  font-size: 64px;
`;

export const AddInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2%;
`;

export const AddInfoTitle = styled.p`
  text-transform: capitalize;
  color: var(--neutral-200);
  font-size: 16px;
`;

export const AddInfoValue = styled.p`
  font-family: 'DS', sans-serif;
  font-weight: 400;
  font-size: 24px;
`;

export const ForecastImg = styled.img`
  max-width: none;
`;
