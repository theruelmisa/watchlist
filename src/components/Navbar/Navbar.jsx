import React from 'react'
import { NavbarContainer, LogoBox, Logo, LogoText } from './Navbar.elements';
import Searchbar from './Searchbar/Searchbar';


const Navbar = ({ searchMovie }) => {
    return (
        <>
            <NavbarContainer>
                <LogoBox>
                    <Logo />
                    <LogoText>Watchlist</LogoText>
                </LogoBox>
                <Searchbar onSearchMovie={ searchMovie } />
            </NavbarContainer>
        </>
    )
}

export default Navbar;
