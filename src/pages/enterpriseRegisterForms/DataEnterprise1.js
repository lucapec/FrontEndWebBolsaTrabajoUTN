import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import "./DataEnterprise1.css";
import LoginContext from "../../context/LoginContext";

const DataEnterprise1 = () => {
  const { EnterpriseDataHandler } = useContext(LoginContext);
  const navigate = useNavigate();

  const [businessName, setBusinessName] = useState();
  const [postalCode, setPostalcode] = useState();
  const [cuit, setCuit] = useState();
  const [telephoneNumber, setTelephoneNumber] = useState();
  const [sector, setSector] = useState();
  const [webURL, setWebURL] = useState();
  const [legalAdress, setLegalAdress] = useState();

  const businessNameHandler = (e) => {
    setBusinessName(e.target.value);
  };

  const postalCodeHandler = (e) => {
    setPostalcode(e.target.value);
  };

  const cuitValueHandler = (e) => {
    setCuit(e.target.value);
  };

  const telephoneNumberHandler = (e) => {
    setTelephoneNumber(e.target.value);
  };

  const sectorHandler = (e) => {
    setSector(e.target.value);
  };

  const webURLHandler = (e) => {
    setWebURL(e.target.value);
  };

  const legalAdressHandler = (e) => {
    setLegalAdress(e.target.value);
  };

  const submitHandler = () => {
    const datos = {
      businessName: businessName,
      postalCode: postalCode,
      cuit: cuit,
      telephone: telephoneNumber,
      sector: sector,
      web: webURL,
      Adress: legalAdress,
    };

    EnterpriseDataHandler(datos);

    //navigate("/EmpresaReg2", { replace: true });
  };

  return (
    <form class="form">
      <div class="header">
        <h2>Complete los datos de la empresa</h2>
      </div>
      <div class="row">
        <div class="col">
          <label>Razon social</label>
          <br />
          <input
            className="form-control-sm"
            type="text"
            onChange={businessNameHandler}
            value={businessName}
          />
        </div>
        <div class="col">
          <label>Codigo postal</label>
          <br />
          <input
            className="form-control-sm"
            type="number"
            onChange={postalCodeHandler}
            value={postalCode}
          />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <label>CUIT</label>
          <br />
          <input
            className="form-control-sm"
            type="number"
            placeholder="sin guiones"
            onChange={cuitValueHandler}
            value={cuit}
          />
        </div>
        <div class="col">
          <label>Telefono</label>
          <br />
          <input
            className="form-control-sm"
            type="number"
            placeholder="codigo de area + numero"
            onChange={telephoneNumberHandler}
            value={telephoneNumber}
          />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <label>Rubro</label>
          <br />
          <input
            className="form-control-sm"
            type="text"
            onChange={sectorHandler}
            value={sector}
          />
        </div>
        <div class="col">
          <label>Web (opcional)</label>
          <br />
          <input
            className="form-control-sm"
            type="text"
            onChange={webURLHandler}
            value={webURL}
          />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <label>Domicilio Legal</label>
          <br />
          <input
            className="form-control-sm"
            type="text"
            onChange={legalAdressHandler}
            value={legalAdress}
          />
        </div>
        <div class="col"></div>
        <br />
      </div>
      <button type="button" class="btn" onClick={submitHandler}>
        Guardar e Ingresar
      </button>
    </form>
  );
};

export default DataEnterprise1;
