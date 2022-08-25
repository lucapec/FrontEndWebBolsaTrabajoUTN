import { useState, useContext, useMemo } from "react";
import { Link, Navigate } from "react-router-dom";
import ThemeContext from "../../context/ThemeContext";
import LoginContext from "../../context/LoginContext";
import "./Forms.css";

const LoginForm = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const { theme } = useContext(ThemeContext);
  const { logged, setLogged } = useContext(LoginContext);

  const styles = useMemo(() => {
    if (theme === "dark") {
      return {
        classes: "wrapper wrapper-dark",
      };
    } else {
      return {
        classes: "wrapper wrapper-light",
      };
    }
  }, [theme]);

  const userValidation = () => {
    return user !== "" && user.length >= 4;
  };

  const passwordValidation = () => {
    let passwordRegExp = /^[A-Za-z]\w{7,14}$/;
    return passwordRegExp.test(password);
  };

  const loginValidation = (e) => {
    e.preventDefault();
    if (userValidation() && passwordValidation()) {
      // window.location.href = "/contents";
      setLogged(true);
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
      case "userName":
        setUser(e.target.value);
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
      {logged && <Navigate replace to="/contents" />}
      <div id="wrapper" className={styles.classes}>
        <div className="text-center mt-4 name">Iniciar sesión</div>
        <form className="p-3 mt-3">
          <div className="form-field d-flex align-items-center">
            <span className="far fa-user"></span>
            <input
              type="text"
              name="userName"
              id="userName"
              value={user}
              placeholder="Usuario"
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
          <button onClick={loginValidation} className="btn mt-3">
            Ingresar
          </button>
        </form>
        <div className="text-center fs-6">
          <Link to="/register">Aún no tengo cuenta</Link>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
