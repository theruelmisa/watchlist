import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const SidebarContainer = styled.div`
    height: 100vh;
    border-top: 1px solid #ccc;
    border-right: 1px solid #ccc;
`;

export const NavMenu = styled.ul`
`;

export const NavItem = styled.li`
    border-bottom: 1px solid #ccc;
`;

export const NavLinks = styled(NavLink)`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 2rem 3rem;
    font-size: 1.2rem;

    & > svg {
        font-size: 2rem;
        margin-right: 1rem;
    }

    &:hover {
        color: white;
        background-color: black;
    }

    &.active {
        background-color: orange;
    }
`;