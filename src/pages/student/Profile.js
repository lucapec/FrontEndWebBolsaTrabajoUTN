import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserContext from "../../context/UserContext";
import utnLogo from "../../assets/logo-utn.png";

import "./Profile.css";

const Profile = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [documentType, setDocumentType] = useState("");
  const [documentNumber, setDocumentNumber] = useState("");
  const [legajo, setLegajo] = useState("");
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
        githubURL &&
        linkedinURL &&
        street &&
        numberStreet &&
        sex &&
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

  useEffect(() => {
    fetch("https://localhost:7172/api/UsersInfo/Student", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setStudentData(data);
      });
  }, [jwt]);

  useEffect(() => {
    setFirstName(studentData.firstName);
    setLastName(studentData.lastName);
    setEmail(studentData.email);
    setDocumentType(studentData.documentType);
    setDocumentNumber(studentData.dni);
    setLegajo(studentData.legajo);
    setBirthDate(studentData.birthDate);
    setCuilOrCuit(studentData.cuil);
    setGithubURL(studentData.githubProfileURL);
    setLinkedinURL(studentData.linkedinProfileURL);
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

  const inputHandler = (e) => {
    switch (e.target.id) {
      case "firstName":
        setFirstName(e.target.value);
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

  const updateData = {
    GithubProfileURL: githubURL,
    LinkedinProfileURL: linkedinURL,
    Address: street,
    AddressNum: numberStreet,
    Email: email,
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
      <header></header>
      <ToastContainer className="mt-5" />
      <div className="container">
        <div className="row">
          <div className="col-md-11">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-13">
                    <h3>Editar Perfil</h3>
                    <hr />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 ">
                    <form className="formProfile">
                      <div className="form-group row">
                        <label className="col-4 col-form-label">Nombre</label>
                        <div className="col-6">
                          <input
                            type="text"
                            name="firstName"
                            id="firstName"
                            className="form-control here"
                            placeholder="Nombre"
                            readOnly
                            value={firstName}
                            onChange={inputHandler}
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-4 col-form-label">Apellido</label>
                        <div className="col-6">
                          <input
                            type="text"
                            name="lastName"
                            id="lastName"
                            className="form-control here"
                            placeholder="Apellido"
                            readOnly
                            value={lastName}
                            onChange={inputHandler}
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-4 col-form-label">Email</label>
                        <div className="col-6">
                          <input
                            type="text"
                            name="email"
                            id="email"
                            className="form-control here"
                            placeholder="Email"
                            readOnly
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
                            readOnly
                            value={documentType}
                            onChange={inputHandler}
                          >
                            <option value={"Seleccionar"}>Seleccionar</option>
                            <option value={"DocumentoUnico"}>
                              Documento Unico
                            </option>
                            <option value={"LibretaCivica"}>
                              Libreta Civica
                            </option>
                            <option value={"LibretaDeEnrolamiento"}>
                              Libreta de Enrolamiento
                            </option>
                            <option value={"Pasaporte"}>Pasaporte</option>
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
                        <label className="col-4 col-form-label">Legajo</label>
                        <div className="col-6">
                          <input
                            type="number"
                            name="legajo"
                            id="legajo"
                            className="form-control here"
                            placeholder="Legajo"
                            readOnly
                            value={legajo}
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
                            type="text"
                            name="birthDate"
                            id="birthDate"
                            className="form-control here"
                            readOnly
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
                            readOnly
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
                      <div className="form-group row">
                        <label className="col-4 col-form-label">
                          Especialidad
                        </label>
                        <div className="col-6">
                          <input
                            type="text"
                            name="specialty"
                            id="specialty"
                            className="form-control here"
                            placeholder="Especialidad"
                            value={specialty}
                            onChange={inputHandler}
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-4 col-form-label">
                          Cantidad de materias aprobadas
                        </label>
                        <div className="col-6">
                          <input
                            type="number"
                            name="subjectsApproved"
                            id="subjectsApproved"
                            className="form-control here"
                            placeholder="Materias Aprobadas"
                            value={subjectsApproved}
                            onChange={inputHandler}
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-4 col-form-label">
                          Plan Especialidad
                        </label>
                        <div className="col-6">
                          <input
                            type="text"
                            name="specialtyPlan"
                            id="specialtyPlan"
                            className="form-control here"
                            placeholder="Plan Especialidad"
                            value={specialtyPlan}
                            onChange={inputHandler}
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-4 col-form-label">
                          Año que Cursa
                        </label>
                        <div className="col-6">
                          <input
                            type="number"
                            name="currentYear"
                            id="currentYear"
                            className="form-control here"
                            placeholder="Año que Cursa"
                            value={currentYear}
                            onChange={inputHandler}
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-4 col-form-label">
                          Turno que cursa
                        </label>
                        <div className="col-6">
                          <select
                            id="shiftProgress"
                            name="shiftProgress"
                            className="form-control here"
                            placeholder="Turno que cursa"
                            value={shiftProgress}
                            onChange={inputHandler}
                          >
                            <option value={"Seleccionar"}>Seleccionar</option>
                            <option value={"Mañana"}>Mañana</option>
                            <option value={"Tarde"}>Tarde</option>
                            <option value={"Noche"}>Noche</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-4 col-form-label">
                          Promedio con Aplazos
                        </label>
                        <div className="col-6">
                          <input
                            type="number"
                            name="averagesWithDeferrals"
                            id="averagesWithDeferrals"
                            className="form-control here"
                            placeholder="Promedio con Aplazos"
                            value={averagesWithDeferrals}
                            onChange={inputHandler}
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-4 col-form-label">
                          Promedio sin Aplazos
                        </label>
                        <div className="col-6">
                          <input
                            type="number"
                            name="averagesWithoutDeferrals"
                            id="averagesWithoutDeferrals"
                            className="form-control here"
                            placeholder="Promedio sin Aplazos"
                            value={averagesWithoutDeferrals}
                            onChange={inputHandler}
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="offset col-md-10 mt-5">
                          <button onClick={dataValidation} className="btn">
                            Guardar Cambios
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

export default Profile;
