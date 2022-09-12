function Imagem(props) {
    const { imgSrc } = props;

    return(
        <>{imgSrc && <img src={imgSrc} alt="" style={{ height: 200 }}/>}</>
    );
}

export default Imagem;