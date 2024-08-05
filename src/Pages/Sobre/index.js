import Usuario from '../../componentes/Usuario'
import './Sobre.css'

const Sobre = (props) => {

    const css = { backgroundColor: props.corPrimaria}

    return (
        <section className='componente' style={css}>
            <h3 style={{ borderColor: props.corSecundaria}}>{props.nome}</h3>
            <Usuario />
        </section>
    )
}

export default Sobre