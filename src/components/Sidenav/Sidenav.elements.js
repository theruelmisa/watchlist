import styled from 'styled-components';
import { Column, Row } from '../../globalStyles';
import { NavLink } from 'react-router-dom';

export const Sidebar = styled(Column)`
    justify-content: space-between;
    padding: 1rem 0;

    border: 1px solid red;
`;

export const LogoBox = styled(Row)`
    cursor: pointer;
`;

export const LogoText = styled.h1`
    font-size: 3rem;
    font-weight: 300;
    letter-spacing: .2rem;
    margin-top: 1rem;
    margin-bottom: 5rem;
`;

export const Nav = styled.nav`
    font-size: 1.5rem;
    list-style: none;
    width: 100%;
`;

export const Menu = styled.ul`
    border: 1px solid red;
`;

export const MenuItem = styled.li`
    position: relative;

    &:not(:last-child) {
        margin-bottom: .5rem;
    } 
/* 
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
    } */
`;

export const ItemLink = styled.a`
    position: relative;
    z-index: 5;
    display: block;
    padding: 1.5rem 0rem;

`;

export const Copyright = styled.p`
    font-size: 1.2rem;
    padding: 1.5rem;
`;
