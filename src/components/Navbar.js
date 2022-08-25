import { useContext, useMemo } from "react";
import ThemeContext from "../context/ThemeContext";
import LoginContext from "../context/LoginContext";
import { Link } from "react-router-dom";
import ChangeTheme from "./ChangeTheme";
import Logout from "./Logout";

const Navbar = () => {
  const { theme } = useContext(ThemeContext);
  const { logged } = useContext(LoginContext);

  const styles = useMemo(() => {
    if (theme === "dark") {
      return {
        classes: "navbar navbar-expand-lg navbar-dark bg-dark",
        object: {},
      };
    } else {
      return {
        classes: "navbar navbar-expand-lg navbar-light bg-light",
        object: {},
      };
    }
  }, [theme]);

  return (
    <nav className={styles.classes}>
      <div className="container-fluid">
        <div className="navbar-brand">Bolsa de Trabajo</div>
        <div className="" id="navbarNav">
          <ul className="navbar-nav">
            {logged ? (
              <li className="nav-item">
                <Link className="nav-link" to="/contents/popular">
                  Contenidos populares
                </Link>
              </li>
            ) : (
              ""
            )}
            {logged ? (
              <li className="nav-item">
                <Link className="nav-link" to="/contents/add">
                  Agregar contenido
                </Link>
              </li>
            ) : (
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Ingresar
                </Link>
              </li>
            )}
            {logged ? (
              <li className="nav-item">
                <Link className="nav-link" to="/contents">
                  Tus contenidos
                </Link>
              </li>
            ) : (
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/register">
                  Registrarse
                </Link>
              </li>
            )}
            {logged ? <Logout /> : ""}
            <li className="nav-link">
              <ChangeTheme />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
