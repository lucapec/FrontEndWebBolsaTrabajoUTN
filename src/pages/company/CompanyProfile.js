import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../context/UserContext";
import utnLogo from "../../assets/logo-utn.png";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./CompanyProfile.css";
import "../../components/forms/Forms.css";

const CompanyProfile = () => {
  const [businessName, setBusinessName] = useState("");
  const [postalCode, setPostalcode] = useState();
  const [cuit, setCuit] = useState();
  const [telephoneNumber, setTelephoneNumber] = useState();
  const [sector, setSector] = useState("");
  const [webURL, setWebURL] = useState("");
  const [legalAdress, setLegalAdress] = useState("");
  const [nameContact, setNameContact] = useState("");
  const [lastnameContact, setLastnameContact] = useState();
  const [emailContact, setEmailContact] = useState("");
  const [positionContact, setPositionContact] = useState("");
  const [telephoneNumberContact, setTelephoneNumberContact] = useState("");
  const [relWithCompanyContact, setRelWithCompanyContact] = useState("");
  const [companyData, setCompanyData] = useState({});

  const { jwt } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://localhost:7172/api/UsersInfo/Company", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setCompanyData(data));
  }, [jwt]);

  useEffect(() => {
    setBusinessName(companyData.companyName);
    setPostalcode(companyData.postalCode);
    setCuit(companyData.cuit);
    setTelephoneNumber(companyData.telephoneNumber);
    setSector(companyData.sector);
    setWebURL(companyData.web);
    setLegalAdress(companyData.legalAdress);
    setNameContact(companyData.recruiterName);
    setLastnameContact(companyData.recruiterLastName);
    setEmailContact(companyData.recruiterEmail);
    setPositionContact(companyData.recruiterPosition);
    setTelephoneNumberContact(companyData.recruiterPhoneNumber);
    setRelWithCompanyContact(companyData.recruiterRelWithCompany);
  }, [companyData]);

  const inputHandler = (e) => {
    switch (e.target.id) {
      case "businessName":
        setBusinessName(e.target.value);
        break;
      case "postalCode":
        setPostalcode(e.target.value);
        break;
      case "cuit":
        setCuit(e.target.value);
        break;
      case "telephoneNumber":
        setTelephoneNumber(e.target.value);
        break;
      case "sector":
        setSector(e.target.value);
        break;
      case "webURL":
        setWebURL(e.target.value);
        break;
      case "legalAdress":
        setLegalAdress(e.target.value);
        break;
      case "nameContact":
        setNameContact(e.target.value);
        break;
      case "lastnameContact":
        setLastnameContact(e.target.value);
        break;
      case "emailContact":
        setEmailContact(e.target.value);
        break;
      case "positionContact":
        setPositionContact(e.target.value);
        break;
      case "telephoneNumberContact":
        setTelephoneNumberContact(e.target.value);
        break;
      case "relWithCompanyContact":
        setRelWithCompanyContact(e.target.value);
        break;
      default:
        break;
    }
  };

  const updateData = {
    PostalCode: postalCode,
    Cuit: cuit,
    TelephoneNumber: telephoneNumber,
    Sector: sector,
    Web: webURL,
    LegalAdress: legalAdress,
    RecruiterName: nameContact,
    RecruiterLastName: lastnameContact,
    RecruiterEmail: emailContact,
    RecruiterPosition: positionContact,
    RecruiterPhoneNumber: telephoneNumberContact,
    RecruiterRelWithCompany: relWithCompanyContact,
  };

  const SaveChangesBtn = (e) => {
    e.preventDefault();
    if (
      postalCode &&
      sector &&
      telephoneNumber &&
      legalAdress &&
      nameContact &&
      lastnameContact &&
      positionContact &&
      telephoneNumberContact &&
      relWithCompanyContact
    ) {
      if (
        emailContact
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          )
      ) {
        fetch("https://localhost:7172/api/UsersInfo/UpdateDataCompany", {
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
              navigate("/ofertasEmpresa");
            }, 3000)
          )
          .catch((err) => {
            console.log(err.message);
          });
      } else {
        toast("Ingrese un email valido", {
          autoClose: 3000,
          hideProgressBar: false,
          type: "error",
          theme: "dark",
          position: toast.POSITION.TOP_LEFT,
        });
      }
    } else {
      toast("Complete todos los campos", {
        autoClose: 3000,
        hideProgressBar: false,
        type: "warning",
        theme: "dark",
        position: toast.POSITION.TOP_LEFT,
      });
    }
  };

  return (
    <div className="divFormProfileCompany">
      <header></header>
      <div className="container">
        <ToastContainer className="mt-5" />
        <div class="row">
          <div class="col-md-11">
            <div class="card">
              <div class="card-body">
                <div class="row">
                  <div class="col-md-13">
                    <h3>Editar Perfil</h3>
                    <hr />
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <form className="formProfile">
                      <div class="form-group row">
                        <label for="businessName" class="col-4 col-form-label">
                          Razon Social
                        </label>
                        <div class="col-6">
                          <input
                            className="form-control here"
                            placeholder="Razon Social"
                            readOnly
                            type="text"
                            id="businessName"
                            onChange={inputHandler}
                            value={businessName}
                          />
                        </div>
                      </div>
                      <div class="form-group row">
                        <label for="postalCode" class="col-4 col-form-label">
                          Codigo Postal
                        </label>
                        <div class="col-6">
                          <input
                            className="form-control here"
                            placeholder="Codigo Postal"
                            type="number"
                            id="postalCode"
                            onChange={inputHandler}
                            value={postalCode}
                          />
                        </div>
                      </div>
                      <div class="form-group row">
                        <label for="cuit" class="col-4 col-form-label">
                          CUIT
                        </label>
                        <div class="col-6">
                          <input
                            className="form-control here"
                            type="number"
                            placeholder="CUIT (Sin guiones)"
                            readOnly
                            id="cuit"
                            onChange={inputHandler}
                            value={cuit}
                          />
                        </div>
                      </div>
                      <div class="form-group row">
                        <label
                          for="telephoneNumber"
                          class="col-4 col-form-label"
                        >
                          Telefono
                        </label>
                        <div class="col-6">
                          <input
                            className="form-control here"
                            type="number"
                            id="telephoneNumber"
                            placeholder="Codigo de area + numero"
                            onChange={inputHandler}
                            value={telephoneNumber}
                          />
                        </div>
                      </div>
                      <div class="form-group row">
                        <label for="sector" class="col-4 col-form-label">
                          Rubro
                        </label>
                        <div class="col-6">
                          <input
                            className="form-control here"
                            placeholder="Rubro"
                            type="text"
                            id="sector"
                            onChange={inputHandler}
                            value={sector}
                          />
                        </div>
                      </div>
                      <div class="form-group row">
                        <label for="legalAdress" class="col-4 col-form-label">
                          Domicilio Legal
                        </label>
                        <div class="col-6">
                          <input
                            className="form-control here"
                            placeholder="Domicilio Legal"
                            type="text"
                            id="legalAdress"
                            onChange={inputHandler}
                            value={legalAdress}
                          />
                        </div>
                      </div>
                      <div class="form-group row">
                        <label for="webURL" class="col-4 col-form-label">
                          Web (opcional)
                        </label>
                        <div class="col-6">
                          <input
                            className="form-control here"
                            placeholder="Web"
                            type="text"
                            id="webURL"
                            onChange={inputHandler}
                            value={webURL}
                          />
                        </div>
                      </div>
                      <div class="form-group row">
                        <label for="nameContact" class="col-4 col-form-label">
                          Nombres del Contacto
                        </label>
                        <div class="col-6">
                          <input
                            className="form-control here"
                            placeholder="Nombres del Contacto"
                            type="text"
                            id="nameContact"
                            onChange={inputHandler}
                            value={nameContact}
                          />
                        </div>
                      </div>
                      <div class="form-group row">
                        <label
                          for="lastnameContact"
                          class="col-4 col-form-label"
                        >
                          Apellido del Contacto
                        </label>
                        <div class="col-6">
                          <input
                            className="form-control here"
                            placeholder="Apellido del Contacto"
                            type="text"
                            id="lastnameContact"
                            onChange={inputHandler}
                            value={lastnameContact}
                          />
                        </div>
                      </div>
                      <div class="form-group row">
                        <label for="emailContact" class="col-4 col-form-label">
                          Email de Contacto
                        </label>
                        <div class="col-6">
                          <input
                            className="form-control here"
                            placeholder="Email"
                            type="email"
                            id="emailContact"
                            onChange={inputHandler}
                            value={emailContact}
                          />
                        </div>
                      </div>
                      <div class="form-group row">
                        <label
                          for="positionContact"
                          class="col-4 col-form-label"
                        >
                          Puesto / Cargo del Contacto
                        </label>
                        <div class="col-6">
                          <input
                            className="form-control here"
                            placeholder="Puesto / Cargo"
                            type="text"
                            id="positionContact"
                            onChange={inputHandler}
                            value={positionContact}
                          />
                        </div>
                      </div>
                      <div class="form-group row">
                        <label
                          for="telephoneNumberContact"
                          class="col-4 col-form-label"
                        >
                          Telefono del Contacto
                        </label>
                        <div class="col-6">
                          <input
                            className="form-control here"
                            type="number"
                            placeholder="Codigo de area + número"
                            id="telephoneNumberContact"
                            onChange={inputHandler}
                            value={telephoneNumberContact}
                          />
                        </div>
                      </div>
                      <div class="form-group row">
                        <label for="relacion" class="col-4 col-form-label">
                          Relacion con la Empresa
                        </label>
                        <div class="col-6">
                          <select
                            id="relWithCompanyContact"
                            className="form-control here"
                            name="relWithCompanyContact"
                            value={relWithCompanyContact}
                            onChange={inputHandler}
                          >
                            <option value={"Seleccionar"}>Seleccionar</option>
                            <option value={"inCompany"}>
                              Trabajo en la empresa
                            </option>
                            <option value={"outCompany"}>
                              Trabajo en una consultora
                            </option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <div className="btn-saveChanges offset mt-5 md-10">
                          <button onClick={SaveChangesBtn} className="btn">
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

export default CompanyProfile;
