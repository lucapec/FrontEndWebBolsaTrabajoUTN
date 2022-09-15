import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

import "./PersonalData.css";

const PersonalData = () => {
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
  const [errors, setErrors] = useState(null);

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
    if (!Number(documentNumber)) {
      errorsList.push({ message: "El Documento debe ser un numero" });
    }
    if (!Number(legajo)) {
      errorsList.push({ message: "El legajo debe ser un numero" });
    }
    return errorsList;
  };

  const validationRequirements = {
    user: { required: true },
    lastName: { required: true },
    birthDate: { required: true },
    names: { required: true },
    cuilOrCuit: { required: true },
    street: { required: true },
    numberStreet: { required: true },
    sex: { required: true },
    fileCv: { required: true },
    country: { required: true },
    province: { required: true },
    location: { required: true },
    personalPhone: { required: true },
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
      user,
      lastName,
      birthDate,
      names,
      cuilOrCuit,
      street,
      numberStreet,
      sex,
      fileCv,
      country,
      province,
      location,
      personalPhone,
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
    <div className="divFormPersonal">
      <header></header>
      <ToastContainer className="mt-5" />
      <form className=" mt-3">
        <div className="title">
          <p>Complete los datos personales</p>
        </div>
        <div className=" container ">
          <div className="row row-cols-4">
            <div className=" col form-field align-items-center ">
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
                onBlur={(e) => {
                  setErrors(validate(generateObject()));
                }}
              />
              {errors?.user && <div className="error"> {errors.user} </div>}
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
                onBlur={(e) => {
                  setErrors(validate(generateObject()));
                }}
              />
              {errors?.lastName && (
                <div className="error"> {errors.lastName} </div>
              )}
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
            <div className=" col form-field align-items-center ">
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
            <div className=" col form-field align-items-center">
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
                onBlur={(e) => {
                  setErrors(validate(generateObject()));
                }}
              />
              {errors?.lastName && (
                <div className="error"> {errors.lastName} </div>
              )}
            </div>
            <div className=" col form-field align-items-center">
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
                onBlur={(e) => {
                  setErrors(validate(generateObject()));
                }}
              />
              {errors?.names && <div className="error"> {errors.names} </div>}
            </div>
            <div className="col form-field align-items-center">
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
                onBlur={(e) => {
                  setErrors(validate(generateObject()));
                }}
              />
              {errors?.cuilOrCuit && (
                <div className="error"> {errors.cuilOrCuit} </div>
              )}
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
                onBlur={(e) => {
                  setErrors(validate(generateObject()));
                }}
              />
              {errors?.street && <div className="error"> {errors.street} </div>}
            </div>
            <div className=" col form-field align-items-center">
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
                onBlur={(e) => {
                  setErrors(validate(generateObject()));
                }}
              />
              {errors?.numberStreet && (
                <div className="error"> {errors.numberStreet} </div>
              )}
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
                onBlur={(e) => {
                  setErrors(validate(generateObject()));
                }}
              />
              {errors?.sex && <div className="error"> {errors.sex} </div>}
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
                onBlur={(e) => {
                  setErrors(validate(generateObject()));
                }}
              />
              {errors?.fileCv && <div className="error"> {errors.fileCv} </div>}
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
                onBlur={(e) => {
                  setErrors(validate(generateObject()));
                }}
              />
              {errors?.country && (
                <div className="error"> {errors.country} </div>
              )}
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
                onBlur={(e) => {
                  setErrors(validate(generateObject()));
                }}
              />
              {errors?.province && (
                <div className="error"> {errors.province} </div>
              )}
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
                onBlur={(e) => {
                  setErrors(validate(generateObject()));
                }}
              />
              {errors?.location && (
                <div className="error"> {errors.location} </div>
              )}
            </div>
            <div className=" col form-field align-items-center">
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
                onBlur={(e) => {
                  setErrors(validate(generateObject()));
                }}
              />
              {errors?.personalPhone && (
                <div className="error"> {errors.personalPhone} </div>
              )}
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
  );
};

export default PersonalData;
