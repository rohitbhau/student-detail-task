import React from "react";
import {BrowserRouter as Router,Route,Routes,} from "react-router-dom";
import "./App.css";
import Create from "./components/Create";
import Edit from "./components/Edit";
import Home from "./components/Home";
import Login from "./components/Login";

 
function App() {
   
    return (
       
        <div className="App">
            <h3 className="d-flex justify-content-center mt-5">CRUD App</h3> 
           <Router>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/Home" element={<Home/>} />
                    <Route path="/Create" element={<Create />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/Edit" element={<Edit />} />
                </Routes>
            </Router> 
        </div>
    );
}
 
export default App;