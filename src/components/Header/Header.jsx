import React from 'react';
import { HeaderContainer, LogoBox, LogoText, WelcomeText } from './Header.elements';

const Header = () => {
    return (
        <>
            <HeaderContainer>
                <LogoBox>
                    <LogoText>Watchlist</LogoText>
                </LogoBox>
            </HeaderContainer>
        </>
    )
};

export default Header;
