import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import GlobalFonts from './fonts/fonts';
import { GlobalStyle } from './globalStyles';
import { useFetch } from './calls/useFetch';
import { Loader } from './components/Loader';
import { Modal } from './components/Modal';

// Style
const MainTitle = styled.h1 `
  margin: 2rem 0;
  padding: 0 2rem;
  text-align: center;
  font-size: 2.5rem
`
const Presentation = styled.p`
  background-color: #FBB117; 
  padding: 2rem;
  margin: 0 2rem;
  line-height: 1.25;

  @media (min-width: 768px){
    max-width: 600px;
    margin: 2.5rem auto;
    padding: 3rem;
  }

  strong {
    font-size: 1.25rem;
    font-style: italic;
  }
`
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-gap: 1em;
`
const Thumb = styled.figure`
  position: relative;
  z-index: 1;
  padding: 2rem;
  border: 4px solid #000;
  margin: 1.5rem;
  cursor: pointer;

  .img-wrapper {
    overflow: hidden;
    width: 100%;
    margin-bottom: 1rem;
    border: 4px solid #000;
    transition: border 400ms ease;
  }

  img {
    width: 100%;
    display:block;
    transition: transform 800ms ease;
  }

  figcaption {
      h2 {
        position: relative;
        transition: color 1s;

        &::after {
          content : '';
          position: absolute;
          bottom: -10px;
          left: 0;
          width: 100%;
          height: 4px;
          background-color: #000;
        }
      }

      h3 {
        margin-top: 0.85rem;
        transition: color 400ms ease;
      }
  }

  &:hover .img-wrapper {
    border-color: #FBB117;
  }

  &:hover img {
    transform: scale(1.45);
  }

  &:hover h2,
  &:hover h3 {
    color: #FBB117;
  }
`

function App() {
  const modalRef =  useRef(null);
  const [showModal, setShowModal] = useState(false)
  const [selectedEpisode, setSelectedEpisode] = useState(null)

  const openModal = i => {
    setShowModal(prev => !prev)
    setSelectedEpisode(selectedEpisode => i)

    document.body.style.overflow = 'hidden';
    
  }

  const closeModal = e => {
      if(modalRef.current === e.target) {
          setShowModal(false)
      }

      document.body.style.overflow = 'unset'
  }

  // Component
  const EpisodeThumbs = () => {
    const [items, loading] =  useFetch(process.env.REACT_APP_API_URL, process.env.REACT_APP_API_TOKEN)

    if(loading) {
        return (
          <Loader/>
        )
    } 

    return (
      <>
        {items.map((item, i) => {
          return (
            <Thumb key={item.id} onClick={() => openModal(i)}>
              <div className="img-wrapper">
                <img src={item.artwork_url} alt={`Vignette Boarderless Podcast ${item.title}`}/>
              </div>

              <figcaption>
                <h2>{item.title}</h2>
                <h3>{item.subtitle}</h3>
              </figcaption>
            </Thumb>
          )
      })}
    </>
  )
} 

  return (
    <>
      <GlobalFonts/>

      <GlobalStyle/>

      <MainTitle>Boarderless</MainTitle>

      <Presentation>
        <strong>Boarderless</strong>, c’est le podcast qui t’invite à découvrir la scène skate féminine à Bruxelles.
        Rencontres avec des meufs de la scène amateure avec qui on parle de leur rapport au skate,
        de l’évolution de la scène féminine à Bruxelles et de la mixité des genres dans la pratique.
      </Presentation>

      <Container>
        <EpisodeThumbs />

        <Modal 
          ref={modalRef} 
          showModal={showModal} 
          setShowModal={setShowModal} 
          selectedEpisode={selectedEpisode} 
          setSelectedEpisode={setSelectedEpisode}
          onClose={closeModal}/>
     </Container>
    </>
  );
}

export default App;
