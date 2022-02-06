import React, { forwardRef, useCallback, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { useSpring, animated } from 'react-spring'
import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import { Loader } from './Loader';
import { useFetch } from '../calls/useFetch';

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: start;   
    background: rgba(0, 0, 0, .8);

    @media (min-width: 768px) {
        align-items: center;
    }
`
const ModalWrapper = styled.div`
    max-width: 768px;
    height: 100vh;
    position: relative;
    overflow-y: scroll;
    z-index: 20;
    display: flex;
    justify-content: center;
    box-shadow: 0 5px 16px rgba(0, 0, 0, .2);
    background-color: rgba(0, 0, 0, .9);
    border-radius: 10px;
    color: #000;

    @media (min-width: 768px){
        height: 80vh;
    }
`
const ModalContent =  styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem;
    overflow-y: scroll;
    font-family: 'Rubik Light', sans-serif;
    line-height: 1.8;
    color: #fff;

    img {
        margin-bottom: 2rem;
        border-radius: 50%;
        border: 4px solid #FBB117;
    }

    h2 {
        margin-bottom: 0.5rem;
        font-size: 1rem;
    }

    .description p:nth-child(2) {
        margin-top: 2rem;;
        margin-bottom: 1rem;
    }

    a {
        color: #fff;
        font-weight: bold;
        margin-right: 1rem;

        &:hover {
            color: #FBB117;
        }
    }

    .icon {
        color: #fff;
        font-size: 1.25rem;
        transition: color 400ms ease;

        &:hover {
            color: #FBB117;
        }
    }

    footer {
        display: flex;
        flex-wrap: wrap;
        align-items: space-around;
        align-content: space-around;
        width: 100%;

        div:first-child {
            padding-bottom: 2rem;
        }

        @media (min-width: 768px){
            flex-wrap: nowrap;
            justify-content: space-between;

            div:first-child {
                padding-bottom: 0;
            }
        }
    }
`
const CloseModalButton = styled(FaTimes)`
    cursor: pointer;
    position: absolute;
    top: 32px;
    right: 32px;
    width: 32px;
    height: 32px;
    padding: 0;
    z-index: 10;
    color: #fff;
`   
 export const Modal =  forwardRef(({ showModal, setShowModal, selectedEpisode, onClose }, ref) => {
    const modalRoot =  document.getElementById('modal-root')

    const animation = useSpring({
        config: {
            duration: 250
        },

        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(0%)` : `translateY(-100%)`
    })

    const keyPress = useCallback(e => {
        if(e.key === 'Escape' && showModal) {
            setShowModal(false)
        }
    }, [showModal, setShowModal])
    
    const SetModalContent = () => {
        const [items, loading] =  useFetch(process.env.REACT_APP_API_URL, process.env.REACT_APP_API_TOKEN )
        const episode = items[selectedEpisode]

        if(loading) {
            return <Loader/>
        } 

        if(selectedEpisode !== null) {
            return(
                <>
                    <header>
                        <h1>{episode.title}</h1>
                    </header>

                    <img width="200" src={episode.artwork_url} alt={episode.artwork_url}/>

                    
                    <div className="description" dangerouslySetInnerHTML={{ __html: episode.description }}></div>
                </>
            )
        }
    } 

    useEffect(() => {
        document.addEventListener('keydown', keyPress)

        return () => document.removeEventListener('keydown', keyPress)
    }, [keyPress])

    return createPortal (
        <>
        {showModal && (
            <Background ref={ref} onClick={onClose}>
                <animated.div style={animation}>
                    <ModalWrapper>
                        <ModalContent>
                            <SetModalContent/>
                        </ModalContent>

                        <CloseModalButton aria-label='Close modal' onClick={() => setShowModal(prev => !prev)}/>
                    </ModalWrapper>
                </animated.div>
            </Background>
        )}
        </>, modalRoot
    )
})