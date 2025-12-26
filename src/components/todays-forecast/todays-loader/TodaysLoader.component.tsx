import { Loader, LoaderContainer, LoaderDot, LoaderText } from './todays-loader.styles';

export const TodaysLoader = () => {
  return (
    <LoaderContainer>
      <Loader>
        <LoaderDot delay={0} />
        <LoaderDot delay={0.2} />
        <LoaderDot delay={0.4} />
      </Loader>
      <LoaderText>Loading...</LoaderText>
    </LoaderContainer>
  );
};
