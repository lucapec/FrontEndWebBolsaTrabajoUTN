import { useState } from "react";
import { toast } from "react-toastify";

import "./InternshipForm.css";

const InternshipForm = () => {
  const [agreementSigned, setAgreementSigned] = useState("");
  const [tentativeStartDate, setTentativeStartDate] = useState("");
  const [durationInternship, setDurationInternship] = useState("");
  const [descriptionInternship, setDescriptionInternship] = useState("");

  const errorsList = () => {
    const errorsList = [];
    if (
      !(
        agreementSigned &&
        tentativeStartDate &&
        durationInternship &&
        descriptionInternship
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
      toast("La oferta ha sido creada exitosamente", {
        autoClose: 3000,
        hideProgressBar: false,
        type: "success",
        theme: "dark",
        position: toast.POSITION.TOP_LEFT,
      });
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
                      <label>Duracion de la Pasantia</label>
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
                    <div className=" col form-field align-items-center">
                      <label>Descripcion</label>
                      <br />
                      <textarea
                        type="textarea"
                        name="descriptionInternship"
                        id="descriptionInternship"
                        className="form-control-sm"
                        value={descriptionInternship}
                        placeholder="Descripcion"
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
