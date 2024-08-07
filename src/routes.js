import React, { useContext } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Sobre from "./Pages/Sobre";
import { UsuarioContext } from "./componentes/UsuariosContext";

const AppRoustes = () => {

    const times = [
        {
            nome: 'Usuarios Cadastrados',
            corPrimaria: '#D9F7E9',
            corSecundaria: '#57C278'
        }
    ];

    const { usuarios } = useContext(UsuarioContext);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route  
                 path="/Sobre"  
                 element={
                    times.map(time => (
                        <Sobre 
                            key={time.nome} 
                            nome={time.nome} 
                            corPrimaria={time.corPrimaria} 
                            corSecundaria={time.corSecundaria} 
                            usuarios={usuarios}
                        />
                    ))
                 }></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoustes