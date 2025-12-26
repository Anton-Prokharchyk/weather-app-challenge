import { ForecastCardContainer } from './forecast-card.styles';

export const ForecastCard = ({
  padding = '8px',
  children,
  position,
}: {
  children?: React.ReactNode;
  padding?: string;
  position?: 'center';
}) => {
  return (
    <ForecastCardContainer position={position} padding={padding}>
      {children}
    </ForecastCardContainer>
  );
};
