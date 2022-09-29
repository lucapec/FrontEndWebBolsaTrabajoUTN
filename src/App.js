import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Offers from "./pages/Offers";
import Profile from "./pages/Profile";
import StudentData from "./pages/StudentData";
import EnterpriseData from "./pages/EnterpriseData";
import CompanyProfile from "./pages/company/CompanyProfile";
import { UserContextProvider } from "./context/UserContext";

const App = () => {
  return (
    <>
      <UserContextProvider>
        <Navbar />
        <Routes>
          <Route path="*" element={<Navigate replace to="/ingreso" />}></Route>
          <Route path="/ingreso" element={<Login />}></Route>
          <Route path="/registro" element={<Register />}></Route>
          <Route path="/ofertas" element={<Offers />}></Route>
          <Route path="/perfil" element={<Profile />}></Route>
          <Route path="/datosAlumno" element={<StudentData />}></Route>
          <Route path="/empresaReg" element={<EnterpriseData />}></Route>
          <Route path="/perfilEmpresa" element={<CompanyProfile />}></Route>
        </Routes>
      </UserContextProvider>
    </>
  );
};

export default App;
