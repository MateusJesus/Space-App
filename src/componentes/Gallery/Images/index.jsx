import styled from "styled-components"
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import ButtonIcon from "./ButtonIcon";

const ImageContent = styled.figure`
    background-color: #001634;
    border-radius: 1em;
    margin:0;
`

const ImageRef = styled.img`
    width:100%;
    border-radius: 1em 1em 0 0;
`

const ImageInfo = styled.figcaption`
    color: #fff;
    padding: 1em;
    h3{
        margin: 0px;
        font-size: 18px;
        margin-bottom: .2em;
    }
`

const ImageFooter = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    span{
        color: #cacaca;
    }
    button{
        background-color: transparent;
        border: none;
        color: white;
    }
`

const Buttons = styled.div`
    display: flex;
    align-items: center;
`

const Images = ({toggleFav, selectzoom, Image, expanded = false }) => {
    return (
        <ImageContent>
            <ImageRef src={Image.path} alt={`Imagem de ${Image.titulo}`} />
            <ImageInfo>
                <h3>{Image.titulo}</h3>
                <ImageFooter>
                    <span>{Image.fonte}</span>
                    <Buttons>
                        <ButtonIcon onClick={() => toggleFav(Image)}>
                                {Image.fav ? <FavoriteIcon /> : <FavoriteBorderIcon /> }
                        </ButtonIcon>
                        {!expanded &&
                            <ButtonIcon onClick={() => selectzoom(Image)}>
                                    <OpenInFullIcon />
                            </ButtonIcon>}
                    </Buttons>
                </ImageFooter>
            </ImageInfo>
        </ImageContent>
    )
}

export default Images