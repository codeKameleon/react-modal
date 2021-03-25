import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import GlobalFonts from './fonts/fonts';
import { GlobalStyle } from './globalStyles';
import { Modal } from './components/Modal';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const Thumb = styled.figure`
  position: relative;
  z-index: 1;
  padding: 2rem;
  font-family: 'Rubik Light', sans-serif;
  cursor: pointer;

  img {
    width: 300px;
  }

  figcaption {
      h2 {
        position: relative;

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
      }
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

  const useFetch = url => {
    const [state, setState] =  useState({
        items: [],
        loading: true
    });

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(url);
            const data = await response.json();

            if(response.ok) {
                setState({
                    items: data,
                    loading: false
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

  const EpisodeThumb = () => {
    const [items, loading] =  useFetch('https://next.json-generator.com/api/json/get/VkwZJaYQ9')

    if(loading) {
        return <p>Loading ...</p>
    } 

    return (
      <>
        {items.map((item, i) => {
          return (
            <Thumb key={item.id} onClick={() => openModal(i)}>
              <img src={item.thumb_link} alt={`Vignette Boarderless Podcast ${item.title}`}/>

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
