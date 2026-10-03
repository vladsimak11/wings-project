import { MainNav, Link } from './Navigation.styled';

const Navigation = () => {
  return  (
    <MainNav>
      <Link smooth to="#home" >
        Головна
      </Link>
      <Link smooth to="#about">
        Підрозділ
      </Link>
      <Link smooth to="#videos">
        Відео
      </Link>
      <Link smooth to="#contacts">
        Контакти
      </Link>
    </MainNav>
  );
};

export default Navigation;
