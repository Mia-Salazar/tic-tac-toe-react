import styled from 'styled-components';

export const StyledStartButton = styled.button`
  width: calc(100% - 24px);
  height: 56px;
  display: flex;
  justify-content: center;
  margin: 40px auto 0 auto;
  background: #5b8c5a;
  border:none;
  color: white;
  font-size: 18px;

  &:hover {
    background-color: #3A5939;
  }
`;