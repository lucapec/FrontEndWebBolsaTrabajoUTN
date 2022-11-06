import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import utnLogo from "../../../assets/logo-utn.png";

import "./CompanyData.css";
import "react-toastify/dist/ReactToastify.css";

const CompanyDataPag1 = ({ setBoolPage2, UpdateData }) => {
  const [businessName, setBusinessName] = useState("");
  const [postalCode, setPostalcode] = useState("");
  const [cuit, setCuit] = useState("");
  const [telephoneNumber, setTelephoneNumber] = useState("");
  const [sector, setSector] = useState("");
  const [webURL, setWebURL] = useState("");
  const [legalAdress, setLegalAdress] = useState("");

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
      default:
        break;
    }
  };

  const datos = {
    CompanyName: businessName,
    PostalCode: postalCode,
    Cuit: cuit,
    TelephoneNumber: telephoneNumber,
    Sector: sector,
    Web: webURL,
    LegalAdress: legalAdress,
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      businessName &&
      postalCode &&
      cuit &&
      telephoneNumber &&
      sector &&
      legalAdress
    ) {
      setBoolPage2(true);
      UpdateData(datos);
    } else {
      toast("Los campos son oligatorios", {
        autoClose: 3000,
        hideProgressBar: false,
        type: "warning",
        theme: "dark",
        position: toast.POSITION.TOP_LEFT,
      });
    }
  };

  return (
    <div className="divFormCompanyData">
      <header></header>
      <div className="container">
        <ToastContainer className="mt-5" />
        <div className="row">
          <div className="col-md-11">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-13">
                    <h3>Complete los datos de la empresa</h3>
                    <hr />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <form className="formProfile">
                      <div className="form-group row">
                        <label className="col-4 col-form-label">
                          Razon Social
                        </label>
                        <div className="col-6">
                          <input
                            className="form-control here"
                            placeholder="Razon Social"
                            type="text"
                            id="businessName"
                            onChange={inputHandler}
                            value={businessName}
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-4 col-form-label">
                          Codigo Postal
                        </label>
                        <div className="col-6">
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
                      <div className="form-group row">
                        <label className="col-4 col-form-label">CUIT</label>
                        <div className="col-6">
                          <input
                            className="form-control here"
                            type="number"
                            placeholder="CUIT (Sin guiones)"
                            id="cuit"
                            onChange={inputHandler}
                            value={cuit}
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-4 col-form-label">Telefono</label>
                        <div className="col-6">
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
                      <div className="form-group row">
                        <label className="col-4 col-form-label">Rubro</label>
                        <div className="col-6">
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
                      <div className="form-group row">
                        <label className="col-4 col-form-label">
                          Domicilio Legal
                        </label>
                        <div className="col-6">
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
                      <div className="form-group row">
                        <label className="col-4 col-form-label">
                          Web (opcional)
                        </label>
                        <div className="col-6">
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
                      <div>
                        <div className="offset mt-5 md-10">
                          <button onClick={submitHandler} className="btn">
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
      </div>
    </footer>
  );
};

export default CompanyDataPag1;
