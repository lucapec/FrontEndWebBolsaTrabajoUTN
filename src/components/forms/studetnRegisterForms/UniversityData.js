import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

import { useNavigate } from "react-router-dom";

import "./UniversityData.css";

const UniversityData = ({ setSuccessfulCharge, UpdateData }) => {
  const [specialty, setSpecialty] = useState("");
  const [subjectsApproved, setSubjectsApproved] = useState("");
  const [specialtyPlan, setSpecialtyPlan] = useState("");
  const [currentYear, setCurrentYear] = useState("");
  const [shiftProgress, setShiftProgress] = useState("");
  const [averagesWithDeferrals, setAveragesWithDeferrals] = useState("");
  const [averagesWithoutDeferrals, setAveragesWithoutDeferrals] = useState("");
  const [titleUniversity, setTitleUniversity] = useState("");

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
        averagesWithoutDeferrals &&
        titleUniversity
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
    Average: averagesWithDeferrals,
    AverageWithFails: averagesWithoutDeferrals,
    titleUniversity,
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
      case "titleUniversity":
        setTitleUniversity(e.target.value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="divFormUniversity">
      <header></header>
      <ToastContainer className="mt-5" />
      <form className="pb-3 mt-3">
        <div className="title">
          <h2>Complete los datos universitarios</h2>
        </div>
        <div className=" container " id="primary">
          <div className="row row-cols-4">
            <div className=" col form-field align-items-center">
              <label>Especialidad</label>
              <br />
              <input
                type="text"
                name="specialty"
                id="specialty"
                className="form-control-sm"
                value={specialty}
                placeholder="Especialidad"
                onChange={inputHandler}
              />
            </div>
            <div className=" col form-field align-items-center">
              <label>Cantidad de Materias Aprobadas</label>
              <br />
              <input
                type="number"
                name="subjectsApproved"
                id="subjectsApproved"
                className="form-control-sm"
                value={subjectsApproved}
                placeholder="Materias Aprobadas"
                onChange={inputHandler}
              />
            </div>
            <div className=" col form-field align-items-center">
              <label>Plan Especialidad</label>
              <br />
              <input
                type="text"
                name="specialtyPlan"
                id="specialtyPlan"
                className="form-control-sm"
                value={specialtyPlan}
                placeholder="Plan Especialidad"
                onChange={inputHandler}
              />
            </div>
            <div className=" col form-field align-items-center">
              <label>Año que cursa</label>
              <br />
              <input
                type="number"
                name="currentYear"
                id="currentYear"
                className="form-control-sm"
                value={currentYear}
                placeholder="Año que cursa"
                onChange={inputHandler}
              />
            </div>
          </div>
        </div>
        <div className=" container " id="primary">
          <div className="row row-cols-4">
            <div className=" col form-field align-items-center">
              <label>Turno que cursa</label>
              <br />
              <select
                id="shiftProgress"
                name="shiftProgress"
                className="form-control-sm"
                value={shiftProgress}
                onChange={inputHandler}
              >
                <option value="predeterminado">Predeterminado</option>
                <option value="mañana">Mañana</option>
                <option value="tarde">Tarde</option>
                <option value="noche">Noche</option>
              </select>
            </div>
            <div className=" col form-field align-items-center">
              <label>Promedio con Aplazos</label>
              <br />
              <input
                type="number"
                name="averagesWithDeferrals"
                id="averagesWithDeferrals"
                className="form-control-sm"
                value={averagesWithDeferrals}
                placeholder="Promedio con Aplazos"
                onChange={inputHandler}
              />
            </div>
            <div className=" col form-field align-items-center">
              <label>Promedios sin Aplazos</label>
              <br />
              <input
                type="number"
                name="averagesWithoutDeferrals"
                id="averagesWithoutDeferrals"
                className="form-control-sm"
                value={averagesWithoutDeferrals}
                placeholder="Promedios sin Aplazos"
                onChange={inputHandler}
              />
            </div>
            <div className=" col form-field align-items-center">
              <label>Titulo Universitario</label>
              <br />
              <input
                type="text"
                name="titleUniversity"
                id="titleUniversity"
                className="form-control-sm"
                value={titleUniversity}
                placeholder="Titulo Universitario"
                onChange={inputHandler}
              />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="col-md-12 text-center">
            <button onClick={dataValidation} id="btn" className="btn">
              Guardar e ingresar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UniversityData;
