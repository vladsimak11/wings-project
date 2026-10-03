import styled from 'styled-components';

export const MainHeader = styled.header`
  height: 28px;
  margin-top: 35px;
  margin-bottom: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 2;
  position: sticky;

  @media screen and (min-width: 768px) {
    margin-bottom: 80px;
  }
`;