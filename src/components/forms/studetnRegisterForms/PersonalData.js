import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

import utnLogo from "../../../assets/logo-utn.png";

import "./PersonalData.css";

const PersonalData = ({ setboolUniversityData, UpdateData }) => {
  const [firstName, setFirstname] = useState("");
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

  const errorsList = () => {
    const errorsList = [];
    if (
      !String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      errorsList.push({ message: "Ingrese un email válido" });
    }
    if (
      !(
        firstName &&
        lastName &&
        email &&
        documentType &&
        documentNumber &&
        legajo &&
        birthDate &&
        cuilOrCuit &&
        street &&
        numberStreet &&
        sex &&
        fileCv &&
        country &&
        province &&
        location &&
        personalPhone
      )
    ) {
      errorsList.push({ message: "Los campos son oligatorios" });
    }
    return errorsList;
  };

  const personalData = {
    FirstName: firstName,
    LastName: lastName,
    Email: email,
    DocumentType: documentType,
    Dni: documentNumber,
    Legajo: legajo,
    BirthDate: birthDate,
    Cuil: cuilOrCuit,
    Address: street,
    AddressNum: numberStreet,
    Sex: sex,
    Curriculum: fileCv,
    Country: country,
    Province: province,
    City: location,
    PhoneNumb: personalPhone,
  };

  const dataValidation = (e) => {
    e.preventDefault();
    const errors = errorsList();
    if (errors.length === 0) {
      setboolUniversityData(true);
      UpdateData(personalData);
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
      case "firstName":
        setFirstname(e.target.value);
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
      default:
        break;
    }
  };

  return (
    <div className="divFormPersonal">
      <header></header>
      <ToastContainer className="mt-5" />
      <div className="container">
        <div class="row">
          <div class="col-md-11">
            <div class="card">
              <div class="card-body">
                <div class="row">
                  <div class="col-md-13">
                    <h3>Complete los datos personales</h3>
                    <hr />
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <form className="formProfile">
                      <div class="form-group row">
                        <label for="firstName" class="col-4 col-form-label">
                          Nombre
                        </label>
                        <div class="col-6">
                          <input
                            type="text"
                            name="firstName"
                            id="firstName"
                            class="form-control here"
                            placeholder="Nombre"
                            value={firstName}
                            onChange={inputHandler}
                          />
                        </div>
                      </div>
                      <div class="form-group row">
                        <label for="lastName" class="col-4 col-form-label">
                          Apellido
                        </label>
                        <div class="col-6">
                          <input
                            type="text"
                            name="lastName"
                            id="lastName"
                            class="form-control here"
                            placeholder="Apellido"
                            value={lastName}
                            onChange={inputHandler}
                          />
                        </div>
                      </div>
                      <div class="form-group row">
                        <label for="email" class="col-4 col-form-label">
                          Email
                        </label>
                        <div class="col-6">
                          <input
                            type="text"
                            name="email"
                            id="email"
                            class="form-control here"
                            placeholder="Email"
                            value={email}
                            onChange={inputHandler}
                          />
                        </div>
                      </div>
                      <div class="form-group row">
                        <label for="select" class="col-4 col-form-label">
                          Tipo y Numero de Documento
                        </label>
                        <div class="col-6">
                          <select
                            id="documentType"
                            name="documentType"
                            class="form-control here"
                            value={documentType}
                            onChange={inputHandler}
                          >
                            <option value={"Seleccionar"}>Seleccionar</option>
                            <option value={0}>Documento Unico</option>
                            <option value={1}>Libreta Civica</option>
                            <option value={2}>Libreta de Enrolamiento</option>
                            <option value={3}>Pasaporte</option>
                          </select>
                          <input
                            type="number"
                            name="documentNumber"
                            id="documentNumber"
                            class="form-control here"
                            placeholder="Numero de Documento"
                            value={documentNumber}
                            onChange={inputHandler}
                          />
                        </div>
                      </div>
                      <div class="form-group row">
                        <label for="legajo" class="col-4 col-form-label">
                          Legajo
                        </label>
                        <div class="col-6">
                          <input
                            type="number"
                            name="legajo"
                            id="legajo"
                            class="form-control here"
                            placeholder="Legajo"
                            value={legajo}
                            onChange={inputHandler}
                          />
                        </div>
                      </div>
                      <div class="form-group row">
                        <label for="birthDate" class="col-4 col-form-label">
                          Fecha de Nacimiento
                        </label>
                        <div class="col-6">
                          <input
                            type="date"
                            name="birthDate"
                            id="birthDate"
                            class="form-control here"
                            value={birthDate}
                            onChange={inputHandler}
                          />
                        </div>
                      </div>
                      <div class="form-group row">
                        <label for="website" class="col-4 col-form-label">
                          Numero de Telefono
                        </label>
                        <div class="col-6">
                          <input
                            type="number"
                            name="personalPhone"
                            id="personalPhone"
                            class="form-control here"
                            placeholder="Numero de Telefono"
                            value={personalPhone}
                            onChange={inputHandler}
                          />
                        </div>
                      </div>
                      <div class="form-group row">
                        <label for="cuilOrCuit" class="col-4 col-form-label">
                          CUIL O CUIT
                        </label>
                        <div class="col-6">
                          <input
                            type="number"
                            name="cuilOrCuit"
                            id="cuilOrCuit"
                            class="form-control here"
                            value={cuilOrCuit}
                            placeholder="CUIL o CUIT (Sin guiones) "
                            onChange={inputHandler}
                          />
                        </div>
                      </div>
                      <div class="form-group row">
                        <label for="street" class="col-4 col-form-label">
                          Calle
                        </label>
                        <div class="col-6">
                          <input
                            type="text"
                            name="street"
                            id="street"
                            class="form-control here"
                            placeholder="Calle"
                            value={street}
                            onChange={inputHandler}
                          />
                        </div>
                      </div>
                      <div class="form-group row">
                        <label for="numberStreet" class="col-4 col-form-label">
                          Numero de Calle
                        </label>
                        <div class="col-6">
                          <input
                            type="number"
                            name="numberStreet"
                            id="numberStreet"
                            class="form-control here"
                            placeholder="Numero de Calle"
                            value={numberStreet}
                            onChange={inputHandler}
                          />
                        </div>
                      </div>
                      <div class="form-group row">
                        <label for="sex" class="col-4 col-form-label">
                          Sexo
                        </label>
                        <div class="col-6">
                          <input
                            type="text"
                            name="sex"
                            id="sex"
                            class="form-control here"
                            placeholder="Sexo"
                            value={sex}
                            onChange={inputHandler}
                          />
                        </div>
                      </div>
                      <div class="form-group row">
                        <label for="fileCv" class="col-4 col-form-label">
                          Archivo CV
                        </label>
                        <div class="col-6">
                          <input
                            type="file"
                            name="fileCv"
                            id="fileCv"
                            class="form-control here"
                            value={fileCv}
                            onChange={inputHandler}
                          />
                        </div>
                      </div>
                      <div class="form-group row">
                        <label for="country" class="col-4 col-form-label">
                          Pais
                        </label>
                        <div class="col-6">
                          <input
                            type="text"
                            name="country"
                            id="country"
                            class="form-control here"
                            placeholder="Pais"
                            value={country}
                            onChange={inputHandler}
                          />
                        </div>
                      </div>
                      <div class="form-group row">
                        <label for="country" class="col-4 col-form-label">
                          Provincia
                        </label>
                        <div class="col-6">
                          <input
                            type="text"
                            name="province"
                            id="province"
                            class="form-control here"
                            placeholder="Provincia"
                            value={province}
                            onChange={inputHandler}
                          />
                        </div>
                      </div>
                      <div class="form-group row">
                        <label for="country" class="col-4 col-form-label">
                          Localidad
                        </label>
                        <div class="col-6">
                          <input
                            type="text"
                            name="location"
                            id="location"
                            class="form-control here"
                            placeholder="Localidad"
                            value={location}
                            onChange={inputHandler}
                          />
                        </div>
                      </div>
                      <div class="form-group">
                        <div class="offset col-md-10 mt-5">
                          <button onClick={dataValidation} className="btn">
                            Guardar y Continuar
                          </button>
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

export default PersonalData;
