import React, { useContext } from 'react';
import ImgPrincipal from '../../componentes/ImgPrincipal'
import Formulario from '../../componentes/Formulario'
import { UsuarioContext } from '../../componentes/UsuariosContext'

const Home = () => {

    const {usuarios, setUsuarios} = useContext(UsuarioContext);

    const aoNovoUsuarioAdicionado = (usuario) => {
        console.log(usuario)
        setUsuarios([...usuarios, usuario])
    }

    return (
        <div className="App container">
            <ImgPrincipal />
            <div>
             <Formulario aoUsuarioCadastrado={usuario => aoNovoUsuarioAdicionado(usuario)} />
            </div>
        </div>
    )
}

export default Home