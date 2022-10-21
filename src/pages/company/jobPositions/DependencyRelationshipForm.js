import { useState } from "react";
import { toast } from "react-toastify";

import "./DependencyRelationshipForm.css";

const DependencyRelationshipForm = () => {
  const [workingDay, setWorkingDay] = useState("");
  const [careers, setCareers] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [placeWork, setPlaceWork] = useState("");
  const [description, setDescription] = useState("");

  const errorsList = () => {
    const errorsList = [];
    if (!(workingDay && careers && jobTitle && placeWork && description)) {
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
      case "workingDay":
        setWorkingDay(e.target.value);
        break;
      case "careers":
        setCareers(e.target.value);
        break;
      case "jobTitle":
        setJobTitle(e.target.value);
        break;
      case "placeWork":
        setPlaceWork(e.target.value);
        break;
      case "description":
        setDescription(e.target.value);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div
        className="modal fade"
        id="exampleModalToggle2"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel2"
        tabindex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalToggleLabel2">
                Relacion de dependencia
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
                  <div className="row row-cols-2" id="rowDependency">
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
                        value={placeWork}
                        placeholder="Lugar de Trabajo"
                        onChange={inputHandler}
                      />
                    </div>
                  </div>
                </div>
                <div className=" container " id="primary">
                  <div className="row row-cols-2" id="rowDependency">
                    <div className=" col form-field align-items-center">
                      <label>Nombre del Puesto</label>
                      <br />
                      <input
                        type="text"
                        name="jobTitle"
                        id="jobTitle"
                        className="form-control-sm"
                        value={jobTitle}
                        placeholder="Nombre del Puesto"
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
                        value={careers}
                        placeholder="Carreras en UTN Rosario"
                        onChange={inputHandler}
                      />
                    </div>
                  </div>
                </div>
                <div className=" container " id="primary">
                  <div className="row row-cols-2" id="rowDependency">
                    <div className=" col form-field align-items-center">
                      <label>Descripcion</label>
                      <br />
                      <textarea
                        type="textarea"
                        name="description"
                        id="description"
                        className="form-control-sm"
                        value={description}
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
                data-bs-target="#exampleModalToggle"
                data-bs-toggle="modal"
                id="buttonModal"
              >
                Volver
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DependencyRelationshipForm;
