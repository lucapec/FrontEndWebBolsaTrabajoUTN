import React from "react";
import UserForm from "../components/forms/UserForm";

const Login = () => {
  return (
    <div className="div-wrapper">
      <UserForm loginSetup={true} h1Text="Iniciar sesión" btnText="Ingresar" linkToText="Aún no tengo cuenta" linkTo="/register" />
    </div>
  );
};

export default Login;
