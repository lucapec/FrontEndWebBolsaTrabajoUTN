import { useState, useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import UserContext from "../../context/UserContext";
import "./Forms.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import utnLogo from "../../assets/logo-utn.png";

const LoginForm = ({
  h1Text,
  btnText,
  linkToText,
  linkTo,
  left,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser } = useContext(UserContext);

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
      // Authenticate user API call
      if (true) { // In case the API call is successful set the user data in the Context
        setUser({});
      }
    } else {
      toast("Ingrese datos válidos!", {
        autoClose: 3000,
        hideProgressBar: false,
      });
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
      <ToastContainer />
      {user?.activated && <Navigate replace to="/ofertas" />}
      {user && !user.activated && <Navigate replace to="/perfil" />}
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
