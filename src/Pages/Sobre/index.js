import './Sobre.css'
import Usuario from '../../componentes/Usuario'

const Sobre = (props) => {

    const css = { backgroundColor: props.corPrimaria}

    return (
        <section className='componente' style={css}>
            <h3 style={{ borderColor: props.corSecundaria}}>Usuarios Cadastrados</h3>
            {props.usuarios.map( usuario => <Usuario nome={usuario.nome} email={usuario.email} cpf={usuario.cpf} telefone={usuario.telefone} />)}
        </section>
    )
}

export default Sobre