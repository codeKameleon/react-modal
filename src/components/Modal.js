import React from 'react'
import {useSpring, animated} from 'react-spring'
import styled from 'styled-components'
import {MdClose} from 'react-icons/md'

const Background = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;    
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .8);
`
const ModalWrapper = styled.div`
    position: relative;
    z-index: 10;
    display: flex;
    align-items: center;
    width: 800px;
    height: 500px;
    box-shadow: 0 5px 16px rgba(0, 0, 0, .2);
    border-radius: 10px;
    background-color: rgba(0, 0, 0, .8);
    color: #000;
`
const ModalCover = styled.div`
    width: 100%;
    height: 100%;
    background-image: url('https://i.ibb.co/vjzFCr9/daniela-modal.jpg');
    background-size: cover;
    background-position: 35% 50%;
    border-radius: 10px 0 0 10px;
    border-right: 1px dotted #fff;
`
const ModalContent =  styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.8;
    font-family: 'Rubik Light', sans-serif;
    /*color: #141414;*/
    color: #fff;

    p {
        padding: 3rem;
    }
`
const CloseModalButton = styled(MdClose)`
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    width: 32px;
    height: 32px;
    padding: 0;
    z-index: 10;
    color: #fff;
`

export const Modal =  ({showModal, setShowModal}) => {
    const animation = useSpring({
        config: {
            duration: 250
        },

        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(0%)` : `translateY(-100%)`
    })

    return (
        <>
        {showModal && (
            <Background>
                <animated.div style={animation}>
                    <ModalWrapper>
                        <ModalCover/>

                        <ModalContent>
                            <h1>Episode #1 - Daniela</h1>

                            <p>
                                Daniela est une jeune artiste et skateuse bruxelloise. Dans cet épisode qui lui est dédié,
                                on parle entre autre de ses projets de tote bags inspirés des émotions de ses clients, ses 
                                débuts dans le skate quand elle a débarqué à Bruxelles et de l'évolution de la scène skate
                                féminine à Bruxelles depuis ces dernières années.
                            </p>
                        </ModalContent>

                        <CloseModalButton aria-label='Close modal' onClick={() => setShowModal(prev => !prev)}/>
                    </ModalWrapper>
                </animated.div>
            </Background>
        )}
        </>
    )
}