import styled from 'styled-components';

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 32px;
  height: 92%;

  ${({ theme }) =>
    theme.media.mobile(`
    height: auto;
`)}
`;

export const MainTitle = styled.h1`
  text-align: center;
  font-family: 'BG', sans-serif;
  font-weight: 700;
  font-size: 32px;
  text-transform: capitalize;
  height: 8%;
  width: 100%;

  ${({ theme }) =>
    theme.media.mobile(`
      font-size: 56px;
      height: auto;
  `)}
`;

export const MainForecastContainer = styled.section`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 2fr 1fr;
  gap: 32px;
  height: 77%;

  ${({ theme }) =>
    theme.media.mobile(`
      grid-template-columns: auto;
      grid-template-rows: auto;
      height: auto;
  `)}
`;

export const NoResults = styled.p`
  font-family: 'DS', sans-serif;
  font-weight: 400;
  font-size: 24px;
  text-align: center;
`;
