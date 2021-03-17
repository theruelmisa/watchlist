import React from 'react'
import Searchbar from './Searchbar/Searchbar';
import { HeaderContainer, Logo } from './Header.elements';

const Header = ({ handleSearchMovie }) => {
    return (
        <HeaderContainer>
            <Logo>WatchList</Logo>
            <Searchbar onSearchMovie={handleSearchMovie} />
        </HeaderContainer>
    )
};

export default Header;
