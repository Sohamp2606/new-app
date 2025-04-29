import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Ticket from "./pages/Ticket";
import InputForm from "./pages/InputForm";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element ={<Home />} />
        <Route path="ticket" element ={<Ticket />} />
        <Route path="inputform" element ={<InputForm />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
