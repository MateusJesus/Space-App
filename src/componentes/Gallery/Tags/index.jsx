import styled from "styled-components"
import TagsJson from "./tags.json"

const ContainerTags = styled.div`
    margin: 3em 0;
    display: flex;
    align-items: center;
    gap: 1em;
    p{
        font-size: 24px;
        color: #D9D9D9;
        margin-right: 2em;
        margin: 0;
    }
    button{
        font-size: 24px;
        color: #fff;
        padding: .5em;
        background-color: #D9D9D94D;
        border-radius: .5em;
        border: 1px solid transparent;
        box-sizing: border-box;
    }
    button:hover {
        border-color: #C98CF1;
    }
`

const Tags = () => {
    return (
        <ContainerTags>
            <p>Busque por tags:</p>
            {TagsJson.map(tag => <button onClick={action => console.log(tag.titulo)} key={tag.id}>{tag.titulo}</button>)}
        </ContainerTags>
    )
}

export default Tags