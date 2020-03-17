import React from 'react';
import { useTranslation } from 'react-i18next';
import Logo from './Logo'
import { StyledFooter } from './styles/StyledFooter';

const Footer = () => {
  const { t, i18n } = useTranslation();
  return (
    <StyledFooter>
      <Logo variant="footer" pretitle={'Tic'} title={'tac'} subtitle={'toe'} />
      <p>{t('holi')}<a href="http://miasalazar.com/">Mía Salazar</a></p>
      <a href="https://www.linkedin.com/in/miasalazar/">Linkedin</a>
      <a href="https://github.com/Mia-Salazar">Github</a>
    </StyledFooter>
  );
}

Footer.propTypes = {
}

export default Footer;