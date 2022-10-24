import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

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
    FirstName :firstName,
    LastName: lastName,
    email,
    DocumentType: documentType,
    Dni: documentNumber,
    Legajo:legajo,
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
      <div className="form">
        <form className=" mt-3">
          <div className="title">
            <h2>Complete los datos personales</h2>
          </div>
          <div className=" container ">
            <div className="row row-cols-4">
              <div className="col form-field align-items-center">
                <label>Nombre</label>
                <br />
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  className="form-control-sm"
                  value={firstName}
                  placeholder="Nombre"
                  onChange={inputHandler}
                />
              </div>
              <div className="col form-field align-items-center">
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
              <div className=" col form-field align-items-center">
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
              <div className=" col form-field align-items-center">
                <label>Tipo y Nro Documento</label>
                <br />
                <select
                  id="documentType"
                  className="form-control-sm"
                  name="documentType"
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
                  value={documentNumber}
                  placeholder="Numero de Documento"
                  onChange={inputHandler}
                />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row row-cols-4">
              <div className=" col form-field align-items-center ">
                <label>Legajo</label>
                <br />
                <input
                  type="number"
                  name="legajo"
                  id="legajo"
                  className="form-control-sm"
                  value={legajo}
                  placeholder="Legajo"
                  onChange={inputHandler}
                />
              </div>
              <div className=" col form-field align-items-center">
                <label>Fecha de Nacimiento</label>
                <br />
                <input
                  type="date"
                  name="birthDate"
                  id="birthDate"
                  className="form-control-sm"
                  value={birthDate}
                  placeholder="Fecha de Nacimiento"
                  onChange={inputHandler}
                />
              </div>
              <div className=" col form-field align-items-center">
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

              <div className="col form-field align-items-center">
                <label>CUIL o CUIT</label>
                <br />
                <input
                  type="number"
                  name="cuilOrCuit"
                  id="cuilOrCuit"
                  className="form-control-sm"
                  value={cuilOrCuit}
                  placeholder="CUIL o CUIT (Sin guiones) "
                  onChange={inputHandler}
                />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row row-cols-4">
              <div className=" col form-field align-items-center">
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
              <div className=" col form-field align-items-center">
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
              <div className=" col form-field align-items-center">
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
              <div className=" col form-field align-items-center">
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
          <div className="container">
            <div className="row row-cols-4">
              <div className=" col form-field align-items-center">
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
              <div className=" col form-field align-items-center">
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
              <div className=" col form-field align-items-center">
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
            </div>
          </div>
          <div className="container">
            <div className="col-md-12 text-center">
              <button onClick={dataValidation} className="btn">
                Guardar y continuar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PersonalData;
