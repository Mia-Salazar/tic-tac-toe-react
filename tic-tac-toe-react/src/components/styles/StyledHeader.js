import styled from 'styled-components';

export const StyledHeader = styled.header`
  width: 100%;
  height: 275px;
  display:flex;
  flex-direction: column;
  justify-content:space-around;
  align-items:center;
  background-color: #5b8c5a;

`;

export const StyledNav = styled.nav`
  a {
    color: #fff;
    text-decoration: none;
    padding: 8px 16px;
    background-color: #3A5939;
    margin-right: 12px;
    color: #fff;
    font-family: 'Rubik', sans-serif;
    transition: 0.5s all ease;


    &:last-of-type {
      margin-right:0;
    }

    &:hover {
      background-color: #fff;
      color: #3A5939;
    }
  }

`;