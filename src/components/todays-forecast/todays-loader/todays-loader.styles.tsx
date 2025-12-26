import styled, { keyframes } from 'styled-components';

const jump = keyframes`
    0% {
        top:0px
    }
    50% {
        top: 5px;
    }
    100% {
        top:0px
    }
`;

export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const Loader = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 8px;
`;

export const LoaderDot = styled.div<{ delay: number }>`
  position: relative;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: var(--neutral-200);
  animation: ${jump} 1s ease-in-out infinite;
  -webkit-animation: ${jump} 1s ease-in-out infinite;
  animation-delay: ${({ delay }) => delay + 's'};
`;

export const LoaderText = styled.p`
  color: var(--neutral-200);
`;
