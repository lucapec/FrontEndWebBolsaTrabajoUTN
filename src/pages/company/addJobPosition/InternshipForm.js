import { useState, useContext } from "react";
import { toast } from "react-toastify";
import UserContext from "../../../context/UserContext";

import "./InternshipForm.css";

const InternshipForm = () => {
  const { jwt } = useContext(UserContext);
  const [agreementSigned, setAgreementSigned] = useState("");
  const [tentativeStartDate, setTentativeStartDate] = useState("");
  const [durationInternship, setDurationInternship] = useState("");
  const [descriptionInternship, setDescriptionInternship] = useState("");
  const [titleInternship, setTitleInternship] = useState("");
  const [locationInternship, setLocationInternship] = useState("");

  const errorsList = () => {
    const errorsList = [];
    if (
      !(
        agreementSigned &&
        tentativeStartDate &&
        durationInternship &&
        descriptionInternship &&
        titleInternship &&
        locationInternship
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
      fetch("https://localhost:7172/api/JobPosition/AddJobPosition", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${jwt}`,
        },
        body: JSON.stringify({
          jobTitle: titleInternship,
          jobDescription: descriptionInternship,
          location: locationInternship,
        }),
      })
        .then((res) => {
          toast("La oferta ha sido creada exitosamente", {
            autoClose: 3000,
            hideProgressBar: false,
            type: "success",
            theme: "dark",
            position: toast.POSITION.TOP_LEFT,
          });
        })
        .catch((error) => console.log(error));
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
    console.log(e.target.id);
    switch (e.target.id) {
      case "agreementSigned":
        setAgreementSigned(e.target.value);
        break;
      case "tentativeStartDate":
        setTentativeStartDate(e.target.value);
        break;
      case "durationInternship":
        setDurationInternship(e.target.value);
        break;
      case "descriptionInternship":
        setDescriptionInternship(e.target.value);
        break;
      case "titleInternship":
        setTitleInternship(e.target.value);
        break;
      case "locationInternship":
        setLocationInternship(e.target.value);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div
        className="modal fade"
        id="exampleModalToggle"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalToggleLabel">
                Pasantia
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="pb-3 mt-3">
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
                        value={tentativeStartDate}
                        placeholder="Periodo desde"
                        onChange={inputHandler}
                      />
                    </div>
                  </div>
                </div>
                <div className=" container " id="primary">
                  <div className="row row-cols-2" id="rowInternship">
                    <div className=" col form-field align-items-center">
                      <label>Duracion de Pasantia</label>
                      <br />
                      <input
                        type="text"
                        name="durationInternship"
                        id="durationInternship"
                        className="form-control-sm"
                        value={durationInternship}
                        placeholder="Duracion de la Pasantia"
                        onChange={inputHandler}
                      />
                    </div>
                    <div className="col form-field align-items-center">
                      <label>Nombre del Puesto</label>
                      <br />
                      <input
                        type="text"
                        name="titleInternship"
                        id="titleInternship"
                        className="form-control-sm"
                        value={titleInternship}
                        placeholder="Nombre del Puesto"
                        onChange={inputHandler}
                      />
                    </div>
                  </div>
                </div>
                <div className=" container " id="primary">
                  <div className="row row-cols-2" id="rowInternship">
                    <div className="col form-field align-items-center">
                      <label>Lugar de Trabajo</label>
                      <br />
                      <input
                        type="textarea"
                        name="locationInternship"
                        id="locationInternship"
                        className="form-control-sm"
                        value={locationInternship}
                        placeholder="Lugar de Trabajo"
                        onChange={inputHandler}
                      />
                    </div>
                    <div className=" col form-field align-items-center">
                      <label>Descripción</label>
                      <br />
                      <textarea
                        type="textarea"
                        name="descriptionInternship"
                        id="descriptionInternship"
                        className="form-control-sm"
                        value={descriptionInternship}
                        onChange={inputHandler}
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button onClick={dataValidation} id="buttonModal" className="btn">
                Crear Oferta
              </button>
              <button
                className="btn"
                data-bs-target="#exampleModalToggle2"
                data-bs-toggle="modal"
                id="buttonModalCreate"
              >
                Relacion de dependencia
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InternshipForm;
