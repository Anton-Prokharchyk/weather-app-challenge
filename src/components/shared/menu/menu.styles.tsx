import styled from 'styled-components';

export const MenuContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: var(--b-radius);
  background-color: ${({ variant }) => (variant === 'dark' ? 'var(--neutral-800)' : 'var(--neutral-600)')};
  padding: 8px 16px;
  cursor: pointer;
`;
