import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import "./DataEnterprise.css";
import UserContext from "../../context/UserContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DataEnterprise1 = () => {
  const { EnterpriseDataHandler } = useContext(UserContext);
  const navigate = useNavigate();

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
        businessName: businessName,
        postalCode: postalCode,
        cuit: cuit,
        telephone: telephoneNumber,
        sector: sector,
        web: webURL,
        Adress: legalAdress,
      };
      console.log(datos);
      EnterpriseDataHandler(datos);
      //  navigate("/EmpresaReg2", { replace: true });
    } else {
      toast("complete todos los campos", {
        autoClose: 3000,
        hideProgressBar: false,
        type: "warning",
        theme: "dark",
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <>
      <ToastContainer className="mt-5" />
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
              id="businessName"
              onChange={inputHandler}
              value={businessName}
            />
          </div>
          <div class="col">
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
        <div class="row">
          <div class="col">
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
          <div class="col">
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
        <div class="row">
          <div class="col">
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
          <div class="col">
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
        <div class="row">
          <div class="col">
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
          <div class="col"></div>
          <br />
        </div>
        <button type="button" class="btn" onClick={submitHandler}>
          Guardar e Ingresar
        </button>
      </form>
    </>
  );
};

export default DataEnterprise1;
