import styled from 'styled-components';

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 32px;
  height: 92%;
`;

export const MainTitle = styled.h1`
  text-align: center;
  font-family: 'BG', sans-serif;
  font-weight: 700;
  font-size: 32px;
  text-transform: capitalize;
  height: 8%;
  width: 100%;
`;

export const MainForecastContainer = styled.section`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 2fr 1fr;
  gap: 32px;
  height: 78%;
`;
