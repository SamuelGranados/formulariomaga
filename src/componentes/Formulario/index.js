import CampoTexto from '../CampoTexto/CampoTexto'
import './Formulario.css'

const Formulario = () => {
    return (
        <section className='formulario'>
            <form>
                <h2>Trabalhe Conosco</h2>
                <p>Contamos com você para fazer parte da maior equipe de tecnologia do alto vale do Itajaí</p>
                <CampoTexto label="Nome Completo"/>
                <CampoTexto label="E-mail"/>
                <CampoTexto label="CPF"/>
                <CampoTexto label="Telefone"/>
            </form>
        </section>
    )

}

export default Formulario