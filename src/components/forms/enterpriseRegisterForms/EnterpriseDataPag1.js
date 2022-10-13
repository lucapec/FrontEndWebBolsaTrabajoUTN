import { useState } from "react";
import "./EnterpriseData.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EnterpriseDataPag1 = ({ setBoolPage2, setData }) => {
  const [businessName, setBusinessName] = useState();
  const [postalCode, setPostalcode] = useState();
  const [cuit, setCuit] = useState();
  const [telephoneNumber, setTelephoneNumber] = useState();
  const [sector, setSector] = useState();
  const [webURL, setWebURL] = useState();
  const [legalAdress, setLegalAdress] = useState();

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

  const submitHandler = () => {
    if (
      businessName &&
      postalCode &&
      cuit &&
      telephoneNumber &&
      sector &&
      legalAdress
    ) {
      const datos = {
        CompanyName: businessName,
        PostalCode: postalCode,
        Cuit: cuit,
        TelephoneNumber: telephoneNumber,
        Sector: sector,
        Web: webURL,
        LegalAdress: legalAdress,
      };
      setData(datos);
      setBoolPage2(true);
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
              placeholder="sin guiones"
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
              onChange={inputHandler}
              value={sector}
            />
          </div>
          <div className="col">
            <label>Web (opcional)</label>
            <br />
            <input
              className="form-control-sm"
              type="text"
              id="web"
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
              onChange={inputHandler}
              value={legalAdress}
            />
          </div>
          <div className="col"></div>
          <br />
        </div>
        <button type="button" className="btn" onClick={submitHandler}>
          Guardar
        </button>
      </form>
    </>
  );
};

export default EnterpriseDataPag1;
