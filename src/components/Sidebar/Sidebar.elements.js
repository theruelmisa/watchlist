import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const SidebarContainer = styled.div`
    height: 100%;
    border-top: 1px solid #ccc;
    border-right: 1px solid #ccc;
`;

export const LogoBox = styled.div`
    padding: 1rem;
    margin-bottom: 3rem;
    text-align: center;
`;

export const LogoText = styled.h1`
    padding: 1rem 0;
    font-size: 2.5rem;
    font-weight: 300;
    letter-spacing: .3rem;

    &::first-letter {
        font-weight: 700;
        font-size: 4rem;
        color: orange;
    }
`;

export const NavMenu = styled.ul`
    margin-bottom: 5rem;
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

export const Copyright = styled.div`
    padding: 2rem 1rem;
    text-align: center;    
`;

export const CopyText = styled.p`
    font-size: 1.2rem;
    font-weight: 700;
`;