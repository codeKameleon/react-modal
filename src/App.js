import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import GlobalFonts from './fonts/fonts';
import { GlobalStyle } from './globalStyles';
import { useFetch } from './calls/useFetch';
import { Loader } from './components/Loader';
import { Modal } from './components/Modal';

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
  }

  const closeModal = e => {
      if(modalRef.current === e.target) {
          setShowModal(false)
      }
  }

  const EpisodeThumb = () => {
    const [items, loading] =  useFetch('https://next.json-generator.com/api/json/get/VkwZJaYQ9')

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
                <img src={item.thumb_link} alt={`Vignette Boarderless Podcast ${item.title}`}/>
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

      <Container>
        <EpisodeThumb />

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
