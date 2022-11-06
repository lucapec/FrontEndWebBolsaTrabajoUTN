import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

import utnLogo from "../../../assets/logo-utn.png";

import "./PersonalData.css";

const PersonalData = ({ setboolUniversityData, UpdateData }) => {
  const [email, setEmail] = useState("");
  const [documentType, setDocumentType] = useState("");
  const [documentNumber, setDocumentNumber] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [cuilOrCuit, setCuilOrCuit] = useState("");
  const [githubURL, setGithubURL] = useState("");
  const [linkedinURL, setLinkedinURL] = useState("");
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
        email &&
        documentType &&
        documentNumber &&
        birthDate &&
        cuilOrCuit &&
        githubURL &&
        linkedinURL &&
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
    Email: email,
    DocumentType: documentType,
    Dni: documentNumber,
    BirthDate: birthDate,
    Cuil: cuilOrCuit,
    GithubProfileURL: githubURL,
    LinkedinProfileURL: linkedinURL,
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
      case "email":
        setEmail(e.target.value);
        break;
      case "documentType":
        setDocumentType(e.target.value);
        break;
      case "documentNumber":
        setDocumentNumber(e.target.value);
        break;
      case "birthDate":
        setBirthDate(e.target.value);
        break;
      case "cuilOrCuit":
        setCuilOrCuit(e.target.value);
        break;
      case "githubURL":
        setGithubURL(e.target.value);
        break;
      case "linkedinURL":
        setLinkedinURL(e.target.value);
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
        <div className="row">
          <div className="col-md-11">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-13">
                    <h3>Complete los datos personales</h3>
                    <hr />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <form className="formProfile">
                      <div className="form-group row">
                        <label className="col-4 col-form-label">Email</label>
                        <div className="col-6">
                          <input
                            type="text"
                            name="email"
                            id="email"
                            className="form-control here"
                            placeholder="Email"
                            value={email}
                            onChange={inputHandler}
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-4 col-form-label">
                          Tipo y Numero de Documento
                        </label>
                        <div className="col-6">
                          <select
                            id="documentType"
                            name="documentType"
                            className="form-control here"
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
                            className="form-control here"
                            placeholder="Numero de Documento"
                            value={documentNumber}
                            onChange={inputHandler}
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-4 col-form-label">
                          Fecha de Nacimiento
                        </label>
                        <div className="col-6">
                          <input
                            type="date"
                            name="birthDate"
                            id="birthDate"
                            className="form-control here"
                            value={birthDate}
                            onChange={inputHandler}
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-4 col-form-label">
                          Numero de Telefono
                        </label>
                        <div className="col-6">
                          <input
                            type="number"
                            name="personalPhone"
                            id="personalPhone"
                            className="form-control here"
                            placeholder="Numero de Telefono"
                            value={personalPhone}
                            onChange={inputHandler}
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-4 col-form-label">
                          CUIL O CUIT
                        </label>
                        <div className="col-6">
                          <input
                            type="number"
                            name="cuilOrCuit"
                            id="cuilOrCuit"
                            className="form-control here"
                            value={cuilOrCuit}
                            placeholder="CUIL o CUIT (Sin guiones) "
                            onChange={inputHandler}
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-4 col-form-label">
                          URL Perfil Linkedin
                        </label>
                        <div className="col-6">
                          <input
                            type="text"
                            name="linkedinURL"
                            id="linkedinURL"
                            className="form-control here"
                            placeholder="URL Perfil Linkedin"
                            value={linkedinURL}
                            onChange={inputHandler}
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-4 col-form-label">
                          URL Perfil Github
                        </label>
                        <div className="col-6">
                          <input
                            type="text"
                            name="githubURL"
                            id="githubURL"
                            className="form-control here"
                            placeholder="URL Perfil Github"
                            value={githubURL}
                            onChange={inputHandler}
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-4 col-form-label">Calle</label>
                        <div className="col-6">
                          <input
                            type="text"
                            name="street"
                            id="street"
                            className="form-control here"
                            placeholder="Calle"
                            value={street}
                            onChange={inputHandler}
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-4 col-form-label">
                          Numero de Calle
                        </label>
                        <div className="col-6">
                          <input
                            type="number"
                            name="numberStreet"
                            id="numberStreet"
                            className="form-control here"
                            placeholder="Numero de Calle"
                            value={numberStreet}
                            onChange={inputHandler}
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-4 col-form-label">Sexo</label>
                        <div className="col-6">
                          <input
                            type="text"
                            name="sex"
                            id="sex"
                            className="form-control here"
                            placeholder="Sexo"
                            value={sex}
                            onChange={inputHandler}
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-4 col-form-label">
                          Archivo CV
                        </label>
                        <div className="col-6">
                          <input
                            type="file"
                            name="fileCv"
                            id="fileCv"
                            className="form-control here"
                            value={fileCv}
                            onChange={inputHandler}
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-4 col-form-label">Pais</label>
                        <div className="col-6">
                          <input
                            type="text"
                            name="country"
                            id="country"
                            className="form-control here"
                            placeholder="Pais"
                            value={country}
                            onChange={inputHandler}
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-4 col-form-label">
                          Provincia
                        </label>
                        <div className="col-6">
                          <input
                            type="text"
                            name="province"
                            id="province"
                            className="form-control here"
                            placeholder="Provincia"
                            value={province}
                            onChange={inputHandler}
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-4 col-form-label">
                          Localidad
                        </label>
                        <div className="col-6">
                          <input
                            type="text"
                            name="location"
                            id="location"
                            className="form-control here"
                            placeholder="Localidad"
                            value={location}
                            onChange={inputHandler}
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="offset col-md-10 mt-5">
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
