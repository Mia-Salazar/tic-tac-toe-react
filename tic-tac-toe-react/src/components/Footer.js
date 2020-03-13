import React from 'react';
import PropTypes from 'prop-types';
import Logo from './Logo'
import { StyledFooter } from './styles/StyledFooter';

const Footer = () => (
  <StyledFooter>
    <Logo variant="footer" pretitle={'Tic'} title={'tac'} subtitle={'toe'} />
    <a href="http://miasalazar.com/">Mía Salazar</a>
    <a href="https://www.linkedin.com/in/miasalazar/">Linkedin</a>
    <a href="https://github.com/Mia-Salazar">Github</a>
  </StyledFooter>
);

Footer.propTypes = {
}

export default Footer;