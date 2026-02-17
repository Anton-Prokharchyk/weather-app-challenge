import styled from 'styled-components';

import RetryIcon from '@/assets/images/icon-retry.svg?react';

export const RetryIconWrapper = styled.div<{ width?: string; height?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => width || '50px'};
  height: ${({ height }) => height || '50px'};
`;

export const StyledRetryIcon = styled(RetryIcon)<{ width?: string; height?: string; title?: string }>`
  width: ${({ width }) => width || '50px'};
  height: ${({ height }) => height || '50px'};
`;
