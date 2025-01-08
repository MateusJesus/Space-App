import styled from "styled-components"
import Title from "../../Title"

const PopularContainer = styled.section`
    margin-left: 2em;
`

const PopularContent = styled.div`
    display: flex;
    align-items:center;
    flex-direction: column;
    gap: 1.5em;
    img{
        width: 212px;
        border-radius: 1em;
    }
`
const Botao = styled.button`
    background-color: transparent;
    color: #fff;
    border: 2px solid;
    border-color: #C98CF1;
    padding: 12px 20px;
    font-size: 20px;
    border-radius: 10px;
    cursor: pointer;
    width: 100%;
`;

const Popular = ({ ImagePath }) => {


    return (
        <>
            <PopularContainer>
                <Title $alin="center">Populares</Title>
                <PopularContent>
                    {ImagePath
                        .map(
                            (image, index) =>
                                index <= 4 ?
                                    <img key={index} src={image} />
                                    :
                                    ''
                        )
                    }
                    <Botao>Ver Mais</Botao>
                </PopularContent>
            </PopularContainer>
        </>
    )
}

export default Popular