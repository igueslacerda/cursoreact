import { Button, Card, CardActions, CardContent } from '@mui/material';
import Container from '../container';
import Conteudo from './conteudo';
import Imagem from './imagem';
import Titulo from './titulo';

function Portifolio(props) {
    const { nome, descricao, rota,  imagem, temLinkInicio } = props;

    return(
        <Container>
        <hr/>
          <Card>
            <CardContent>
              <Titulo>{nome}</Titulo>
              <Imagem imgSrc={imagem}/>
              <Conteudo>{descricao}</Conteudo>
            </CardContent>
            <CardActions>              
              {rota && <Button variant='contained' href={rota}>Ir para portifolio</Button>}
              {temLinkInicio === true && <Button variant='text' href='/'>Voltar para inicio</Button>}
            </CardActions>
          </Card>
        </Container>
    );
}

export default Portifolio;