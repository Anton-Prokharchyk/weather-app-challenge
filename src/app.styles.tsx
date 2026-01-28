import styled from 'styled-components';

export const AppContainer = styled.div`
  padding: 32px;
  max-width: 1280px;
  height: 100vh;
  margin: 0 auto;

  ${({ theme }) =>
    theme.media.mobile(`
      height: auto;
      padding: 16px;
  `)}
`;
