import styled from 'styled-components';

export const StyledCard = styled.button`
  width: 75px;
  height: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  background-color: #5b8c5a;
  color: #fff; 
  font-size: 42px;
  font-weight: bold;
  font-family: 'Rubik', sans-serif;
  border: none;

  &:hover {
    background-color: #3A5939;
  }

  @media (min-width: 768px){
    width: 100px;
    height: 100px;
  }
`;