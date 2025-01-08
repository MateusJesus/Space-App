import styled from "styled-components"
import GlobalStyles from "./componentes/GlobalStyles"
import Header from "./componentes/Header"
import Sidebar from "./componentes/Sidebar"
import Banner from "./componentes/Banner"
import BannerBG from '/assets/Banner.png'
import Gallery from "./componentes/Gallery"
import Images from "./fotos.json"
import { useEffect, useState } from "react"
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
  const [filtro, setFiltro] = useState('')
  const [Tag, setTag] = useState(0)
  const [ImageZoom, setImageZoom] = useState(null)

  useEffect(() => {
    const ImagesGalleryFiltradas = Images.filter(foto => {
      const filtroPorTag = !Tag || foto.tagId === Tag;
      const filtroPorTitulo = !filtro || foto.titulo.toLowerCase().includes(filtro.toLowerCase())
      return filtroPorTag && filtroPorTitulo
    })
    setImagesGallery(ImagesGalleryFiltradas)
  }, [Tag, filtro])

    console.log(filtro)
  const toggleFav = (ImageFav) => {
    if (ImageFav.id === ImageZoom?.id) {
      setImageZoom({
        ...ImageZoom,
        fav: !ImageZoom.fav
      })
    }

    setImagesGallery(ImagesGallery.map(ImagesGalleryFav => {
      return {
        ...ImagesGalleryFav,
        fav: ImagesGalleryFav.id === ImageFav.id ? !ImageFav.fav : ImagesGalleryFav.fav,
      }
    }));
  }


  return (
    <Gradient>
      <GlobalStyles />
      <Container>
        <Header
          filtro={filtro}
          setFiltro={setFiltro}
        />
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
              ImagesGallery={ImagesGallery}
              ImageFilter={setTag}
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
