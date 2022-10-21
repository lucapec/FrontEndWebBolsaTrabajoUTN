import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import JobPositions from "./pages/student/JobPositions";
import CompanyJobPositions from "./pages/company/CompanyJobPositions"
import Profile from "./pages/student/Profile";
import StudentData from "./pages/student/StudentData";
import EnterpriseData from "./pages/EnterpriseData";
import CompanyProfile from "./pages/company/CompanyProfile";
import AdminDashboard from "./pages/admin/AdminDashboard";
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
          <Route path="/ofertas" element={<JobPositions />}></Route>
          <Route path="/ofertasEmpresa" element={<CompanyJobPositions />}></Route>
          <Route path="/perfil" element={<Profile />}></Route>
          <Route path="/datosAlumno" element={<StudentData />}></Route>
          <Route path="/empresaReg" element={<EnterpriseData />}></Route>
          <Route path="/perfilEmpresa" element={<CompanyProfile />}></Route>
          <Route path="/adminDashboard" element={<AdminDashboard />}></Route>
        </Routes>
      </UserContextProvider>
    </>
  );
};

export default App;
