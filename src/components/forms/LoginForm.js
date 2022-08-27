import { useState, useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import LoginContext from "../../context/LoginContext";
import "./Forms.css";
import utnLogo from "../../assets/logo-utn.png";

const LoginForm = ({
  loginSetup,
  h1Text,
  btnText,
  linkToText,
  linkTo,
  left,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { logged, setLogged } = useContext(LoginContext);

  const emailValidation = () => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const passwordValidation = () => {
    let passwordRegExp = /^[A-Za-z]\w{7,14}$/;
    return passwordRegExp.test(password);
  };

  const dataValidation = (e) => {
    e.preventDefault();
    if (emailValidation() && passwordValidation()) {
      if (loginSetup) {
        // Authenticate user API call
        setLogged(true);
      } else {
        // Create new user API call
      }
    } else {
      const validationMsg = document.getElementById("validation-message");
      validationMsg.style.display = "flex";
      setTimeout(() => {
        validationMsg.style.display = "none";
      }, 3000);
    }
  };

  const inputHandler = (e) => {
    switch (e.target.id) {
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      default:
        break;
    }
  };

  return (
    <>
      {logged && <Navigate replace to="/ofertas" />}
      {left ? (
        <div className="wrapper">
          <figure>
            <img src={utnLogo} alt="UTN Logo" className="main-logo" />
          </figure>
        </div>
      ) : (
        ""
      )}
      <div id="wrapper" className="wrapper wrapper-dark">
        <div className="text-center mt-4 name">{h1Text}</div>
        <form className="pb-3 mt-3">
          <div className="form-field d-flex align-items-center">
            <span className="far fa-user"></span>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              placeholder="Email"
              onChange={inputHandler}
            />
          </div>
          <div className="form-field d-flex align-items-center">
            <span className="fas fa-key"></span>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              placeholder="Contraseña"
              onChange={inputHandler}
            />
          </div>
          <div id="validation-message">
            <p>Ingrese datos válidos para continuar</p>
          </div>
          <button onClick={dataValidation} className="btn mt-3">
            {btnText}
          </button>
        </form>
        <div className="text-center fs-6">
          <Link to={linkTo}>{linkToText}</Link>
        </div>
      </div>
      {left ? (
        ""
      ) : (
        <div className="wrapper">
          <figure>
            <img src={utnLogo} alt="UTN Logo" className="main-logo" />
          </figure>
        </div>
      )}
    </>
  );
};

export default LoginForm;
