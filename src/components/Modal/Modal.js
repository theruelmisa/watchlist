import React, { useRef, useEffect, useCallback } from 'react'
import { useSpring, animated } from 'react-spring';
import { 
    Overlay,
    ModalWrapper,
    ModalCloseButton
} from './Modal.elements';

export const Modal = ({ showModal, showModalHandler, children }) => {
    const modalRef = useRef();

    const animation = useSpring({
        config: {
            duration: 300
        },
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(0%)` : `translateY(-100%)`
    });

    const closeModal = e => {
        if (modalRef.current === e.target) {
            showModalHandler(false);
        }
    };

    const keyPressHandler = useCallback(e => {
        if (e.key === 'Escape' && showModal) {
            showModalHandler(false);
        }
    }, [showModalHandler, showModal]);

    useEffect(() => {
        document.addEventListener('keydown', keyPressHandler);

        return () => document.removeEventListener('keydown', keyPressHandler);
    }, [keyPressHandler]);

    return(
        <>
            {
                showModal ? 
                (
                    <Overlay ref={modalRef} onClick={closeModal}>
                        <animated.div style={animation}>
                            <ModalWrapper showModal={showModal}>
                                <ModalCloseButton onClick={showModalHandler} />
                                {children}
                            </ModalWrapper>
                        </animated.div>
                    </Overlay>
                ) : null
            }
        </>
    )
}
