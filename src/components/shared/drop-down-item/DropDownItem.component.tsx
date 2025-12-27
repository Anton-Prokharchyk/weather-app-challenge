import type { HTMLAttributes, MouseEventHandler } from 'react';

import SelectedIcon from '@/assets/images/icon-checkmark.svg?react';

import { DropDownItemContainer, DropDownItemContainerWithIcon } from './drop-down-item.styles';

export const DropDownItem = ({
  children,
  clickHandler,
  selected = false,
  ...otherProps
}: {
  selected?: boolean;
  children: React.ReactNode;
  clickHandler?: MouseEventHandler<HTMLDivElement> | undefined;
  otherProps: HTMLAttributes<HTMLDivElement>;
}) => {
  if (selected)
    return (
      <DropDownItemContainerWithIcon {...otherProps} onClick={clickHandler}>
        {children}
        <SelectedIcon />
      </DropDownItemContainerWithIcon>
    );

  return <DropDownItemContainer onClick={clickHandler}>{children}</DropDownItemContainer>;
};
