import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import "./CompanyData.css";
import "react-toastify/dist/ReactToastify.css";


const CompanyDataPag1 = ({setBoolPage2, UpdateData }) => {

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

  const submitHandler = () => {
    if (businessName && postalCode && cuit && telephoneNumber && sector && legalAdress) 
    {
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
    <>
      <ToastContainer className="mt-5" />
      <form className="form">
        <div className="header">
          <h2>Complete los datos de la empresa</h2>
        </div>
        <div className="row">
          <div className="col">
            <label>Razon social</label>
            <br />
            <input
              className="form-control-sm"
              type="text"
              id="businessName"
              placeholder="Razon Social"
              onChange={inputHandler}
              value={businessName}
            />
          </div>
          <div className="col">
            <label>Codigo postal</label>
            <br />
            <input
              className="form-control-sm"
              type="number"
              id="postalCode"
              placeholder="Codigo Postal"
              onChange={inputHandler}
              value={postalCode}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label>CUIT</label>
            <br />
            <input
              className="form-control-sm"
              type="number"
              placeholder=" CUIT (Sin guiones)"
              id="cuit"
              onChange={inputHandler}
              value={cuit}
            />
          </div>
          <div className="col">
            <label>Telefono</label>
            <br />
            <input
              className="form-control-sm"
              type="number"
              id="telephone"
              placeholder="codigo de area + numero"
              onChange={inputHandler}
              value={telephoneNumber}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label>Rubro</label>
            <br />
            <input
              className="form-control-sm"
              type="text"
              id="sector"
              placeholder="Rubro"
              onChange={inputHandler}
              value={sector}
            />
          </div>
          <div className="col">
            <label>Web</label>
            <br />
            <input
              className="form-control-sm"
              type="text"
              id="web"
              placeholder="Web (Opcional)"
              onChange={inputHandler}
              value={webURL}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label>Domicilio Legal</label>
            <br />
            <input
              className="form-control-sm"
              type="text"
              id="legalAdress"
              placeholder="Domicilio Legal"
              onChange={inputHandler}
              value={legalAdress}
            />
          </div>
          <div className="col"></div>
          <br />
        </div>
        <button type="button" className="boton" onClick={submitHandler}>
          Guardar
        </button>
      </form>
    </>
  );
};

export default CompanyDataPag1;
