import { Typography } from "@mui/material";

function Conteudo(props) {
    const { children } = props;
    return(
        <Typography variant="body2" display="block" gutterBottom>{children}</Typography>
    );    
}

export default Conteudo;