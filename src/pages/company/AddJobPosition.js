import { useState, useEffect, useContext } from "react";
import "../../components/forms/Forms.css";
import "./AddJobPosition.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserContext from "../../context/UserContext";

const AddJobPosition = () => {
  const { jwt } = useContext(UserContext);
  const [careers, setCareers] = useState([]);
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [location, setLocation] = useState("");
  const [positionsToCover, setPositionsToCover] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [careerId, setCareerId] = useState(null);
  const [workDay, setWorkDay] = useState(0);
  const [jobType, setJobType] = useState(0);
  const [frameworkAgreement, setFrameworkAgreement] = useState(false);

  useEffect(() => {
    fetch("https://localhost:7172/api/Careers/", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${jwt}`
      },
    })
      .then((r) => r.json())
      .then((res) => {
        setCareers(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [jwt]);

  const createJobPosition = () => {
    fetch("https://localhost:7172/api/JobPosition/AddJobPosition", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        jobTitle,
        jobDescription,
        location: location,
        careerId,
        positionsToCover,
        frameworkAgreement,
        startDate,
        endDate,
        jobType,
        workDay,
      }),
    })
      .then((r) => r.json())
      .then((res) => {
        if (res.success) {
          toast(res.message, {
            autoClose: 3000,
            hideProgressBar: false,
            type: "success",
            theme: "dark",
            position: toast.POSITION.TOP_LEFT,
          });
        } else {
          toast(res.message, {
            autoClose: 3000,
            hideProgressBar: false,
            type: "warning",
            theme: "dark",
            position: toast.POSITION.TOP_LEFT,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const inputHandler = (e) => {
    switch (e.target.id) {
      case "jobType":
        console.log(e.target.value);
        console.log(e.target.id);
        setJobType(parseInt(e.target.value));
        break;
      case "jobTitle":
        setJobTitle(e.target.value);
        break;
      case "jobDescription":
        setJobDescription(e.target.value);
        break;
      case "location":
        setLocation(e.target.value);
        break;
      case "positionsToCover":
        setPositionsToCover(parseInt(e.target.value));
        break;
      case "startDate":
        setStartDate(e.target.value);
        break;
      case "endDate":
        setEndDate(e.target.value);
        break;
      case "careerId":
        setCareerId(parseInt(e.target.value));
        break;
      case "workDay":
        setWorkDay(parseInt(e.target.value));
        break;
      case "frameworkAgreement":
        setFrameworkAgreement(e.target.checked);
        break;
      default:
        break;
    }
  };

  return (
    <div className="container-fluid main">
      <ToastContainer className="mt-5" />
      <div id="wrapper" className="wrapper wrapper-addJobPosition">
        <h3>Crear oferta laboral</h3>
        <form>
          <div className="form-field d-flex flex-column align-items-center justify-content-center">
            <label htmlFor="jobType" className="my-1">Tipo de contrato</label>
            <select
              id="jobType"
              name="jobType"
              select={jobType}
              onChange={inputHandler}
            >
              <option id={0} value={0}>Pasantía</option>
              <option id={1} value={1}>Relación de Dependencia</option>
            </select>
          </div>
          <div className="form-field d-flex align-items-center justify-content-center">
            <input
              type="text"
              name="jobTitle"
              id="jobTitle"
              value={jobTitle}
              placeholder="Título del puesto"
              onChange={inputHandler}
            />
            <input
              type="text"
              name="location"
              id="location"
              value={location}
              placeholder="Lugar de trabajo"
              onChange={inputHandler}
            />
          </div>
          <div className="form-field d-flex align-items-center justify-content-center">
            <input
              type="text"
              name="startDate"
              id="startDate"
              value={startDate}
              placeholder="Fecha de inicio"
              onChange={inputHandler}
            />
            {jobType === 0 ? (
              <input
                type="text"
                name="endDate"
                id="endDate"
                value={endDate}
                placeholder="Fecha de fin"
                onChange={inputHandler}
              />
            ) : (
              <input
                type="number"
                name="positionsToCover"
                id="positionsToCover"
                value={positionsToCover}
                placeholder="Posiciones a cubrir"
                onChange={inputHandler}
              />
            )}
          </div>
          <div className="form-field d-flex align-items-center justify-content-center">
            <select
              id="careerId"
              name="careerId"
              select={careerId}
              onChange={inputHandler}
            >
              <option value={null}>Carrera</option>
              {careers.map((career) => {
                return <option key={career.id} value={career.id}>{career.name}</option>
              })}
            </select>
            {jobType === 0 ? (
              <input
                type="number"
                name="positionsToCover"
                id="positionsToCover"
                value={positionsToCover}
                placeholder="Posiciones a cubrir"
                onChange={inputHandler}
              />
            ) : (
              <select
                id="workDay"
                name="workDay"
                select={workDay}
                onChange={inputHandler}
              >
                <option value="Elija una carrera">Jornada laboral</option>
                <option value={0}>Tiempo completo</option>
                <option value={1}>Tiempo parcial</option>
              </select>
            )}
          </div>
          <div className="form-field frameworkAgreement">
            <textarea
              type="text"
              name="jobDescription"
              id="jobDescription"
              value={jobDescription}
              placeholder="Descripción del puesto"
              onChange={inputHandler}
            />
          </div>
          {jobType === 0 && (
            <div className="form-field d-flex align-items-center justify-content-start" style={{ margin: '0 0 15px 0'}}>
              <label htmlFor="frameworkAgreement">¿Tiene un convenio marco firmado por la UTN?</label>
              <input type="checkbox" name="frameworkAgreement" id="frameworkAgreement" value={frameworkAgreement} onChange={inputHandler} />
            </div>
          )}
          <button onClick={createJobPosition} className="button mt-3">
            Agregar
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddJobPosition;
