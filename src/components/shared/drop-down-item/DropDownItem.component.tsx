import type { HTMLAttributes, ReactEventHandler } from 'react';

import SelectedIcon from '@/assets/images/icon-checkmark.svg?react';

import { DropDownItemContainer, DropDownItemContainerWithIcon } from './drop-down-item.styles';

export const DropDownItem = ({
  children,
  clickHandler = () => {},
  selected = false,
  ...otherProps
}: {
  selected?: boolean;
  children: React.ReactNode;
  clickHandler?: ReactEventHandler<HTMLDivElement>;
  otherProps?: HTMLAttributes<HTMLDivElement>;
}) => {
  if (selected)
    return (
      <DropDownItemContainerWithIcon {...otherProps} onClick={clickHandler} tabIndex={0}>
        {children}
        <SelectedIcon />
      </DropDownItemContainerWithIcon>
    );

  return (
    <DropDownItemContainer
      tabIndex={0}
      onClick={(e) => {
        clickHandler(e);
        e.preventDefault();
      }}
      onKeyDown={(e) => {
        if (e.key !== 'Enter') return;
        clickHandler(e);
      }}
    >
      {children}
    </DropDownItemContainer>
  );
};
