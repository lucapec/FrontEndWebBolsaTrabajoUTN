import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

import utnLogo from "../../../assets/logo-utn.png";

import "./UniversityData.css";

const UniversityData = ({ setSuccessfulCharge, UpdateData }) => {
  const [specialty, setSpecialty] = useState("");
  const [subjectsApproved, setSubjectsApproved] = useState("");
  const [specialtyPlan, setSpecialtyPlan] = useState("");
  const [currentYear, setCurrentYear] = useState("");
  const [shiftProgress, setShiftProgress] = useState("");
  const [averagesWithDeferrals, setAveragesWithDeferrals] = useState("");
  const [averagesWithoutDeferrals, setAveragesWithoutDeferrals] = useState("");
  const navigate = useNavigate();

  const errorsList = () => {
    const errorsList = [];
    if (
      !(
        specialty &&
        subjectsApproved &&
        specialtyPlan &&
        currentYear &&
        shiftProgress &&
        averagesWithDeferrals &&
        averagesWithoutDeferrals
      )
    ) {
      errorsList.push({ message: "Los campos son obligatiorios" });
    }
    return errorsList;
  };

  const universityData = {
    CareerId: specialty,
    ApprovedSubjets: subjectsApproved,
    PlanDeEstudio: specialtyPlan,
    CurrentCareerYear: currentYear,
    Turn: shiftProgress,
    AverageWithFails: averagesWithDeferrals,
    Average: averagesWithoutDeferrals,
    FirstChargeData: true,
  };

  const dataValidation = (e) => {
    e.preventDefault();
    const errors = errorsList();
    if (errors.length === 0) {
      setSuccessfulCharge(true);
      UpdateData(universityData);
      setTimeout(() => {
        navigate("/ofertas");
      }, 3000);
      toast("Los datos han sido cargados existosamente", {
        autoClose: 3000,
        hideProgressBar: false,
        type: "success",
        theme: "dark",
        position: toast.POSITION.TOP_LEFT,
      });
      toast("Los datos seran validados por administración para su aprobación", {
        autoClose: 5000,
        hideProgressBar: false,
        type: "info",
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
      case "specialty":
        setSpecialty(e.target.value);
        break;
      case "subjectsApproved":
        setSubjectsApproved(e.target.value);
        break;
      case "specialtyPlan":
        setSpecialtyPlan(e.target.value);
        break;
      case "currentYear":
        setCurrentYear(e.target.value);
        break;
      case "shiftProgress":
        setShiftProgress(e.target.value);
        break;
      case "averagesWithDeferrals":
        setAveragesWithDeferrals(e.target.value);
        break;
      case "averagesWithoutDeferrals":
        setAveragesWithoutDeferrals(e.target.value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="divFormUniversity">
      <header></header>
      <ToastContainer className="mt-5" />
      <div className="container">
        <div className="row">
          <div className="col-md-11">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-13">
                    <h3>Complete los datos universitarios</h3>
                    <hr />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <form className="formProfile">
                      <div className="form-group row row-cols-3">
                        <div className="col mt-4">
                          <label>Especialidad</label>
                          <div>
                            <input
                              type="text"
                              name="specialty"
                              id="specialty"
                              className="form-control here"
                              value={specialty}
                              onChange={inputHandler}
                            />
                          </div>
                        </div>
                        <div className="col mt-4">
                          <label>Materias aprobadas</label>
                          <div>
                            <input
                              type="number"
                              name="subjectsApproved"
                              id="subjectsApproved"
                              className="form-control here"
                              value={subjectsApproved}
                              onChange={inputHandler}
                            />
                          </div>
                        </div>
                        <div className="col mt-4">
                          <label>Plan Especialidad</label>
                          <div>
                            <input
                              type="text"
                              name="specialtyPlan"
                              id="specialtyPlan"
                              className="form-control here"
                              value={specialtyPlan}
                              onChange={inputHandler}
                            />
                          </div>
                        </div>
                        <div className="col mt-4">
                          <label>Año que Cursa</label>
                          <div>
                            <input
                              type="number"
                              name="currentYear"
                              id="currentYear"
                              className="form-control here"
                              value={currentYear}
                              onChange={inputHandler}
                            />
                          </div>
                        </div>
                        <div className="col mt-4">
                          <label>Turno que cursa</label>
                          <div>
                            <select
                              id="shiftProgress"
                              name="shiftProgress"
                              className="form-control here"
                              placeholder="Turno que cursa"
                              value={shiftProgress}
                              onChange={inputHandler}
                            >
                              <option value={"Seleccionar"}>Seleccionar</option>
                              <option value={0}>Mañana</option>
                              <option value={1}>Tarde</option>
                              <option value={2}>Noche</option>
                            </select>
                          </div>
                        </div>
                        <div className="col mt-4">
                          <label>Promedio con Aplazos</label>
                          <div>
                            <input
                              type="number"
                              name="averagesWithDeferrals"
                              id="averagesWithDeferrals"
                              className="form-control here"
                              value={averagesWithDeferrals}
                              onChange={inputHandler}
                            />
                          </div>
                        </div>
                        <div className="col mt-4">
                          <label>Promedio sin Aplazos</label>
                          <div>
                            <input
                              type="number"
                              name="averagesWithoutDeferrals"
                              id="averagesWithoutDeferrals"
                              className="form-control here"
                              value={averagesWithoutDeferrals}
                              onChange={inputHandler}
                            />
                          </div>
                        </div>
                        <div className="col-11">
                          <div className="mt-5 ">
                            <button onClick={dataValidation} className="btn">
                              Guardar e Ingresar
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footerStudentUniversity">
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

export default UniversityData;
