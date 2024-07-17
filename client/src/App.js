import React from "react";
import logo from './logo.svg';
import './App.css';
import Landing from "./components/views/Landing";
import Home from "./components/views/Home";
import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {


  
  return (
<BrowserRouter>
<div className="App">
<Routes>
   <Route path="/" exact element={<Landing></Landing>}></Route>    
   <Route path="/home" exact element={<Home></Home>}></Route>    
  
  </Routes>
    </div>
</BrowserRouter>
  );
}

export default App;
