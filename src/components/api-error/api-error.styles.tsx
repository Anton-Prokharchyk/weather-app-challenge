import styled from 'styled-components';

export const ApiErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
`;
export const Desc = styled.p`
  font-family: 'BG';
  font-weight: 700;
  font-size: 16px;
  color: var(--neutral-300);
  text-align: center;
`;
export const Head = styled.h2`
  font-family: 'BG';
  font-weight: 700;
  font-size: 32px;
`;
export const ErrorButton = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: var(--b-radius);
  background-color: var(--neutral-800);
  padding: 8px 16px;
  cursor: pointer;
`;
