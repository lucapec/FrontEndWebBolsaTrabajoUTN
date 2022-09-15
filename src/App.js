import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Ofertas from "./pages/Ofertas";
import Perfil from "./pages/Perfil";
import PersonalData from "./components/forms/PersonalData"
import UniversityData from "./components/forms/UniversityData"
import { UserContextProvider } from "./context/UserContext";

const App = () => {
  return (
    <>
      <UserContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate replace to="/ingreso" />}></Route>
          <Route path="/ingreso" element={<Login />}></Route>
          <Route path="/registro" element={<Register />}></Route>
          <Route path="/ofertas" element={<Ofertas />}></Route>
          <Route path="/perfil" element={<Perfil />}></Route>
          <Route path="/datosPersonales" element={<PersonalData/>}></Route>
          <Route path="/datosUniversitarios" element={<UniversityData />}></Route>
        </Routes>
      </UserContextProvider>
    </>
  );
};

export default App;
