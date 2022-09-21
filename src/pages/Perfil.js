import { useState } from "react";

import utnLogo from "../assets/logo-utn.png";

import "./Perfil.css";

const Perfil = () => {
  const [user, setUser] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [documentType, setDocumentType] = useState("");
  const [documentNumber, setDocumentNumber] = useState("");
  const [legajo, setLegajo] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [names, setNames] = useState("");
  const [cuilOrCuit, setCuilOrCuit] = useState("");
  const [street, setStreet] = useState("");
  const [numberStreet, setNumberStreet] = useState("");
  const [sex, setSex] = useState("");
  const [fileCv, setFileCv] = useState("");
  const [country, setCountry] = useState("");
  const [province, setProvince] = useState("");
  const [location, setLocation] = useState("");
  const [personalPhone, setPersonalPhone] = useState("");

  const inputHandler = (e) => {
    switch (e.target.id) {
      case "user":
        setUser(e.target.value);
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
      case "names":
        setNames(e.target.value);
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
      default:
        break;
    }
  };

  return (
    <div className="divFormProfile">
      <header></header>
      <div className="form" >
        <form className=" mt-3">
          <div className=" container ">
            <div className="row row-cols-4">
              <div className=" col form-group align-items-center ">
                <label>Usuario</label>
                <br />
                <input
                  type="text"
                  name="user"
                  id="user"
                  className="form-control-sm"
                  value={user}
                  placeholder="Usuario"
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
                  type="text"
                  name="documentNumber"
                  id="documentNumber"
                  className="form-control-sm"
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
                  type="text"
                  name="legajo"
                  id="legajo"
                  className="form-control-sm"
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
                  value={birthDate}
                  placeholder="Fecha de Nacimiento"
                  onChange={inputHandler}
                />
              </div>
              <div className=" col form-group align-items-center">
                <label>Nombres</label>
                <br />
                <input
                  type="text"
                  name="names"
                  id="names"
                  className="form-control-sm"
                  value={names}
                  placeholder="Nombres"
                  onChange={inputHandler}
                />
              </div>
              <div className="col form-group align-items-center">
                <label>CUIL o CUIT</label>
                <br />
                <input
                  type="text"
                  name="cuilOrCuit"
                  id="cuilOrCuit"
                  className="form-control-sm"
                  value={cuilOrCuit}
                  placeholder="CUIL o CUIT"
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
                  type="text"
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
              <div className=" form-group align-items-center">
                <label>Telefono Particular</label>
                <br />
                <input
                  type="text"
                  name="personalPhone"
                  id="personalPhone"
                  className="form-control-sm"
                  value={personalPhone}
                  placeholder="Telefono Particular"
                  onChange={inputHandler}
                />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="col-md-12">
              <button id="btn" className="btn">Editar Perfil</button>
            </div>
          </div>
        </form>
      </div>
      <footer>
        <div className="container">
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

export default Perfil;
