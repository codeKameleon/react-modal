import {useState} from 'react';
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
  const [showModal, setShowModal] = useState(false)

  const openModal = () => {
    setShowModal(prev => !prev)

  }

  return (
    <>
      <GlobalFonts/>

      <GlobalStyle/>

      <Container>
       <Thumb onClick={openModal}>
         <img src="https://i.ibb.co/qrwDYv0/episode-1.jpg" target="_blank" alt="Vignette Boarderless Podcast Episode 1 avec Daniela"/>

         <figcaption>
           <h2>Episode 1</h2>
           <h3>Avec Daniela</h3>
         </figcaption>
       </Thumb>

       <Modal showModal={showModal} setShowModal={setShowModal}/>
     </Container>
    </>
  );
}

export default App;
