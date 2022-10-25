import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import UserContext from "../../context/UserContext";
import utnLogo from "../../assets/logo-utn.png";

import "./Profile.css";

const Profile = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [documentType, setDocumentType] = useState("");
  const [documentNumber, setDocumentNumber] = useState("");
  const [legajo, setLegajo] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [cuilOrCuit, setCuilOrCuit] = useState("");
  const [street, setStreet] = useState("");
  const [numberStreet, setNumberStreet] = useState("");
  const [sex, setSex] = useState("");
  const [fileCv, setFileCv] = useState("");
  const [country, setCountry] = useState("");
  const [province, setProvince] = useState("");
  const [location, setLocation] = useState("");
  const [personalPhone, setPersonalPhone] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [subjectsApproved, setSubjectsApproved] = useState("");
  const [specialtyPlan, setSpecialtyPlan] = useState("");
  const [currentYear, setCurrentYear] = useState("");
  const [shiftProgress, setShiftProgress] = useState("");
  const [averagesWithDeferrals, setAveragesWithDeferrals] = useState("");
  const [averagesWithoutDeferrals, setAveragesWithoutDeferrals] = useState("");
  const [studentData, setStudentData] = useState({});

  const { jwt } = useContext(UserContext);
  const navigate = useNavigate();

  const errorsList = () => {
    const errorsList = [];
    if (
      !(
        street &&
        numberStreet &&
        sex &&
        fileCv &&
        country &&
        province &&
        location &&
        personalPhone &&
        specialty &&
        subjectsApproved &&
        specialtyPlan &&
        currentYear &&
        shiftProgress &&
        averagesWithDeferrals &&
        averagesWithoutDeferrals
      )
    ) {
      errorsList.push({ message: "Los campos deben estar completos" });
    }
    return errorsList;
  };

  const inputHandler = (e) => {
    switch (e.target.id) {
      case "firstName":
        setfirstName(e.target.value);
        break;
      case "lastName":
        setLastName(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "documentType":
        setDocumentType(e.target.value);
        break;
      case "documentNumber":
        setDocumentNumber(e.target.value);
        break;
      case "legajo":
        setLegajo(e.target.value);
        break;
      case "birthDate":
        setBirthDate(e.target.value);
        break;
      case "cuilOrCuit":
        setCuilOrCuit(e.target.value);
        break;
      case "street":
        setStreet(e.target.value);
        break;
      case "numberStreet":
        setNumberStreet(e.target.value);
        break;
      case "sex":
        setSex(e.target.value);
        break;
      case "fileCv":
        setFileCv(e.target.value);
        break;
      case "country":
        setCountry(e.target.value);
        break;
      case "province":
        setProvince(e.target.value);
        break;
      case "location":
        setLocation(e.target.value);
        break;
      case "personalPhone":
        setPersonalPhone(e.target.value);
        break;
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

  useEffect(() => {
    fetch("https://localhost:7172/api/UsersInfo/Student", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setStudentData(data));
  }, [jwt]);

  useEffect(() => {
    setfirstName(studentData.firstName);
    setLastName(studentData.lastName);
    setEmail(studentData.email);
    setDocumentType(studentData.documentType);
    setDocumentNumber(studentData.dni);
    setLegajo(studentData.legajo);
    setBirthDate(studentData.birthDate);
    setCuilOrCuit(studentData.cuil);
    setStreet(studentData.address);
    setNumberStreet(studentData.addressNum);
    setSex(studentData.sex);
    setFileCv(studentData.curriculum);
    setCountry(studentData.country);
    setProvince(studentData.province);
    setLocation(studentData.city);
    setPersonalPhone(studentData.phoneNumb);
    setSpecialty(studentData.careerId);
    setSubjectsApproved(studentData.approvedSubjets);
    setSpecialtyPlan(studentData.planDeEstudio);
    setCurrentYear(studentData.currentCareerYear);
    setShiftProgress(studentData.turn);
    setAveragesWithDeferrals(studentData.averageWithFails);
    setAveragesWithoutDeferrals(studentData.average);
  }, [studentData]);

  const updateData = {
    Address: street,
    AddressNum: numberStreet,
    Sex: sex,
    Curriculum: fileCv,
    Country: country,
    Province: province,
    City: location,
    PhoneNumb: personalPhone,
    CareerId: specialty,
    ApprovedSubjets: subjectsApproved,
    PlanDeEstudio: specialtyPlan,
    CurrentCareerYear: currentYear,
    Turn: shiftProgress,
    AverageWithFails: averagesWithDeferrals,
    average: averagesWithoutDeferrals,
  };

  const dataValidation = (e) => {
    e.preventDefault();
    const errors = errorsList();
    if (errors.length === 0) {
      fetch("https://localhost:7172/api/UsersInfo/UpdateDataStudent", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwt}`,
        },
        body: JSON.stringify(updateData),
      })
        .then((res) => res.json())
        .then(
          toast("Los cambios han sido guardados exitosamente", {
            autoClose: 3000,
            hideProgressBar: false,
            type: "success",
            theme: "dark",
            position: toast.POSITION.TOP_LEFT,
          })
        )
        .then(
          setTimeout(() => {
            navigate("/ofertas");
          }, 3000)
        )
        .catch((err) => {
          console.log(err.message);
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

  return (
    <div className="divFormProfile">
      <ToastContainer className="mt-5" />
      <div className="form">
        <form className=" mt-3">
          <div className=" container ">
            <div className="row row-cols-4">
              <div className="col form-group align-items-center">
                <label>Nombre</label>
                <br />
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  className="form-control-sm"
                  readOnly
                  value={firstName}
                  placeholder="Nombre"
                  onChange={inputHandler}
                />
              </div>
              <div className="col form-group align-items-center">
                <label>Apellido</label>
                <br />
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  className="form-control-sm"
                  readOnly
                  value={lastName}
                  placeholder="Apellido"
                  onChange={inputHandler}
                />
              </div>
              <div className=" col form-group align-items-center">
                <label>Email</label>
                <br />
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="form-control-sm"
                  readOnly
                  value={email}
                  placeholder="Email"
                  onChange={inputHandler}
                />
              </div>
              <div className=" col form-group align-items-center">
                <label>Tipo y Nro Documento</label>
                <br />
                <select
                  id="documentType"
                  name="documentType"
                  className="form-control-sm"
                  readOnly
                  value={documentType}
                  onChange={inputHandler}
                >
                  <option value={0}>Predeterminado</option>
                  <option value={1}>Documento Unico</option>
                  <option value={2}>Libreta Civica</option>
                  <option value={3}>Libreta de Enrolamiento</option>
                  <option value={4}>Pasaporte</option>
                </select>
                <br />
                <input
                  type="number"
                  name="documentNumber"
                  id="documentNumber"
                  className="form-control-sm"
                  readOnly
                  value={documentNumber}
                  placeholder="Numero de Documento"
                  onChange={inputHandler}
                />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row row-cols-4">
              <div className=" col form-group align-items-center ">
                <label>Legajo</label>
                <br />
                <input
                  type="number"
                  name="legajo"
                  id="legajo"
                  className="form-control-sm"
                  readOnly
                  value={legajo}
                  placeholder="Legajo"
                  onChange={inputHandler}
                />
              </div>
              <div className=" col form-group align-items-center">
                <label>Fecha de Nacimiento</label>
                <br />
                <input
                  type="text"
                  name="birthDate"
                  id="birthDate"
                  className="form-control-sm"
                  readOnly
                  value={birthDate}
                  placeholder="Fecha de Nacimiento"
                  onChange={inputHandler}
                />
              </div>
              <div className=" form-group align-items-center">
                <label>Telefono Particular</label>
                <br />
                <input
                  type="number"
                  name="personalPhone"
                  id="personalPhone"
                  className="form-control-sm"
                  value={personalPhone}
                  placeholder="Telefono Particular"
                  onChange={inputHandler}
                />
              </div>
              <div className="col form-group align-items-center">
                <label>CUIL o CUIT</label>
                <br />
                <input
                  type="number"
                  name="cuilOrCuit"
                  id="cuilOrCuit"
                  className="form-control-sm"
                  readOnly
                  value={cuilOrCuit}
                  placeholder="CUIL o CUIT (Sin guiones)"
                  onChange={inputHandler}
                />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row row-cols-4">
              <div className=" col form-group align-items-center">
                <label>Calle</label>
                <br />
                <input
                  type="text"
                  name="street"
                  id="street"
                  className="form-control-sm"
                  value={street}
                  placeholder="Calle"
                  onChange={inputHandler}
                />
              </div>
              <div className=" col form-group align-items-center">
                <label>Numero de Calle</label>
                <br />
                <input
                  type="number"
                  name="numberStreet"
                  id="numberStreet"
                  className="form-control-sm"
                  value={numberStreet}
                  placeholder="Numero de Calle"
                  onChange={inputHandler}
                />
              </div>
              <div className=" col form-group align-items-center">
                <label>Sexo</label>
                <br />
                <input
                  type="text"
                  name="sex"
                  id="sex"
                  className="form-control-sm"
                  value={sex}
                  placeholder="Sexo"
                  onChange={inputHandler}
                />
              </div>
              <div className=" col form-group align-items-center">
                <label>Archivo CV</label>
                <br />
                <input
                  type="file"
                  name="fileCv"
                  id="fileCv"
                  className="form-control-sm"
                  value={fileCv}
                  placeholder="Archivo CV"
                  onChange={inputHandler}
                />
              </div>
            </div>
          </div>
          <div id="containerProfile" className="container">
            <div className="row row-cols-4">
              <div className=" col form-group align-items-center">
                <label>Pais</label>
                <br />
                <input
                  type="text"
                  name="country"
                  id="country"
                  className="form-control-sm"
                  value={country}
                  placeholder="Pais"
                  onChange={inputHandler}
                />
              </div>
              <div className=" col form-group align-items-center">
                <label>Provincia</label>
                <br />
                <input
                  type="text"
                  name="province"
                  id="province"
                  className="form-control-sm"
                  value={province}
                  placeholder="Provincia"
                  onChange={inputHandler}
                />
              </div>
              <div className=" col form-group align-items-center">
                <label>Localidad</label>
                <br />
                <input
                  type="text"
                  name="location"
                  id="location"
                  className="form-control-sm"
                  value={location}
                  placeholder="Localidad"
                  onChange={inputHandler}
                />
              </div>
              <div className=" col form-group align-items-center">
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
            </div>
          </div>
          <div className="container">
            <div className="row row-cols-4">
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
                  <option value={0}>Predeterminado</option>
                  <option value={1}>Mañana</option>
                  <option value={2}>Tarde</option>
                  <option value={3}>Noche</option>
                </select>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row row-cols-4">
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
            </div>
          </div>

          <div className="container">
            <div className="col-md-12">
              <button id="btn" className="btn" onClick={dataValidation}>
                Guardar Cambios
              </button>
            </div>
          </div>
        </form>
      </div>
      <footer className="footerStudent">
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

export default Profile;
