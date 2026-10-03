import styled from 'styled-components';

export const Container = styled.div`
  min-width: 320px;
  max-width: 480px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1280px;
    padding-left: 16px;
    padding-right: 16px;
  }
`;

export const Main = styled.main`
  padding-bottom: 60px;
`;

export const Header = styled.h2`
  font-family: 'Open Sans Bold';
  text-align: center;
  font-size: 36px;
  line-height: 1.2;
  margin-bottom: 30px;

  @media screen and (min-width: 768px) {
    margin-bottom: 50px;
  }
`;

export const Section = styled.section`
  margin-top: 50px;

  @media screen and (min-width: 1280px) {
    margin-top: 80px;
  }
`;