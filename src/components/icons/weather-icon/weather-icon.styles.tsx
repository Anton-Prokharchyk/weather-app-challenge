import styled from 'styled-components';

export const WeatherIconWrapper = styled.div<{ width?: string; height: string }>`
  width: ${({ width }) => width || 'auto'};
  height: ${({ height }) => height || '100%'};
  display: flex;
  justify-content: center;
  align-items: center;
`;
