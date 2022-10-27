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
      <ToastContainer className="mt-5" />
      <div id="form" className="form">
        <form className=" mt-3">
          <div id="divForm" className="container">
            <div id="row1" className="row row-cols-4">
              <div className=" col form-group align-items-center ">
                <label>Razon Social</label>
                <br />
                <input
                  type="text"
                  name="businessName"
                  id="businessName"
                  className="form-control-sm"
                  value={businessName}
                  onChange={inputHandler}
                  readOnly
                />
              </div>
              <div className=" col form-group align-items-center">
                <label>Domicilio Legal</label>
                <br />
                <input
                  type="text"
                  name="legalAdress"
                  id="legalAdress"
                  className="form-control-sm"
                  value={legalAdress}
                  onChange={inputHandler}
                />
              </div>
              <div className="col form-group align-items-center">
                <label>Codigo Postal</label>
                <br />
                <input
                  type="number"
                  name="postalCode"
                  id="postalCode"
                  className="form-control-sm"
                  value={postalCode}
                  onChange={inputHandler}
                />
              </div>
              <div className=" col form-group align-items-center">
                <label>Telefono de la Empresa</label>
                <br />
                <input
                  type="number"
                  name="telephoneNumber"
                  id="telephoneNumber"
                  className="form-control-sm"
                  value={telephoneNumber}
                  placeholder="código area + número"
                  onChange={inputHandler}
                />
              </div>
            </div>
          </div>
          <div className="container">
            <div id="row2" className="row row-cols-4">
              <div className=" col form-group align-items-center ">
                <div className=" col form-group align-items-center">
                  <label>Web</label>
                  <br />
                  <input
                    type="text"
                    name="webURL"
                    id="webURL"
                    className="form-control-sm"
                    value={webURL}
                    onChange={inputHandler}
                  />
                </div>
              </div>
              <div className=" col form-group align-items-center ">
                <label>Rubro</label>
                <br />
                <input
                  type="text"
                  name="sector"
                  id="sector"
                  className="form-control-sm"
                  value={sector}
                  onChange={inputHandler}
                />
              </div>
              <div className=" col form-group align-items-center">
                <label>CUIT</label>
                <br />
                <input
                  type="number"
                  name="cuit"
                  id="cuit"
                  className="form-control-sm"
                  value={cuit}
                  onChange={inputHandler}
                  readOnly
                />
              </div>
              <div className=" col form-group align-items-center">
                <label>Nombre del Contacto</label>
                <br />
                <input
                  type="text"
                  name="nameContact"
                  id="nameContact"
                  className="form-control-sm"
                  value={nameContact}
                  onChange={inputHandler}
                />
              </div>
            </div>
          </div>
          <div className="container">
            <div id="row3" className="row row-cols-4">
              <div className=" col form-group align-items-center">
                <label>Apellido del Contacto</label>
                <br />
                <input
                  type="text"
                  name="lastnameContact"
                  id="lastnameContact"
                  className="form-control-sm"
                  value={lastnameContact}
                  onChange={inputHandler}
                />
              </div>
              <div className=" col form-group align-items-center">
                <label>Puesto/Cargo del Contacto</label>
                <br />
                <input
                  type="text"
                  name="positionContact"
                  id="positionContact"
                  className="form-control-sm"
                  value={positionContact}
                  onChange={inputHandler}
                />
              </div>
              <div className="col form-group align-items-center">
                <label>Email del Contacto</label>
                <br />
                <input
                  type="text"
                  name="emailContact"
                  id="emailContact"
                  className="form-control-sm"
                  value={emailContact}
                  onChange={inputHandler}
                />
              </div>
              <div className=" col form-group align-items-center">
                <label>Relación con la Empresa</label>
           
                <select
                  id="relWithCompanyContact"
                  className="form-control-sm"
                  name="relWithCompanyContact"
                  value={relWithCompanyContact}
                  onChange={inputHandler}
                >
                  <option value={"Seleccionar"}>Seleccionar</option>
                  <option value={"inCompany"}>Trabajo en la empresa</option>
                  <option value={"outCompany"}>
                    Trabajo en una consultora
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div className="container" id="row44">
            <div id="row4" className="row row-cols-4">
              <div className=" col form-group align-items-center">
                <label>Telefono de Contacto</label>
                <br />
                <input
                  type="number"
                  name="telephoneNumberContact"
                  id="telephoneNumberContact"
                  className="form-control-sm"
                  value={telephoneNumberContact}
                  placeholder="código area + número"
                  onChange={inputHandler}
                />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="col-md-12">
              <button id="btnCompany" className="btn" onClick={SaveChangesBtn}>
                Guardar Cambios
              </button>
            </div>
          </div>
        </form>
      </div>
      <footer className="footerCompany">
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
