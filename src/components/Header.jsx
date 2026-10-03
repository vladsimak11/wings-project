import { MainHeader } from './Header.styled';
import Logo from './Logo';
import Navigation from './Navigation';
import BurgerMenu from './BurgerMenu';
import { Container } from '../App.styled';

const Header = () => {
  return (
    <Container>
      <MainHeader>
        <Logo />
        <Navigation />
        <BurgerMenu/>
      </MainHeader>
    </Container>
  );
};

export default Header;
