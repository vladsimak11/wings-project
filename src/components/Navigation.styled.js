import styled from 'styled-components';

export const MainNav = styled.nav`
  display: none;
  
  @media screen and (min-width: 1280px) {
    display: flex;
    gap: 25px;
  }
`;

export const Link = styled.a`
  position: relative;
  font-size: 20px;
  letter-spacing: 0.8px;
  line-height: 2em;
  
  &:after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 3px;
    left: 50%;
    position: absolute;
    background: #62b432;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }

  &:hover:after, &:active:after { 
    width: 100%; 
    left: 0; 
  }   
`;
