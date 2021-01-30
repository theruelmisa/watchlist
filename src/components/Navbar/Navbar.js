import React from 'react';
import { 
    NavbarContainer,
    LogoBox,
    Logo,
    LogoText,
    NavMenu,
    LoginButton,
    SignUpButton
} from './Navbar.elements';

const Navbar = () => {
    return (
        <NavbarContainer>
            <LogoBox>
                <Logo />
                <LogoText>
                    Watch List
                </LogoText>
            </LogoBox>
            <NavMenu>
                <LoginButton>Login</LoginButton>
                <SignUpButton>Sign Up</SignUpButton>
            </NavMenu>
        </NavbarContainer>
    )
};

export default Navbar;
