import React from 'react'
import { 
    SidebarContainer,
    NavMenu,
    NavItem,
    NavLinks
} from './Sidebar.elements';
import { } from 'react-icons/'

const Sidebar = () => {
    return (
        <SidebarContainer>
            <NavMenu>
                <NavItem>
                    <NavLinks to="/">Trending</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="/now-showing">Now Showing</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="/upcoming">Upcoming</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="/top-rated">Top Rated</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="/favorites">Favorites</NavLinks>
                </NavItem>
            </NavMenu>
        </SidebarContainer>
    )
}

export default Sidebar
