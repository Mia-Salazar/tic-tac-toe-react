import React from 'react';
import Logo from './Logo'
import { useTranslation } from 'react-i18next';
import { StyledHeader, StyledNav } from './styles/StyledHeader';

const Header = () => {
  const { t } = useTranslation();
  return (
    <StyledHeader>
        <Logo pretitle={'Tic'} title={'tac'} subtitle={'toe'} />
        <StyledNav>
            <a href="http://miasalazar.com/">{t('author')}</a>
            <a href="http://mia-search-movies-project.surge.sh/">Peliteca</a>
            <a href="https://github.com/Mia-Salazar/tic-tac-toe-react">Proyecto Github</a>
        </StyledNav>
    </StyledHeader>
  );
}

export default Header;