import { MenuContainer } from './menu.styles';

export const Menu = ({
  variant,
  children,
  clickHandler,
}: {
  variant?: 'dark';
  children: React.ReactNode;
  clickHandler?: () => void;
}) => {
  return (
    <MenuContainer onClick={clickHandler} variant={variant}>
      {children}
    </MenuContainer>
  );
};
