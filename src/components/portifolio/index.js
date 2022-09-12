import { Link } from 'react-router-dom';
import Container from '../container';
import Conteudo from './conteudo';
import Imagem from './imagem';

function Portifolio(props) {
    const { nome, descricao, rota,  imagem, temLinkInicio } = props;

    return(
        <Container>
          <h1>{nome}</h1>
          <Imagem imgSrc={imagem}/>
          <Conteudo>{descricao}</Conteudo>
          {rota && <Link to={rota}>Ir para outro portifolio.</Link>}
          {temLinkInicio === true && <Link to="/">Voltar para inicio</Link>}
          <hr/>
        </Container>
    );
}

export default Portifolio;