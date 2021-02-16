import React from 'react';
import { HeaderContainer, LogoBox, Logo, LogoText } from './Header.elements';
import Searchbar from './Searchbar/Searchbar';

const Header = ({ searchMovie }) => {
    return (
        <>
            <HeaderContainer>
                <LogoBox>
                    <Logo />
                    <LogoText>Watchlist</LogoText>
                </LogoBox>
                <Searchbar onSearchMovie={ searchMovie } />
            </HeaderContainer>
        </>
    )
};

export default Header;
