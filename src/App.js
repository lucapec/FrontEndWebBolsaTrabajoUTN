import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Ofertas from "./pages/Ofertas";
import Perfil from "./pages/Perfil";
import { LoginContextProvider } from "./context/LoginContext";

const App = () => {
  return (
    <>
      <LoginContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate replace to="/ingreso" />}></Route>
          <Route path="/ingreso" element={<Login />}></Route>
          <Route path="/registro" element={<Register />}></Route>
          <Route path="/ofertas" element={<Ofertas />}></Route>
          <Route path="/perfil" element={<Perfil />}></Route>
        </Routes>
      </LoginContextProvider>
    </>
  );
};

export default App;
