import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import {SingUpPage} from "./routes/Routes";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<LoginPage/>}/>
                <Route path='/sing-up' element={<SingUpPage/>}/>
            </Routes>
        </BrowserRouter>
    )
};

export default App;