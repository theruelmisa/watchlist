import styled from 'styled-components';
import { Row } from '../../globalStyles';

export const HeaderContainer = styled(Row)`
    width: 100%;
    height: 8vh;
    margin-bottom: 5rem;
    padding: 0 5rem;
`;

export const LogoBox = styled(Row)`
    cursor: pointer;
`;

export const LogoText = styled.h1`
    font-size: 3.2rem;
    font-weight: 300;
    letter-spacing: .5rem;
`;

export const WelcomeText = styled.h3`
    font-size: 1.8rem;
    font-weight: 400;
`;
