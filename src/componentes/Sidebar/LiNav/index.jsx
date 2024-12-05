import styled from "styled-components"

const LiStyled = styled.li`    
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 30px;
    cursor: pointer;
    color: ${props => props.$ativo ? '#7B78E5' : '#D9D9D9'};
    font-family: ${props => props.$ativo ? 'GandhiSansBold' : 'GandhiSansRegular'};
    display: flex;
    align-items: center;
    gap: 22px;
`

const LiNav = ({ children, iconAc, iconIn, ativo = false }) => {
    return (
        <LiStyled $ativo={ativo}>
            <img src={ativo ? iconAc : iconIn} alt="" />
            {children}
        </LiStyled>
    )
}

export default LiNav