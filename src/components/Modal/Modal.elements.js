import styled from 'styled-components';
import { IoClose } from 'react-icons/io5';

export const Overlay = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
`;

export const ModalWrapper = styled.div`
    width: 100rem;
    height: 60rem;
    background: #fafafa;
    position: relative;
    z-index: 10;
`;

export const ModalCloseButton = styled(IoClose)`
    cursor: pointer;
    position: absolute;
    top: 2rem;
    right: 2rem;
    width: 3rem;
    height: 3rem;
    padding: 0;
    z-index: 100;
`;