import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

import utnLogo from "../../assets/logo-utn.png";

import "./jobPositions/DependencyRelationshipForm.css";
import "./jobPositions/InternshipForm.css";
import "./CompanyHome.css";

const CompanyHome = () => {
  const [emailReceiver, setEmailReceiver] = useState("");
  const [receptionPeriodFrom, setReceptionPeriodFrom] = useState("");
  const [receptionPeriodUntil, setReceptionPeriodUntil] = useState("");
  const [positionsToFill, setPositionsToFill] = useState("");
  const [isInternship, setIsInternship] = useState(true);

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
        emailReceiver &&
        receptionPeriodFrom &&
        receptionPeriodUntil &&
        positionsToFill &&
        isInternship
      )
    ) {
      errorsList.push({ message: "Los campos son oligatorios" });
    }
    return errorsList;
  };

  const dataValidation = (e) => {
    e.preventDefault();
    const errors = errorsList();
    if (errors.length === 0) {
    } else {
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
        if (e.target.value === "pasantia") {
          setIsInternship(true);
        } else {
          setIsInternship(false);
        }
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
                  value={isInternship}
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
        </form>
      </div>
      {isInternship ? (
        <div className="divFormInternship">
          <form className="pb-3 mt-3" id="formsInternshipAndDependency">
            <div className="titleInternship">
              <h2>PASANTIA</h2>
            </div>
            <div className=" container " id="primary">
              <div className="row row-cols-2" id="rowInternship">
                <div className=" col form-field align-items-center">
                  <label>
                    La empresa ¿Tiene un Convenio Marco firmado con la UTN
                    Rosario?
                  </label>
                  <br />

                  <input
                    type="radio"
                    name="agreementSigned"
                    id="agreementSigned"
                    className="form-control-sm"
                    value={"Yes"}
                    placeholder="E-mail receptor de CVs"
                    onChange={inputHandler}
                  />
                  <div className="labelInternship">
                    <label> SI</label>
                  </div>
                  <br />

                  <input
                    type="radio"
                    name="agreementSigned"
                    id="agreementSigned"
                    className="form-control-sm"
                    value={"No"}
                    placeholder="E-mail receptor de CVs"
                    onChange={inputHandler}
                  />
                  <div className="labelInternship">
                    <label> NO</label>
                  </div>
                </div>
                <div className=" col form-field align-items-center">
                  <label>Fecha Tentativa de Inicio</label>
                  <br />
                  <input
                    type="date"
                    name="tentativeStartDate"
                    id="tentativeStartDate"
                    className="form-control-sm"
                    // value={tentativeStartDate}
                    placeholder="Periodo desde"
                    onChange={inputHandler}
                  />
                </div>
              </div>
            </div>
            <div className=" container " id="primary">
              <div className="row row-cols-2" id="rowInternship">
                <div className=" col form-field align-items-center">
                  <label>Duracion de la Pasantia</label>
                  <br />
                  <input
                    type="text"
                    name="durationInternship"
                    id="durationInternship"
                    className="form-control-sm"
                    // value={durationInternship}
                    placeholder="Duracion de la Pasantia"
                    onChange={inputHandler}
                  />
                </div>
                <div className=" col form-field align-items-center">
                  <label>Descripcion</label>
                  <br />
                  <textarea
                    type="textarea"
                    name="description"
                    id="description"
                    className="form-control-sm"
                    // value={description}
                    placeholder="Descripcion"
                    onChange={inputHandler}
                  />
                </div>
              </div>
            </div>
            <div className="container">
              <div className="col-md-12 text-center">
                <button onClick={dataValidation} id="btn" className="btn">
                  Crear Oferta
                </button>
              </div>
            </div>
          </form>
        </div>
      ) : (
        <div className="divFormDependency">
          <form className="pb-3 mt-3">
            <div className="titleDependency">
              <h2>RELACION DE DEPENDENCIA</h2>
            </div>
            <div className=" container " id="primary">
              <div className="row row-cols-3" id="rowDependency">
                <div className=" col form-field align-items-center">
                  <label>Jornada Laboral</label>
                  <br />
                  <input
                    type="radio"
                    name="workingDay"
                    id="workingDay"
                    className="form-control-sm"
                    value={"fullTime"}
                    placeholder="E-mail receptor de CVs"
                    onChange={inputHandler}
                  />
                  <div className="labelDependency">
                    <label> FULL TIME</label>
                  </div>
                  <br />
                  <input
                    type="radio"
                    name="workingDay"
                    id="workingDay"
                    className="form-control-sm"
                    value={"partTime"}
                    placeholder="E-mail receptor de CVs"
                    onChange={inputHandler}
                  />
                  <div className="labelDependency">
                    <label> PART TIME</label>
                  </div>
                  <br />
                  <input
                    type="radio"
                    name="workingDay"
                    id="workingDay"
                    className="form-control-sm"
                    value={"freeLance"}
                    placeholder="E-mail receptor de CVs"
                    onChange={inputHandler}
                  />
                  <div className="labelDependency">
                    <label> FREELANCE</label>
                  </div>
                  <br />
                </div>
                <div className=" col form-field align-items-center">
                  <label>Lugar de Trabajo</label>
                  <br />
                  <input
                    type="text"
                    name="placeWork"
                    id="placeWork"
                    className="form-control-sm"
                    // value={placeWork}
                    placeholder="Lugar de Trabajo"
                    onChange={inputHandler}
                  />
                </div>
                <div className=" col form-field align-items-center">
                  <label>Carreras en UTN Rosario</label>
                  <br />
                  <input
                    type="text"
                    name="careers"
                    id="careers"
                    className="form-control-sm"
                    // value={careers}
                    placeholder="Carreras en UTN Rosario"
                    onChange={inputHandler}
                  />
                </div>
              </div>
            </div>
            <div className=" container " id="primary">
              <div className="row row-cols-3" id="rowDependency">
                <div className=" col form-field align-items-center">
                  <label>Nombre del Puesto</label>
                  <br />
                  <input
                    type="text"
                    name="jobTitle"
                    id="jobTitle"
                    className="form-control-sm"
                    // value={jobTitle}
                    placeholder="Nombre del Puesto"
                    onChange={inputHandler}
                  />
                </div>
                <div className=" col form-field align-items-center">
                  <label>Descripcion</label>
                  <br />
                  <textarea
                    type="textarea"
                    name="description"
                    id="description"
                    className="form-control-sm"
                    // value={description}
                    onChange={inputHandler}
                  />
                </div>
              </div>
            </div>
            <div className="container">
              <div className="col-md-12 text-center">
                <button onClick={dataValidation} id="btn" className="btn">
                  Crear Oferta
                </button>
              </div>
            </div>
          </form>
        </div>
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

export default CompanyHome;
