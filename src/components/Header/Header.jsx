import React from 'react';
import { HeaderContainer, LogoBox, LogoText, WelcomeText } from './Header.elements';
import Searchbar from './Searchbar/Searchbar';

const Header = ({ searchMovie }) => {
    return (
        <>
            <HeaderContainer>
                <LogoBox>
                    <LogoText>Watchlist</LogoText>
                </LogoBox>
                <Searchbar onSearchMovie={ searchMovie } />
                <WelcomeText>Welcome, Guest!</WelcomeText>
            </HeaderContainer>
        </>
    )
};

export default Header;
