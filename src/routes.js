import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Sobre from "./Pages/Sobre";

const AppRoustes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/Sobre" element={<Sobre />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoustes