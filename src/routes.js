import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Sobre from "./Pages/Sobre";

const AppRoustes = () => {

    const times = [
        {
            nome: 'Usuarios Cadastrados',
            corPrimaria: '#D9F7E9',
            corSecundaria: '#57C278'
        }
    ]

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route 
                 path="/Sobre" 
                 element={
                    times.map( time => <Sobre 
                     key={time.nome} 
                     nome={time.nome} 
                     corPrimaria={time.corPrimaria} 
                     corSecundaria={time.corSecundaria} 
                     />)}>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoustes