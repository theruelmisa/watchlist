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
`;

export const NavLinks = styled(NavLink)`
    border: 1px solid red;
`;