import React from 'react'
import { 
    SidebarContainer,
    LogoBox,
    LogoText,
    NavMenu,
    NavItem,
    NavLinks,
    Copyright,
    CopyText
} from './Sidebar.elements';
import { IoFilm, IoFlame, IoHeart, IoStar, IoPaperPlane } from 'react-icons/io5';

const Sidebar = () => {



    return (
        <SidebarContainer>
            <LogoBox>
                <LogoText>Watchlist</LogoText>
            </LogoBox>
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
            <Copyright>
                <CopyText>
                    Watchlist &copy; {new Date().getFullYear()} | Powered by RM! 
                </CopyText>
            </Copyright>
        </SidebarContainer>
    )
}

export default Sidebar
