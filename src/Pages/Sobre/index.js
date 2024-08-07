import './Sobre.css'

const Sobre = (props) => {

    const css = { backgroundColor: props.corPrimaria}

    return (
        <section className='componente' style={css}>
            <h3 style={{ borderColor: props.corSecundaria}}>Usuarios Cadastrados</h3>
        </section>
    )
}

export default Sobre