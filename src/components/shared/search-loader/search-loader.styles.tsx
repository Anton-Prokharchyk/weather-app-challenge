import styled, { keyframes } from 'styled-components';

import LoaderIcon from '@/assets/images/icon-loading.svg?react';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const StyledLoaderIcon = styled(LoaderIcon)<{ width?: string; height?: string }>`
  width: ${({ width }) => width || '50px'};
  height: ${({ height }) => height || '50px'};
  animation: ${rotate360} 2s linear infinite;
`;
