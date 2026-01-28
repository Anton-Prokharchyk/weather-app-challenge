import { ForecastCardContainer } from './forecast-card.styles';

export const ForecastCard = ({
  padding = '8px',
  flex = 'auto',
  children,
  position,
}: {
  children?: React.ReactNode;
  padding?: string;
  position?: 'center';
  flex?: string;
}) => {
  return (
    <ForecastCardContainer position={position} padding={padding} flex={flex}>
      {children}
    </ForecastCardContainer>
  );
};
