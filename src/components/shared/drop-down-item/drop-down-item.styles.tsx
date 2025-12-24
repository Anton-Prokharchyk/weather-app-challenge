import styled from 'styled-components';

export const DropDownItemContainer = styled.div`
  background-color: transparent;
  border-radius: var(--b-radius);
  padding: 8px;
  cursor: pointer;
  &:hover {
    background-color: var(--neutral-700);
  }
`;

export const DropDownItemContainerWithIcon = styled.div`
  border-radius: var(--b-radius);
  padding: 8px;
  cursor: pointer;
  background-color: var(--neutral-700);
  display: flex;
  justify-content: space-between;
`;
