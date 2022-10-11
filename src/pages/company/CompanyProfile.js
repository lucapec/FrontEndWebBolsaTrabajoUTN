import { useState } from "react";

import utnLogo from "../../assets/logo-utn.png";

import "./CompanyProfile.css";

const CompanyProfile = () => {
  const [businessName, setBusinessName] = useState();
  const [postalCode, setPostalcode] = useState();
  const [cuit, setCuit] = useState();
  const [telephoneNumber, setTelephoneNumber] = useState();
  const [sector, setSector] = useState();
  const [webURL, setWebURL] = useState();
  const [legalAdress, setLegalAdress] = useState();
  const [nameContact, setNameContact] = useState("");
  const [emailContact, setEmailContact] = useState("");
  const [positionContact, setPositionContact] = useState("");
  const [telephoneNumberContact, setTelephoneNumberContact] = useState();
  const [relWithCompanyContact, setRelWithCompanyContact] = useState();

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
      case "telephone":
        setTelephoneNumber(e.target.value);
        break;
      case "sector":
        setSector(e.target.value);
        break;
      case "web":
        setWebURL(e.target.value);
        break;
      case "legalAdress":
        setLegalAdress(e.target.value);
        break;
      case "nameContact":
        setNameContact(e.target.value);
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

  return (
    <div className="divFormProfileCompany">
      <div id="form" className="form">
        <form className=" mt-3">
          <div id="divForm" className="container">
            <div id="row" className="row row-cols-4">
              <div className=" col form-group align-items-center ">
                <label>Razon Social</label>
                <br />
                <input
                  type="text"
                  name="businessName"
                  id="businessName"
                  className="form-control-sm"
                  value={businessName}
                  placeholder="Razon Social"
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
                  placeholder="Codigo Postal"
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
                  readOnly
                  disabled
                  value={cuit}
                  placeholder="CUIT"
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
                  placeholder="Telefono"
                  onChange={inputHandler}
                />
              </div>
            </div>
          </div>
          <div className="container">
            <div id="row" className="row row-cols-4">
              <div className=" col form-group align-items-center ">
                <label>Rubro</label>
                <br />
                <input
                  type="text"
                  name="sector"
                  id="sector"
                  className="form-control-sm"
                  value={sector}
                  placeholder="Rubro"
                  onChange={inputHandler}
                />
              </div>
              <div className=" col form-group align-items-center">
                <label>Web</label>
                <br />
                <input
                  type="text"
                  name="webURL"
                  id="webURL"
                  className="form-control-sm"
                  value={webURL}
                  placeholder="Web"
                  onChange={inputHandler}
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
                  placeholder="Domicilio Legal"
                  onChange={inputHandler}
                />
              </div>
              <div className="col form-group align-items-center">
                <label>Nombre y Apellido del Contacto</label>
                <br />
                <input
                  type="text"
                  name="nameContact"
                  id="nameContact"
                  className="form-control-sm"
                  value={nameContact}
                  placeholder="Nombre y Apellido"
                  onChange={inputHandler}
                />
              </div>
            </div>
          </div>
          <div className="container">
            <div id="row" className="row row-cols-4">
              <div className=" col form-group align-items-center">
                <label>Email de Contacto</label>
                <br />
                <input
                  type="text"
                  name="emailContact"
                  id="emailContact"
                  className="form-control-sm"
                  value={emailContact}
                  placeholder="Email"
                  onChange={inputHandler}
                />
              </div>
              <div className=" col form-group align-items-center">
                <label>Puesto / Cargo del Contacto</label>
                <br />
                <input
                  type="text"
                  name="positionContact"
                  id="positionContact"
                  className="form-control-sm"
                  value={positionContact}
                  placeholder="Puesto / Cargo"
                  onChange={inputHandler}
                />
              </div>
              <div className=" col form-group align-items-center">
                <label>Telefono de Contacto</label>
                <br />
                <input
                  type="number"
                  name="telephoneNumberContact"
                  id="telephoneNumberContact"
                  className="form-control-sm"
                  value={telephoneNumberContact}
                  placeholder="Telefono"
                  onChange={inputHandler}
                />
              </div>
              <div className=" col form-group align-items-center">
                <label>Relacion del Contacto con la Empresa</label>
                <br />
                <p>
                  <input
                    type="radio"
                    name="relacion"
                    id="relacion"
                    className="form-check-input"
                    value={"en-empresa"}
                  />
                  Trabajo para la empresa solicitante
                </p>
                <div className="divInputCompany">
                  <p>
                    <input
                      type="radio"
                      name="relacion"
                      id="relacion"
                      className="form-check-input"
                      value={"en-consultora"}
                    />
                    Trabajo para una consultora
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="col-md-12">
              <button id="btnCompany" className="btn">
                Editar Perfil
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
