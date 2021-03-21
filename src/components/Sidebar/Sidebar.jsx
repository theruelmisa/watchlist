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
            <h1>Watchlist Logo</h1>
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
            </NavMenu>
            <p>Copyright here</p>
        </SidebarContainer>
    )
}

export default Sidebar
