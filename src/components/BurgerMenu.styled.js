import styled from 'styled-components';

const stylesSvgActive = {
  dark: 'var(--bg-color)',
  white: 'var(--main-color)',
};

export const BurgerMenuContainer = styled.div`
  display: flex;

  @media screen and (min-width: 1280px) {
    display: none;
  }
`;

export const BurgerMenuBtn = styled.button`
  position: ${props => props.isMenuOpen && "absolute"};
  top: 16px;
  right: 16px;
  padding: 0;
  margin: 0;
  background-color: transparent;
  cursor: pointer;
  border: none;
`;

export const Menu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 70px 40px 70px 40px;

  @media screen and (min-width: 480px) {
    padding: 70px;
  } 

  background-color: var(--main-color);
  transform: translateX(100%);
  transition: transform .2s ease-out;
  transform: ${props => props.isMenuOpen && "translateX(0)"};

`;

export const Icon = styled.svg`
  stroke: ${props => props.isMenuOpen ? stylesSvgActive.dark : stylesSvgActive.white};
  fill: ${props => props.isMenuOpen ? stylesSvgActive.dark : stylesSvgActive.white};
`;

export const MainNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 80px;
`;

export const Link = styled.a`
  position: relative;
  color: var(--bg-color);
  font-family: 'Open Sans SemiBold';
  font-size: 32px;
  line-height: calc(39 / 32);
  letter-spacing: 0.02em;
  text-align: center;
  transition: var(--main-transition);

  &:active { 
    color: var(--second-color);
  }   
`;


