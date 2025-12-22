import type { MouseEventHandler } from 'react';
import { DropDownItemContainer } from './drop-down-item.styles';

export const DropDownItem = ({
  children,
  clickHandler,
}: {
  children: React.ReactNode;
  clickHandler?: MouseEventHandler<HTMLDivElement> | undefined;
}) => <DropDownItemContainer onClick={clickHandler}>{children}</DropDownItemContainer>;
