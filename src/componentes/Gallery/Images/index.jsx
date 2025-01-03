import styled from "styled-components"

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
`

const Images = ({ Image }) => {
    return (
        <ImageContent>
            <ImageRef src={Image.path} alt={`Imagem de ${Image.titulo}`} />
            <ImageInfo>
                <h3>{Image.titulo}</h3>
                <ImageFooter>
                    <span>{Image.fonte}</span>
                    <div>
                        <button>curtir</button>
                        <button>expandir</button>
                    </div>
                </ImageFooter>
            </ImageInfo>
        </ImageContent>
    )
}

export default Images