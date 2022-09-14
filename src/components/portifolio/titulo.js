import { TituloStyled } from "./styles";

function Titulo(props) {
    const { children } = props;
    return (<TituloStyled size="20px">{children}</TituloStyled>);
}

export default Titulo;