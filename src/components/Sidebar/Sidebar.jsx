import React from 'react'
import { 
    SidebarContainer,
    NavMenu,
    NavItem,
    NavLinks
} from './Sidebar.elements';
import { IoFilm, IoFlame, IoHeart, IoStar, IoPaperPlane } from 'react-icons/io5';

const Sidebar = () => {
    return (
        <SidebarContainer>
            <NavMenu>
                <NavItem>
                    <NavLinks exact to="/">
                        <IoFlame />
                        Trending
                    </NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks exact to="/now-showing">
                        <IoFilm />
                        Now Showing
                    </NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks exact to="/upcoming">
                        <IoPaperPlane />
                        Upcoming
                    </NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks exact to="/top-rated">
                        <IoStar />
                        Top Rated
                    </NavLinks>
                </NavItem>
                {/* <NavItem>
                    <NavLinks to="/favorites">
                        <IoHeart />
                        Favorites
                    </NavLinks>
                </NavItem> */}
            </NavMenu>
        </SidebarContainer>
    )
}

export default Sidebar
