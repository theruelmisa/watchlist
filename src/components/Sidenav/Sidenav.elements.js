import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Sidebar = styled.div`
    flex: 0 0 10%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    border: 1px solid red;
`;

export const Nav = styled.nav`
    font-size: 1.5rem;
    text-align: center;
    list-style: none;
`;

export const Menu = styled.ul`
`;

export const MenuItem = styled.li`
    position: relative;

    &:not(:last-child) {
        margin-bottom: .5rem;
    } 

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 3px;
        background-color: black;
        transform: scaleY(0);
        transition: transform .3s,
                    width .5s cubic-bezier(1, 0, 0, 1) .3s;
    }

    &:hover::before {
        transform: scaleY(1);
        width: 100%;
    }
`;

export const ItemLink = styled.a`
    position: relative;
    z-index: 5;
    display: block;
    padding: 1.5rem 3rem;

`;

export const Copyright = styled.p`
    font-size: 1.2rem;
    text-align: center;
    padding: 3rem;
`;
