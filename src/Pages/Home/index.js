import ImgPrincipal from '../../componentes/ImgPrincipal'
import Formulario from '../../componentes/Formulario'
import { useState } from 'react'

const Home = () => {

    const [usuarios, setUsuarios] = useState([])

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