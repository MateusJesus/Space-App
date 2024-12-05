import styled from "styled-components"
import GlobalStyles from "./componentes/GlobalStyles"
import Header from "./componentes/Header"
import Sidebar from "./componentes/Sidebar"
import Banner from "./componentes/Banner"
import BannerBG from '/assets/Banner.png'

const Gradient = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width:100%;
  min-height:100vh;
`
const Container = styled.div`
  display:flex;
  margin-inline: auto;
  gap: 2em;
`

function App() {

  return (
    <Gradient>
      <GlobalStyles />
      <Header />
      <Container>
        <Sidebar />
        <Banner
          backgroundImage={BannerBG}
          texto='A galeria mais completa de fotos do espaço!'
        />
      </Container>
    </Gradient>
  )
}

export default App
