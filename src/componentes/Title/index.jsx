import styled from "styled-components";

const Title = styled.h2`
    text-transform:uppercase;
    text-align: ${props => props.$alin ? props.$alin : 'left'};
    color: #7B78E5;
    font-size:32px;
    margin:0 0 1em 0;
`

export default Title