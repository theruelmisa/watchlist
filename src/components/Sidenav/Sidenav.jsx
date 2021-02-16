import React from 'react'
import {
    Sidebar,
    Nav,
    Menu,
    MenuItem,
    ItemLink,
    Copyright
} from './Sidenav.elements';

const menuItems = [
    "Favorites", "Now Showing", "Upcoming"
]

const Sidenav = () => {

    return (
        <>
            <Sidebar>
                <Nav>
                    <Menu>
                        { menuItems.map( item => (
                            <MenuItem key={ item }>
                                <ItemLink href="">
                                    { item }
                                </ItemLink>
                            </MenuItem>
                        ))}
                    </Menu>
                </Nav>
                <Copyright>
                &copy; 2021 Watchlist | Powered by RM!
                </Copyright>
            </Sidebar>
        </>
    )
}

export default Sidenav
