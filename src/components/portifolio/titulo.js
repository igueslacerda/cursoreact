import { TituloStyled } from "./styles";

function Titulo(props) {
    const { children } = props;
    return (<TituloStyled size="18px">{children}</TituloStyled>);
}

export default Titulo;