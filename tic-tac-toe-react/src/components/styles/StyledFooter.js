import styled from 'styled-components';

export const StyledFooter = styled.footer`
  width: 100%;
  display:flex;
  flex-direction: column;
  justify-content:space-around;
  align-items:center;
  background-color: #5b8c5a;
  padding: 20px;

  p {
    color: #fff;
    font-family: 'Rubik', sans-serif;
  }

  a {
    background-color: #3A5939;
    text-decoration: none;
    margin-right: 12px;
    color: #fff;
    font-family: 'Rubik', sans-serif;
    margin: 4px 0;
    transition: 0.5s all ease;

    &:first-of-type{
    margin-top: 20px;
    }

    &:hover {
      transform: scale(1.5);
    }
  }

  .footer-left, .footer-right {
    text-align: center;
    display: flex;
    flex-direction: column;
  }

`;