import styled from 'styled-components';

import ErrorIcon from '@/assets/images/icon-error.svg?react';

export const ErrorIconWrapper = styled.div<{ width?: string; height?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => width || '50px'};
  height: ${({ height }) => height || '50px'};
`;

export const StyledErrorIcon = styled(ErrorIcon)<{ width?: string; height?: string; title?: string }>`
  width: ${({ width }) => width || '50px'};
  height: ${({ height }) => height || '50px'};
`;
