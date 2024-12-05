import styled from "styled-components"
import LiNav from "./LiNav"

const UlStyled = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`

const Sidebar = () => {
    return (
        <aside>
            <nav>
                <UlStyled>
                    <LiNav
                        ativo={true}
                        iconAc='/icons/home-ativo.png'
                        iconIn='/icons/home-inativo.png'
                    >
                        Home
                    </LiNav>
                    <LiNav
                        iconAc='/icons/mais-vistas-ativo.png'
                        iconIn='/icons/mais-vistas-inativo.png'
                    >
                        Mais vistas
                    </LiNav>
                    <LiNav
                        iconAc='/icons/mais-curtidas-ativo.png'
                        iconIn='/icons/mais-curtidas-inativo.png'
                    >
                        Mais curtidas
                    </LiNav>
                    <LiNav
                        iconAc='/icons/novas-ativo.png'
                        iconIn='/icons/novas-inativo.png'
                    >
                        Novas
                    </LiNav>
                    <LiNav
                        iconAc='/icons/surpreenda-me-ativo.png'
                        iconIn='/icons/surpreenda-me-inativo.png'
                    >
                        Surpreenda-me
                    </LiNav>
                </UlStyled>
            </nav>
        </aside>
    )
}

export default Sidebar