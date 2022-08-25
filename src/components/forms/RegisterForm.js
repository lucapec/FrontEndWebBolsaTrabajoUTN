import React, { useState, useContext, useMemo } from "react";
import ThemeContext from "../../context/ThemeContext";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {theme} = useContext(ThemeContext);

  const styles = useMemo(() => {
    if (theme === "dark") {
      return {
        classes: "wrapper wrapper-dark"
      }
    } else {
      return {
        classes: "wrapper wrapper-light"
      }
    }
  }, [theme]);

  const inputHandler = (e) => {
    switch (e.target.id) {
      case "userName":
        setUser(e.target.value);
        break;
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

  const userValidation = () => {
    return user !== "" && user.length >= 4;
  };

  const emailValidation = () => {
    let emailRegExp =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegExp.test(email);
  };

  const passwordValidation = () => {
    let passwordRegExp = /^[A-Za-z]\w{7,14}$/;
    return passwordRegExp.test(password);
  };

  const registerValidation = (e) => {
    e.preventDefault();
    if (userValidation() && emailValidation() && passwordValidation()) {
      spinnerCall();
      postUser();
    } else {
      const validationMsg = document.getElementById("validation-message");
      validationMsg.style.display = "flex";
      setTimeout(() => {
        validationMsg.style.display = "none";
      }, 3000);
    }
  };

  const spinnerCall = () => {
    const signupButton = document.getElementById("signup-button");
    const spinner = document.getElementById("spinner");
    signupButton.style.display = "none";
    spinner.style.display = "block";
    setTimeout(() => {
      signupButton.style.display = "inline-block";
      spinner.style.display = "none";
    }, 2000);
  };

  const postUser = () => {
    
  };

  return (
    <div id="wrapper" className={styles.classes}>
      <div className="text-center mt-4 name">Registrarse</div>
      <form className="p-3 mt-3">
        <div className="form-field d-flex align-items-center">
          <span className="far fa-user"></span>
          <input
            type="text"
            name="userName"
            id="userName"
            placeholder="Usuario"
            value={user}
            onChange={inputHandler}
          />
        </div>
        <div className="form-field d-flex align-items-center">
          <span className="far fa-email"></span>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={inputHandler}
          />
        </div>
        <div className="form-field d-flex align-items-center">
          <span className="fas fa-key"></span>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Contraseña"
            value={password}
            onChange={inputHandler}
          />
        </div>
        <div id="validation-message">
          <p>Ingrese datos válidos para continuar</p>
        </div>
        <div className="spinner" id="spinner">
          <div className="bounce1"></div>
          <div className="bounce2"></div>
          <div className="bounce3"></div>
        </div>
        <button onClick={registerValidation} className="btn mt-3" id="signup-button">
          Registrarme
        </button>
      </form>
      <div className="text-center fs-6">
        <Link to="/login">Ya tengo cuenta</Link>
      </div>
    </div>
  );
};

export default RegisterForm;
