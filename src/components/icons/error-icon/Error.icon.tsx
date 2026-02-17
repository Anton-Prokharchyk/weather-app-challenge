import type { HTMLAttributes } from 'react';

import { ErrorIconWrapper, StyledErrorIcon } from './error-icon.styles.tsx';

type ErrorIconProps = {
  width?: string;
  height?: string;
  otherProps?: HTMLAttributes<HTMLDivElement>;
};

export const ErrorIcon = ({ width = '50px', height = '50px', ...otherProps }: ErrorIconProps) => {
  return (
    <ErrorIconWrapper width={width} height={height} {...otherProps}>
      <StyledErrorIcon width={width} height={height} title='Error icon' />
    </ErrorIconWrapper>
  );
};
