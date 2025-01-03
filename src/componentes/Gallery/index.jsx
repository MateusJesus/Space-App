import styled from "styled-components"
import Title from "../Title"
import Tags from "./Tags"
import Popular from "./Popular"
import Images from "./Images"

const Container = styled.div`
    display: flex;
`
const GalleryContainer = styled.section`
    flex-grow: 1;
`

const GalleryContent = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr; 
    gap: 1em;
`

const Gallery = ({ ImagesGallery }) => {
    return (
        <>
            <Tags />
            <Container>
                <GalleryContainer>
                    <Title>Navegue pela galeria</Title>
                    <GalleryContent>
                        {ImagesGallery.map(image => <Images key={image.id} Image={image} />)}
                    </GalleryContent>
                </GalleryContainer>
                <Popular />
            </Container>
        </>
    )
}

export default Gallery