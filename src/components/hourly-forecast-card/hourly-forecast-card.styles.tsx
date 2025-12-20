import styled from 'styled-components';

export const HourlyCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 8px 16px;
  background-color: var(--neutral-700);
  border-radius: var(--b-radius);
  border: 1px solid var(--neutral-600);
`;

export const HourlyTime = styled.p`
  flex: 1 1 auto;
  font-size: 20px;
  font-weight: 400;
`;

export const HourlyTemp = styled.p`
  font-size: 16px;
  font-weight: 400;
`;
