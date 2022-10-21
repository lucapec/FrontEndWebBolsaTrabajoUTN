import { useState } from "react";

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

  return (
    <div className="divFormProfile">
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
                  <option value="predeterminado">Predeterminado</option>
                  <option value="documentoUnico">Documento Unico</option>
                  <option value="libretaCivica">Libreta Civica</option>
                  <option value="libretaEnrolamiento">
                    Libreta de Enrolamiento
                  </option>
                  <option value="pasaporte">Pasaporte</option>
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
                  <option value="predeterminado">Predeterminado</option>
                  <option value="mañana">Mañana</option>
                  <option value="tarde">Tarde</option>
                  <option value="noche">Noche</option>
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
              <button id="btn" className="btn">
                Editar Perfil
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
