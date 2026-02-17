import type { HTMLAttributes } from 'react';

import { RetryIconWrapper, StyledRetryIcon } from './retry-icon.styles.js';

type RetryIconProps = {
  width?: string;
  height?: string;
  otherProps?: HTMLAttributes<HTMLDivElement>;
};

export const RetryIcon = ({ width = '50px', height = '50px', ...otherProps }: RetryIconProps) => {
  return (
    <RetryIconWrapper width={width} height={height} {...otherProps}>
      <StyledRetryIcon width={width} height={height} title='Retry icon' />
    </RetryIconWrapper>
  );
};
