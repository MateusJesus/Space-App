import styled from "styled-components"
import Images from "../Gallery/Images"
import BotaoIcone from "../Gallery/Images/ButtonIcon"
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';

const Overlay = styled.div`
    background-color: rgba(0, 0 ,0 , 0.5);
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
`

const Dialog = styled.dialog`
    position: fixed;
    top: 0;
    bottom: 0;
    background-color: transparent;
    width: 50%;
    border: none;
    form {
        button {
            color: white;
            position: absolute;
            z-index: 1;
            top: 2em;
            right: 2em;
        }
    }
`

const ModalZoom = ({closed, imgzoom, toggleFav }) => {
    return (
        <>
            {imgzoom &&
                <>
                    <Overlay />
                    <Dialog open={!!imgzoom} onClose={closed}>
                        <Images toggleFav={toggleFav} key={imgzoom.id} Image={imgzoom} expanded={true} />
                        <form method="dialog">
                            <BotaoIcone formMethod="dialog">
                                <CloseFullscreenIcon />
                            </BotaoIcone>
                        </form>
                    </Dialog>
                </>
            }
        </>
    )
}

export default ModalZoom