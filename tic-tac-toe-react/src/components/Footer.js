import React from 'react';
// import { useTranslation, withTranslation, Trans } from 'react-i18next';
import Logo from './Logo'
import { StyledFooter } from './styles/StyledFooter';

const Footer = () => {
  // const { t, i18n } = useTranslation();
  return (
    <StyledFooter>
      <Logo variant="footer" pretitle={'Tic'} title={'tac'} subtitle={'toe'} />
      <a href="http://miasalazar.com/">Mía Salazar</a>
      <a href="https://www.linkedin.com/in/miasalazar/">Linkedin</a>
      <a href="https://github.com/Mia-Salazar">Github</a>
      <p>Gracias a <a href="https://medium.com/@shifrb/how-to-build-tic-tac-toe-with-react-hooks-ca37f6040022">Shif Ben</a></p>
    </StyledFooter>
  );
}

Footer.propTypes = {
}

export default Footer;