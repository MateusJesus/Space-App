import { styled } from "styled-components"
import Input from "../Input"

const HeaderStyled = styled.header`
    padding: 60px 1em;
    display: flex;
    justify-content: space-between;
    img {
        max-width: 212px;
    }
`

const Header = ({ setFiltro }) => {
    return (
        <HeaderStyled>
            <img
                src="/assets/logo.png"
                alt="logo Space App"
            />
            <Input
                type='text'
                setFiltro={setFiltro}
                placeholder='O que você procura?'
            />
        </HeaderStyled>
    )
}

export default Header