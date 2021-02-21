import React from 'react'
import {
    Sidebar,
    LogoBox,
    LogoText,
    Nav,
    Menu,
    MenuItem,
    ItemLink,
    Copyright
} from './Sidenav.elements';
import { Column } from '../../globalStyles';

const menuItems = [
    "Now Showing", "Upcoming"
]

const Sidenav = () => {

    return (
        <>
            <Sidebar>
                <Column>
                    <LogoBox>
                        <LogoText>Watchlist</LogoText>
                    </LogoBox>
                    <Nav>
                        <h3>Categories</h3>
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
                </Column>
                <Copyright>
                &copy; 2021 Watchlist | Powered by RM!
                </Copyright>
            </Sidebar>
        </>
    )
}

export default Sidenav
