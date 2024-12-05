import styled from "styled-components"
import GlobalStyles from "./componentes/GlobalStyles"
import Header from "./componentes/Header"

const Gradient = styled.div`

background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
width:100%;
min-height:100vh

`

function App() {

  return (
    <Gradient>
      <GlobalStyles/>
      <Header/>
    </Gradient>
  )
}

export default App
