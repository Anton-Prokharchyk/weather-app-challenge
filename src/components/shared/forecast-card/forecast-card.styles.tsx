import styled from 'styled-components';

export const ForecastCardContainer = styled.div<{ padding?: string; position?: string; flex?: string }>`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  gap: 16px;
  border-radius: var(--b-radius);
  background-color: var(--neutral-800);
  border: 1px solid var(--neutral-600);
  padding: ${({ padding }) => padding || '0'};
  align-items: ${({ position }) => position || 'none'};

  ${({ theme, flex }) =>
    theme.media.mobile(`
      flex: ${flex};
  `)}
`;
