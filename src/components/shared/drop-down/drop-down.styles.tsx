import styled from 'styled-components';

export const DropDownContainer = styled.div<{ width?: string; isOpen: boolean }>`
  position: absolute;
  background-color: var(--neutral-800);
  border-radius: var(--b-radius);
  border: 1px solid var(--neutral-700);
  width: ${({ width }) => width || 'auto'};
  padding: 8px;
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;
  top: 100%;
  right: 0;
  margin-top: 8px;
  z-index: 1;
  gap: 4px;
  &:nth-child(frist):focus-visible {
    outline: 2px solid var(--neutral-0);
  }
`;
