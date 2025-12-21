import { DropDownContainer } from './drop-down.styles';

export const DropDown = ({
  children,
  isOpen,
  width,
  setIsOpen,
}: {
  children: React.ReactNode;
  isOpen: boolean;
  width?: string;
  setIsOpen?: () => void;
}) => {
  return (
    <DropDownContainer onClick={setIsOpen} isOpen={isOpen} width={width}>
      {children}
    </DropDownContainer>
  );
};
