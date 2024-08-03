import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";

const AppRoustes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoustes