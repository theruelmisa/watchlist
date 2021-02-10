import styled from 'styled-components';
import { IoFilmOutline } from 'react-icons/io5';
import { Row } from '../../globalStyles';

export const NavbarContainer = styled(Row)`
    width: 100%;
    height: 8vh;
    margin-bottom: 5rem;
    padding: 1rem 5rem;
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
