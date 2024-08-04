import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto/CampoTexto'
import Login from '../Login'
import './Formulario.css'


const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [cpf, setCpf] = useState('')
    const [telefone, setTelefone] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoUsuarioCadastrado({
            nome,
            email,
            cpf,
            telefone
        })
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Trabalhe Conosco</h2>
                <p>Contamos com você para fazer parte da maior equipe de tecnologia do alto vale do Itajaí</p>
                <CampoTexto 
                 obrigatorio={true} 
                 label="Nome Completo" 
                 valor={nome}
                 aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto
                 obrigatorio={true}
                 label="E-mail" 
                 valor={email}
                 aoAlterado={valor => setEmail(valor)}
                 />
                <CampoTexto
                 obrigatorio={true} 
                 label="CPF" 
                 valor={cpf}
                 aoAlterado={valor => setCpf(valor)}
                 />
                <CampoTexto
                 obrigatorio={true} 
                 label="Telefone" 
                 valor={telefone}
                 aoAlterado={valor => setTelefone(valor)}
                 />
                <div className='botoes'>
                    <Botao texto="Cadastrar" />
                    <Login />
                </div>
            </form>
        </section>
    )

}

export default Formulario