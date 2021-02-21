import styled from 'styled-components';
import { Row } from '../../globalStyles';

export const HeaderContainer = styled(Row)`
    grid-column: 1 / -1;
    width: 100%;
    height: 8vh;
    padding: 0 5rem;

    background: orange;
`;

export const LogoBox = styled(Row)`
    cursor: pointer;
`;

export const LogoText = styled.h1`
    font-size: 3.2rem;
    font-weight: 300;
    letter-spacing: .5rem;
`;


