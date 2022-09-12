import foto from './fotoPerfil.jpg';
import Portifolio from '../../components/portifolio';

function PortifolioIgues() {
  return (
    <Portifolio nome="Igues de Lacerda" 
                descricao="Sou desenvolvedor mobile e estou estudando React e Flutter. componentizado." 
                rota="/pernalonga" 
                imagem={foto} 
                temLinkInicio={true}/>
  );
}

export default PortifolioIgues;
