import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const SidebarContainer = styled.div`
    border: 1px solid red;
    width: 10%;
    height: 100vh;
`;

export const NavMenu = styled.ul`
    border: 1px solid red;
`;

export const NavItem = styled.li`
    border: 1px solid red;
    display: flex;
    align-items: center;
`;

export const NavLinks = styled(NavLink)`
    display: inline-block;
    width: 100%;
    padding: 2rem;
    text-align: center;
    font-size: 1.2rem;

    &:hover {
        color: white;
        background-color: black;
    }
`;