import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

import DependencyRelationshipForm from "./jobPositions/DependencyRelationshipForm";
import InternshipForm from "./jobPositions/InternshipForm";
import ModalInternshipForm from "./jobPositions/ModalInternshipForm";

import utnLogo from "../../assets/logo-utn.png";

import "./AddJobPosition.css";

const AddJobPosition = () => {
  const [emailReceiver, setEmailReceiver] = useState("");
  const [receptionPeriodFrom, setReceptionPeriodFrom] = useState("");
  const [receptionPeriodUntil, setReceptionPeriodUntil] = useState("");
  const [positionsToFill, setPositionsToFill] = useState("");
  const [typeSearch, setTypeSearch] = useState("");

  const errorsList = () => {
    const errorsList = [];
    if (
      !String(emailReceiver)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      errorsList.push({ message: "Ingrese un email válido" });
    }
    if (
      !(
        receptionPeriodFrom &&
        receptionPeriodUntil &&
        positionsToFill &&
        typeSearch
      )
    ) {
      errorsList.push({ message: "Los campos son oligatorios" });
    }
    return errorsList;
  };

  const dataValidation = (e) => {
    e.preventDefault();
    const errors = errorsList();
    if (errors.length !== 0) {
      errors.forEach((error) => {
        toast(error.message, {
          autoClose: 3000,
          hideProgressBar: false,
          type: "error",
          theme: "dark",
          position: toast.POSITION.TOP_LEFT,
        });
      });
    }
  };

  const inputHandler = (e) => {
    switch (e.target.id) {
      case "emailReceiver":
        setEmailReceiver(e.target.value);
        break;
      case "receptionPeriodFrom":
        setReceptionPeriodFrom(e.target.value);
        break;
      case "receptionPeriodUntil":
        setReceptionPeriodUntil(e.target.value);
        break;
      case "positionsToFill":
        setPositionsToFill(e.target.value);
        break;
      case "typeSearch":
        setTypeSearch(e.target.value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="divFormUniversity">
      <header></header>
      <ToastContainer className="mt-5" />
      <div className="form">
        <form className="pb-3 mt-3">
          <div className="title">
            <h2>Complete los datos de la oferta</h2>
          </div>
          <div className=" container " id="primary">
            <div className="row row-cols-3">
              <div className=" col form-field align-items-center">
                <label>E-mail receptor de los CVs</label>
                <br />
                <input
                  type="email"
                  name="emailReceiver"
                  id="emailReceiver"
                  className="form-control-sm"
                  value={emailReceiver}
                  placeholder="E-mail receptor de CVs"
                  onChange={inputHandler}
                />
              </div>
              <div className=" col form-field align-items-center">
                <label>Periodo recepcion de CVs desde:</label>
                <br />
                <input
                  type="date"
                  name="receptionPeriodFrom"
                  id="receptionPeriodFrom"
                  className="form-control-sm"
                  value={receptionPeriodFrom}
                  placeholder="Periodo desde"
                  onChange={inputHandler}
                />
              </div>
              <div className=" col form-field align-items-center">
                <label>Periodo recepcion de CVs hasta:</label>
                <br />
                <input
                  type="date"
                  name="receptionPeriodUntil"
                  id="receptionPeriodUntil"
                  className="form-control-sm"
                  value={receptionPeriodUntil}
                  placeholder="Periodo hasta"
                  onChange={inputHandler}
                />
              </div>
            </div>
          </div>
          <div className=" container " id="primary">
            <div className="row row-cols-3">
              <div className=" col form-field align-items-center">
                <label>Cantidad de Puestos a cubrir</label>
                <br />
                <input
                  type="number"
                  name="positionsToFill"
                  id="positionsToFill"
                  className="form-control-sm"
                  value={positionsToFill}
                  placeholder="Puestos a cubrir"
                  onChange={inputHandler}
                />
              </div>
              <div className=" col form-field align-items-center">
                <label>Tipo de Busqueda</label>
                <br />
                <select
                  id="typeSearch"
                  name="typeSearch"
                  className="form-control-sm"
                  value={typeSearch}
                  onChange={inputHandler}
                >
                  <option value="predeterminado">Predeterminado</option>
                  <option value="pasantia">Pasantia</option>
                  <option value="relacionDependencia">
                    En relacion de dependencia
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="col-md-12 text-center" id="buttonJob">
              <a
                onClick={dataValidation}
                className="btn"
                data-bs-toggle="modal"
                href="#exampleModalToggle"
                role="button"
              >
                Crear ofertas
              </a>
            </div>
          </div>
        </form>
      </div>
      {errorsList().length === 0 ? (
        <div>
          <InternshipForm /> <DependencyRelationshipForm />
        </div>
      ) : (
        <ModalInternshipForm />
      )}
      <footer className="footerCompanyHome">
        <div id="divFooter" className="container">
          <div id="divLeftRight" className="row justify-content-center">
            <div id="divLeft" className="col-4">
              <figure>
                <img src={utnLogo} alt="UTN Logo" className="logo" />
              </figure>
            </div>
            <div id="divRight" className="col-4">
              <div className="divUniversity">
                <p>FACULTAD REGIONAL ROSARIO</p>
              </div>
              <div className="divContact">
                <p> Localidad: Zeballos 1341 - Rosario</p>
              </div>
              <div className="divPhone">
                <p>Telefono: 0341-4481871</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AddJobPosition;
