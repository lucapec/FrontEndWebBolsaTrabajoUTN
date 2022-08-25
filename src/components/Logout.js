import React, { useContext } from "react";
import {Link} from "react-router-dom";
import LoginContext from "../context/LoginContext";

const Logout = () => {
  const { logged, setLogged } = useContext(LoginContext);
  return (
    <li className="nav-item">
      <Link className="nav-link" onClick={() => setLogged(!logged)} to="/login">
        Cerrar Sesion
      </Link>
    </li>
  );
};

export default Logout;
