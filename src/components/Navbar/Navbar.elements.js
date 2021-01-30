import styled from 'styled-components';
import { IoFilmOutline } from 'react-icons/io5';
import { Row, Button } from '../../globalStyles';

export const NavbarContainer = styled(Row)`
    border: 1px solid red;
    width: 100%;
    height: 8vh;
    margin-bottom: 8rem;
    padding: 3rem 10rem;
`;

export const LogoBox = styled(Row)`
    cursor: pointer;
    padding: 0 2rem;
    margin-left: 5rem;
`;

export const Logo = styled(IoFilmOutline)`
    font-size: 5rem;
    margin-right: .7rem;
`;

export const LogoText = styled.h1`
    font-size: 2rem;
    letter-spacing: .2rem;
`;

export const NavMenu = styled(Row)`
    padding: 1rem 2rem;
    margin-right: 5rem;
`;

export const LoginButton = styled(Button)`
    margin-right: 2rem;
    color: white;
    background-color: violet;
`;

export const SignUpButton = styled(Button)`
    border-radius: 0;
    background-color: inherit;
    color: red;
`;