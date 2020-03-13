import React from 'react';
import Logo from './Logo'
import { StyledHeader, StyledNav } from './styles/StyledHeader';

const Header = () => (
  <StyledHeader>
      <Logo pretitle={'Tic'} title={'tac'} subtitle={'toe'} />
      <StyledNav>
          <a href="http://miasalazar.com/">Autora</a>
          <a href="http://mia-search-movies-project.surge.sh/">Peliteca</a>
          <a href="https://www.linkedin.com/in/miasalazar/">Linkedin</a>
      </StyledNav>
  </StyledHeader>
);

export default Header;