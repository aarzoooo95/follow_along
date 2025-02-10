import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {LogInPage} from "./routes/routes.js"

import ".App.css"
function App(){
    return(
        <BrowserRouter>
        <Routes>
        <Route path="/login" element={<LogInPage/>} />

        </Routes>
        
        </BrowserRouter>
    )
}
export default App;
