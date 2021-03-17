import React from 'react'
import Searchbar from './Searchbar/Searchbar';
import { HeaderContainer, Logo } from './Header.elements';

const Header = () => {
    return (
        <HeaderContainer>
            <Logo>WatchList</Logo>
            <Searchbar />
        </HeaderContainer>
    )
};

export default Header;
