import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

import "./UniversityData.css";

const UniversityData = () => {
  const [specialty, setSpecialty] = useState("");
  const [subjectsApproved, setSubjectsApproved] = useState("");
  const [specialtyPlan, setSpecialtyPlan] = useState("");
  const [currentYear, setCurrentYear] = useState("");
  const [shiftProgress, setShiftProgress] = useState("");
  const [averagesWithDeferrals, setAveragesWithDeferrals] = useState("");
  const [averagesWithoutDeferrals, setAveragesWithoutDeferrals] = useState("");
  const [titleUniversity, setTitleUniversity] = useState("");
  const [errors, setErrors] = useState(null);

  const errorsList = () => {
    const errorsList = [];
    if (!(Number(averagesWithDeferrals) && averagesWithoutDeferrals)) {
      errorsList.push({ message: "El Promedio debe ser un numero entero" });
    }
    if (!Number(subjectsApproved)) {
      errorsList.push({ message: "La Cantidad de Materias debe ser un numero" });
    }
    return errorsList;
  };

  const validationRequirements = {
    specialty: { required: true },
    specialtyPlan: { required: true },
    currentYear: { required: true },
    shiftProgress: { required: true },
    titleUniversity: { required: true },
  };

  const validate = (Obj) => {
    let errors = {};
    if (Obj) {
      Object.keys(validationRequirements).forEach((key) => {
        if (validationRequirements[key].required && !Obj[key]) {
          errors[key] = "El campo es obligatorio.";
        }
      });
    }
    return errors;
  };

  const generateObject = () => {
    const Data = {
      specialty,
      specialtyPlan,
      currentYear,
      shiftProgress,
      titleUniversity,
    };
    return Data;
  };

  const dataValidation = (e) => {
    e.preventDefault();
    const errors = errorsList();
    if (errors.length === 0) {
      // Load Data
    } else {
      // Show validation errors as a pop-up notification
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
        if (e.target.value) setShiftProgress(e.target.value);
        break;
      case "averagesWithDeferrals":
        if (e.target.value) setAveragesWithDeferrals(e.target.value);
        break;
      case "averagesWithoutDeferrals":
        if (e.target.value) setAveragesWithoutDeferrals(e.target.value);
        break;
      case "titleUniversity":
        if (e.target.value) setTitleUniversity(e.target.value);
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
          <p>Complete los datos universitarios</p>
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
                onBlur={(e) => {
                  setErrors(validate(generateObject()));
                }}
              />
              {errors?.specialty && (
                <div className="error"> {errors.specialty} </div>
              )}
            </div>
            <div className=" col form-field align-items-center">
              <label>Cantidad de Materias Aprobadas</label>
              <br />
              <input
                type="text"
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
                onBlur={(e) => {
                  setErrors(validate(generateObject()));
                }}
              />
              {errors?.specialtyPlan && (
                <div className="error"> {errors.specialtyPlan} </div>
              )}
            </div>
            <div className=" col form-field align-items-center">
              <label>Año que cursa</label>
              <br />
              <input
                type="text"
                name="currentYear"
                id="currentYear"
                className="form-control-sm"
                value={currentYear}
                placeholder="Año que cursa"
                onChange={inputHandler}
                onBlur={(e) => {
                  setErrors(validate(generateObject()));
                }}
              />
              {errors?.currentYear && (
                <div className="error"> {errors.currentYear} </div>
              )}
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
                onBlur={(e) => {
                  setErrors(validate(generateObject()));
                }}
              >
                <option value="predeterminado">Predeterminado</option>
                <option value="mañana">Mañana</option>
                <option value="tarde">Tarde</option>
                <option value="noche">Noche</option>
              </select>
              {errors?.shiftProgress && (
                <div className="error"> {errors.shiftProgress} </div>
              )}
            </div>
            <div className=" col form-field align-items-center">
              <label>Promedio con Aplazos</label>
              <br />
              <input
                type="text"
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
                type="text"
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
                onBlur={(e) => {
                  setErrors(validate(generateObject()));
                }}
              />
              {errors?.titleUniversity && (
                <div className="error"> {errors.titleUniversity} </div>
              )}
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