import { useState } from "react";
import { Link } from "react-router-dom";
import "./Forms.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import utnLogo from "../../assets/logo-utn.png";

const RegisterForm = ({ h1Text, btnText, linkToText, linkTo, left }) => {
  const [isStudent, setIsStudent] = useState(true);
  const [legajo, setLegajo] = useState(null);
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const legajoValidation = () => {
    return typeof legajo === Number;
  }

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
    if (legajoValidation() && emailValidation() && passwordValidation()) {
      // Create new user API call
    } else {
      toast("Ingrese datos válidos!", {
        autoClose: 3000,
        hideProgressBar: false,
      });
    }
  };

  const inputHandler = (e) => {
    switch (e.target.id) {
      case "legajo":
        setLegajo(e.target.value);
        break;
      case "company":
        setCompany(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      case "typeUser":
        if (e.target.value === "alumno") {
          setIsStudent(true);
        } else {
          setIsStudent(false);
        }
        break;
      default:
        break;
    }
  };

  return (
    <>
      <ToastContainer />
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
          <div className="form-field d-flex align-items-center justify-content-center">
            <select id="typeUser" name="typeUser" select={isStudent} onChange={inputHandler}>
              <option value="alumno">Soy alumno</option>
              <option value="empresa">Soy empresa</option>
            </select>
          </div>
          <div className="form-field d-flex align-items-center">
            {isStudent ? (<input
              type="text"
              name="legajo"
              id="legajo"
              value={legajo}
              placeholder="Legajo"
              onChange={inputHandler}
            />) : (<input
              type="text"
              name="company"
              id="company"
              value={company}
              placeholder="Razon Social"
              onChange={inputHandler}
            />)}
          </div>
          <div className="form-field d-flex align-items-center">
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

export default RegisterForm;
