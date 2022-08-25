import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { ThemeContextProvider } from "./context/ThemeContext";
import { LoginContextProvider } from "./context/LoginContext";
import { DataContextProvider } from "./context/DataContext";

const App = () => {
  return (
    <>
      <ThemeContextProvider>
        <LoginContextProvider>
          <DataContextProvider>
            <Navbar />
            <div className="container">
              <Routes>
                <Route
                  path="/"
                  element={<Navigate replace to="/login" />}
                ></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/register" element={<Register />}></Route>
              </Routes>
            </div>
          </DataContextProvider>
        </LoginContextProvider>
      </ThemeContextProvider>
    </>
  );
};

export default App;
