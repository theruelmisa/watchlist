import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Sidebar = styled.div`
    flex: 0 0 10%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-right: 1px solid #ababab;
`;

export const Nav = styled.nav`
    border: 1px solid red;
    font-size: 1.5rem;
    text-align: center;
    list-style: none;
`;

export const Menu = styled.ul`
    border: 1px solid red;

`;

export const MenuItem = styled.li`
    border: 1px solid red;

`;

export const ItemLink = styled.a`
    border: 1px solid red;
    display: block;
    padding: 1.5rem 3rem;

`;

export const Copyright = styled.p`
    font-size: 1.2rem;
    text-align: center;
    padding: 3rem;
`;
