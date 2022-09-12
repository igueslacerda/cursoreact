import Portifolio from "../components/portifolio";

function Home() {
    const listaPortifolios = [
        {
            nome: 'Igues de Lacerda',
            descricao: 'O link abaixo irá direcionar para o portifolio do Igues',
            rota: '/igues'
        },
        {
            nome: 'Jose Pernalonga',
            descricao: 'O link abaixo irá direcionar para o portifolio do Pernalonga',
            rota: '/pernalonga'
        },
        {
            nome: 'Mauricio Portifolio',
            descricao: 'Apenas um teste de repetição e condicional.',
            rota: ''
        },
    ];

    return (
        <div className="container">
            {listaPortifolios.map(port => <Portifolio nome={port.nome} descricao={port.descricao} rota={port.rota}/>)}
        </div>
    );
}

export default Home;