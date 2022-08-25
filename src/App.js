import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Ofertas from "./pages/Ofertas";
import { LoginContextProvider } from "./context/LoginContext";

const App = () => {
  return (
    <>
      <LoginContextProvider>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<Navigate replace to="/login" />}
          ></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/ofertas" element={<Ofertas />}></Route>
        </Routes>
      </LoginContextProvider>
    </>
  );
};

export default App;
