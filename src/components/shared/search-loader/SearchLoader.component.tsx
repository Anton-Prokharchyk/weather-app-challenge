import { LoaderContainer, StyledLoaderIcon } from './search-loader.styles';

export const SearchLoader = ({ width, height }: { width?: string; height?: string }) => {
  return (
    <LoaderContainer>
      <StyledLoaderIcon width={width} height={height} />
    </LoaderContainer>
  );
};
