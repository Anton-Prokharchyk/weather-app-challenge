import type { HTMLAttributes, MouseEventHandler } from 'react';

import SelectedIcon from '@/assets/images/icon-checkmark.svg?react';

import { DropDownItemContainer, DropDownItemContainerWithIcon } from './drop-down-item.styles';

export const DropDownItem = ({
  children,
  clickHandler = () => {},
  selected = false,
  reference,
  ...otherProps
}: {
  selected?: boolean;
  children: React.ReactNode;
  clickHandler?: MouseEventHandler<HTMLDivElement>;
  otherProps?: HTMLAttributes<HTMLDivElement>;
}) => {
  if (selected)
    return (
      <DropDownItemContainerWithIcon
        {...otherProps}
        onClick={clickHandler}
        onMouseDown={(e) => {
          clickHandler(e);
          document.activeElement.blur();
        }}
        tabIndex={0}
      >
        {children}
        <SelectedIcon />
      </DropDownItemContainerWithIcon>
    );

  return (
    <DropDownItemContainer
      tabIndex={0}
      onClick={(e) => {
        console.log('basdf');
        clickHandler(e);
      }}
      onMouseDown={(e) => {
        clickHandler(e);
        e.currentTarget.focus();
        // document.activeElement.blur();
      }}
      onKeyDown={(e) => {
        if (e.key !== 'Enter') return;
        clickHandler(e);
        e.currentTarget.focus();
        // document.activeElement.blur();
      }}
    >
      {children}
    </DropDownItemContainer>
  );
};
