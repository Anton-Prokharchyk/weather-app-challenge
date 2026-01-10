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
    <DropDownContainer
      tabIndex={-1}
      onBlur={() => setIsOpen(false)}
      onClick={(e) => {
        clickHandler();
        console.log('event', e);
      }}
      onClickCapture={(e) => {
        console.log('event', e);
      }}
      isOpen={isOpen}
      width={width}
    >
      {children}
    </DropDownContainer>
  );
};
