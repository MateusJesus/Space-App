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
    gap: 1.5em;
`

const Gallery = ({ ImageFilter, toggleFav, selectimgzoom, ImagesGallery }) => {
    return (
        <>
            <Tags ImageFilter={ImageFilter} />
            <Container>
                <GalleryContainer>
                    <Title>Navegue pela galeria</Title>
                    <GalleryContent>
                        {ImagesGallery
                            .map(image =>
                                <Images
                                    toggleFav={toggleFav}
                                    selectzoom={selectimgzoom}
                                    key={image.id}
                                    Image={image}
                                />
                            )
                        }
                    </GalleryContent>
                </GalleryContainer>
                <Popular ImagePath={ImagesGallery.map(image => image.path)} />
            </Container>
        </>
    )
}

export default Gallery