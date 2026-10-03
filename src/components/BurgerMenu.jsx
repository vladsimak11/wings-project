import { useState } from 'react';
import { BurgerMenuContainer, BurgerMenuBtn, Menu, Icon,  MainNav, Link } from './BurgerMenu.styled';
import icon from '../../images/icons.svg';

const BurgerMenu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <BurgerMenuContainer>
      <BurgerMenuBtn onClick={toggleMenu}>
        { !isMenuOpen && (
          <Icon width={56} height={56} isMenuOpen={isMenuOpen}>
            <use href={`${icon}#icon-menu`}></use>
          </Icon>
        )}
      </BurgerMenuBtn>

      {isMenuOpen && (
        <Menu isMenuOpen={isMenuOpen}>
          <BurgerMenuBtn onClick={toggleMenu} isMenuOpen={isMenuOpen}>
            <Icon width={48} height={48} isMenuOpen={isMenuOpen} >
              <use href={`${icon}#icon-close`}></use>
            </Icon>
          </BurgerMenuBtn>

          <MainNav>
            <Link smooth to="#home" onClick={toggleMenu}>
              Головна
            </Link>
            <Link smooth to="#about" onClick={toggleMenu}>
              Підрозділ
            </Link>
            <Link smooth to="#videos" onClick={toggleMenu}>
              Відео
            </Link>
            <Link smooth to="#contacts" onClick={toggleMenu}>
              Контакти
            </Link>
          </MainNav>
        </Menu>
      )}
    </BurgerMenuContainer>
  )
}

export default BurgerMenu;
