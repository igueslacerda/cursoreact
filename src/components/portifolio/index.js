import { Card, CardActions, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';
import Container from '../container';
import Conteudo from './conteudo';
import Imagem from './imagem';
import Titulo from './titulo';

function Portifolio(props) {
    const { nome, descricao, rota,  imagem, temLinkInicio } = props;

    return(
        <Container>
          <Card>
            <CardContent>
              <Titulo>{nome}</Titulo>
              <Imagem imgSrc={imagem}/>
              <Conteudo>{descricao}</Conteudo>
            </CardContent>
            <CardActions>
              {rota && <Link to={rota}>Ir para outro portifolio.</Link>}
              {temLinkInicio === true && <Link to="/">Voltar para inicio</Link>}
            </CardActions>
          </Card>
          <hr/>
        </Container>
    );
}

export default Portifolio;