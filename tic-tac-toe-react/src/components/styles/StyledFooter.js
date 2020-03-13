import styled from 'styled-components';

export const StyledFooter = styled.footer`
  width: 100%;
  display:flex;
  flex-direction: column;
  justify-content:space-around;
  align-items:center;
  background-color: #5b8c5a;
  padding: 20px;

  a {
    text-decoration: none;
    margin-right: 12px;
    color: #fff;
    font-family: 'Rubik', sans-serif;
  }

  a {
    margin: 4px 0;

    &:first-of-type{
    margin-top: 20px;
    }
  }

  .footer-left, .footer-right {
    text-align: center;
    display: flex;
    flex-direction: column;
  }

`;