import foto from './foto.png';
import Portifolio from '../../components/portifolio';

function PortifolioPernalonga() {
  return (
    <Portifolio nome="José Pernalonga"
                descricao="Sou um meme, sobre referências de ideologias políticas." 
                rota="/igues" 
                imagem={foto} 
                temLinkInicio={true}/>
  );
}

export default PortifolioPernalonga;
