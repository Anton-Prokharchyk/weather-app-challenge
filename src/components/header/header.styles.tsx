import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 8%;
`;

export const StyledDropDownMenu = styled.div`
  &:focus-within {
    border-radius: var(--b-radius);
    outline: 2px solid var(--neutral-0);
    outline-offset: 4px;
  }
`;

export const OptionType = styled.p`
  font-size: 16px;
  color: var(--neutral-300);
  padding: 8px;
`;

export const Divider = styled.div`
  width: 100%;
  height: 2px;
  background-color: var(--neutral-700);
`;
