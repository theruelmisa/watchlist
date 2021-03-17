import React from 'react'
import { SidebarContainer } from './Sidebar.elements';
import { NavLink } from 'react-router-dom';
import { } from 'react-icons/'

const Sidebar = () => {
    return (
        <SidebarContainer>
            <ul>
                <li>
                    <NavLink to="/">Trending</NavLink>
                </li>
                <li>
                    <NavLink to="/favorites">Favorites</NavLink>
                </li>
                <li>
                    <NavLink to="/now-showing">Now Showing</NavLink>
                </li>
                <li>
                    <NavLink to="/upcoming">Upcoming</NavLink>
                </li>
                <li>
                    <NavLink to="/top-rated">Top Rated</NavLink>
                </li>
            </ul>
        </SidebarContainer>
    )
}

export default Sidebar
