import styled from "styled-components"
import GlobalStyles from "./componentes/GlobalStyles"
import Header from "./componentes/Header"
import Sidebar from "./componentes/Sidebar"
import Banner from "./componentes/Banner"
import BannerBG from '/assets/Banner.png'
import Gallery from "./componentes/Gallery"
import Images from "./fotos.json"
import { useState } from "react"
import ModalZoom from "./componentes/ModalZoom"

const Gradient = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width:100%;
  min-height:100vh;
`
const Container = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`

const MainContainer = styled.div`
  display:flex;
  padding: 0 1em 3em 1em;
  gap: 3em;
`

const GalleryContainer = styled.div`
  display:flex;
  flex-direction: column;
  flex-grow: 1;
`

function App() {

  const [ImagesGallery, setImagesGallery] = useState(Images)
  const [ImagesGalleryFilter, setImagesGalleryFilter] = useState(ImagesGallery)
  const [ImageZoom, setImageZoom] = useState(null)

  const toggleFav = (ImageFav) => {
    if (ImageFav.id === ImageZoom?.id) {
      setImageZoom({
        ...ImageZoom,
        fav: !ImageZoom.fav
      })
    }

    setImagesGalleryFilter(ImagesGalleryFilter.map(ImagesGalleryFav => {
      return {
        ...ImagesGalleryFav,
        fav: ImagesGalleryFav.id === ImageFav.id ? !ImageFav.fav : ImagesGalleryFav.fav,
      }
    }));
  }

  const ImageFilter = (Filter) => {
    setImagesGalleryFilter(ImagesGallery.filter(filter => Filter === 0 ? ImagesGallery : filter.tagId === Filter))
  }

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
            <Gallery
              toggleFav={toggleFav}
              selectimgzoom={imgsel => setImageZoom(imgsel)}
              ImagesGallery={ImagesGalleryFilter}
              ImageFilter={ImageFilter}
            />
          </GalleryContainer>
        </MainContainer>
      </Container>
      <ModalZoom
        imgzoom={ImageZoom}
        toggleFav={toggleFav}
        closed={() => setImageZoom(null)}
      />
    </Gradient>
  )
}

export default App
