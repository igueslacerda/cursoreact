import { Avatar } from "@mui/material";

export default function Imagem(props) {
    const { imgSrc } = props;

    return(
        <>{imgSrc && <Avatar src={imgSrc} alt=""/>}</>
    );
}