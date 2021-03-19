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
                    <NavLinks exact to="/">Trending</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks exact to="/now-showing">Now Showing</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks exact to="/upcoming">Upcoming</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks exact to="/top-rated">Top Rated</NavLinks>
                </NavItem>
                {/* <NavItem>
                    <NavLinks to="/favorites">Favorites</NavLinks>
                </NavItem> */}
            </NavMenu>
        </SidebarContainer>
    )
}

export default Sidebar
