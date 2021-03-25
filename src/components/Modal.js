import React, {forwardRef, useCallback, useState, useEffect} from 'react'
import {createPortal} from 'react-dom'
import {useSpring, animated} from 'react-spring'
import styled from 'styled-components'
import {FaTimes, FaInstagram, FaFacebookF, FaSpotify, FaSoundcloud } from 'react-icons/fa'

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;    
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .8);
    z-index: 10;
`
const ModalWrapper = styled.div`
    position: relative;
    z-index: 20;
    display: flex;
    align-items: center;
    width: 800px;
    height: 550px;
    box-shadow: 0 5px 16px rgba(0, 0, 0, .2);
    border-radius: 10px;
    background-color: rgba(0, 0, 0, .9);
    color: #000;
`
const ModalContent =  styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.8;
    font-family: 'Rubik Light', sans-serif;
    color: #fff;
    padding: 4rem;


    img {
        margin-bottom: 2rem;
    }

    p {
        margin-bottom: 2rem;
    }


    h2 {
        margin-bottom: 0.5rem;
        font-size: 1rem;
    }

    a {
        margin-right: 1rem;
    }

    footer {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }
`
const CloseModalButton = styled(FaTimes)`
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

 export const Modal =  forwardRef(({showModal, setShowModal, selectedEpisode,onClose}, ref) => {
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

    const useFetch = url => {
        const [state, setState] =  useState({
            items: [],
            loading: true
        });
    
        useEffect(() => {
            const fetchData = async () => {
                const response =  await fetch(url);
                const data =  await response.json();
    
                if(response.ok) {
                    setState({
                        items: data,
                        loading: false,
                    })
                } else {
                    alert(JSON.stringify(data))
                    setState(s => ({...s, loading: false}))
                }
            }
            fetchData();
        })
    
    
        return [
            state.items,
            state.loading
        ];
    }
    
    const SetModalContent = () => {
        const [items, loading] =  useFetch('https://next.json-generator.com/api/json/get/VkwZJaYQ9')
        const episode = items[selectedEpisode]

        if(loading) {
            return <p>Loading ...</p>
        } 

        if(selectedEpisode !== null) {
            return(
                <>
                    <header>
                        <h1>{episode.title}</h1>
                    </header>

                    <img width="200" style={{borderRadius: '50%', border: '1px dotted #fff'}} src={episode.photo} alt={episode.photo_alt}/>

                    <p>
                        {episode.description}
                    </p>

                    <footer>
                        <div>
                            <h2>{episode.socials.title}</h2>

                            <a href={episode.socials.instagram} target="_blank" rel="noopener noreferrer">
                                <FaInstagram style={{color: '#fff', fontSize: '1.25rem'}}/>
                            </a>

                            <a href={episode.socials.facebook} target="_blank" rel="noopener noreferrer" >
                                <FaFacebookF style={{color: '#fff',fontSize: '1.25rem'}}/>
                            </a>
                        </div>

                        <div>
                            <h2>{episode.podcast_links.title}</h2>

                            <a href={episode.podcast_links.spotify} target="_blank" rel="noopener noreferrer">
                                <FaSpotify style={{color: '#fff', fontSize: '1.25rem'}}/>
                            </a>

                            <a href={episode.podcast_links.soundcloud} target="_blank" rel="noopener noreferrer">
                                <FaSoundcloud style={{color: '#fff', fontSize: '1.225rem'}}/>
                            </a>
                        </div>
                    </footer>
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