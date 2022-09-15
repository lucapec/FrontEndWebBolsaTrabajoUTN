import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Ofertas from "./pages/Ofertas";
import Perfil from "./pages/Perfil";
import { UserContextProvider } from "./context/UserContext";
import DataEnterprise1 from "./pages/enterpriseRegisterForms/DataEnterprise1";
import DataEnterprise2 from "./pages/enterpriseRegisterForms/DataEnterprise2";

const App = () => {
  return (
    <>
      <UserContextProvider>
        <Navbar />
        <Routes>
          <Route path="*" element={<Navigate replace to="/ingreso" />}></Route>
          <Route path="/ingreso" element={<Login />}></Route>
          <Route path="/registro" element={<Register />}></Route>
          <Route path="/ofertas" element={<Ofertas />}></Route>
          <Route path="/perfil" element={<Perfil />}></Route>
          <Route path="/empresaReg1" element={<DataEnterprise1 />}></Route>
          <Route path="/empresaReg2" element={<DataEnterprise2 />}></Route>
        </Routes>
      </UserContextProvider>
    </>
  );
};

export default App;
