import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import JobPositions from "./pages/student/JobPositions";
import AddJobPosition from "./pages/company/AddJobPosition"
import Profile from "./pages/student/Profile";
import StudentData from "./pages/student/StudentData";
import CompanyData from "./pages/CompanyData";
import CompanyProfile from "./pages/company/CompanyProfile";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ReplaceRoute from "./hooks/ReplaceRoute";
import {UserContextProvider} from "./context/UserContext";

import "./App.css";



const App = () => {
  return (
    <>
      <UserContextProvider>
        <Navbar />
        <Routes>
          <Route path="/ingreso" element={<Login />}></Route>
          <Route path="/registro" element={<Register />}></Route>
          <Route path="/ofertas" element={<JobPositions />}></Route>
          <Route path="/crearOferta" element={<AddJobPosition />}></Route>
          <Route path="/datosAlumno" element={<StudentData />}></Route>
          <Route path="/datosEmpresa" element={<CompanyData />}></Route>
          <Route path="/perfil" element={<Profile />}></Route>
          <Route path="/perfilEmpresa" element={<CompanyProfile />}></Route>
          <Route path="/adminDashboard" element={<AdminDashboard />}></Route>
          <Route path="*" element={<ReplaceRoute />}></Route>

        </Routes>
      </UserContextProvider>
    </>
  );
};

export default App;
