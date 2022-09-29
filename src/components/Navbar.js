import { useContext } from "react";
import UserContext from "../context/UserContext";
import { Link } from "react-router-dom";
import Logout from "./Logout";
import "./Navbar.css";
import utnLogo from "../assets/white-utn-logo.png";

const Navbar = () => {
  const { jwt } = useContext(UserContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="navbar-brand">
          Bolsa de Trabajo
          <img src={utnLogo} alt="UTN Logo" className="navbar-logo" />
        </div>
        <div className="" id="navbarNav">
          <ul className="navbar-nav">
            {jwt ? (
              <li className="nav-item">
                <Link className="nav-link" to="/ofertas">
                  Ofertas
                </Link>
              </li>
            ) : (
              <li className="nav-item">
                <Link className="nav-link" to="/ingreso">
                  Ingresar
                </Link>
              </li>
            )}
            {jwt ? (
              <li className="nav-item">
                <Link className="nav-link" to="/perfil">
                  Perfil
                </Link>
              </li>
            ) : (
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/registro">
                  Registrarse
                </Link>
              </li>
            )}
            {jwt ? <Logout /> : ""}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
