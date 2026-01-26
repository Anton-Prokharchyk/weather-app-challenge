import { DropDownContainer } from './drop-down.styles';

export const DropDown = ({
  children,
  isOpen,
  width,
  setIsOpen = () => {},
  clickHandler = () => {},
}: {
  children: React.ReactNode;
  isOpen: boolean;
  width?: string;
  setIsOpen?: (boolean: boolean) => void;
  clickHandler?: () => void;
}) => {
  return (
    <DropDownContainer tabIndex={-1} onClick={() => clickHandler()} isOpen={isOpen && !!children} width={width}>
      {children}
    </DropDownContainer>
  );
};
