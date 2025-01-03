import styled from "styled-components"
import GlobalStyles from "./componentes/GlobalStyles"
import Header from "./componentes/Header"
import Sidebar from "./componentes/Sidebar"
import Banner from "./componentes/Banner"
import BannerBG from '/assets/Banner.png'
import Gallery from "./componentes/Gallery"
import Images from "./fotos.json"
import { useState } from "react"

const Gradient = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width:100%;
  min-height:100vh;
`
const Container = styled.div`
  width: 100%;
  max-width: 1420px;
  margin: 0 auto;
`

const MainContainer = styled.div`
  display:flex;
  gap: 3em;
`

const GalleryContainer = styled.div`
  display:flex;
  flex-direction: column;
  flex-grow: 1;
`

function App() {

 const [ImagesGallery, setImagesGallery] = useState(Images)

  return (
    <Gradient>
      <GlobalStyles />
      <Container>
        <Header />
        <MainContainer>
          <Sidebar />
          <GalleryContainer>
            <Banner
              backgroundImage={BannerBG}
              texto='A galeria mais completa de fotos do espaço!'
            />
            <Gallery ImagesGallery={ImagesGallery}/>
          </GalleryContainer>
        </MainContainer>
      </Container>
    </Gradient>
  )
}

export default App
