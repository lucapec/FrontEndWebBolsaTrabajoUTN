import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import "./CompanyData.css";

const CompanyDataPag2 = ({ UpdateData, setSuccessfulCharge }) => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");
  const [telephoneNumber, setTelephoneNumber] = useState("");
  const [relWithCompany, setRelWithCompany] = useState("");

  const navigate = useNavigate();

  const inputHandler = (e) => {
    switch (e.target.id) {
      case "name":
        setName(e.target.value);
        break;
      case "lastname":
        setLastname(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "position":
        setPosition(e.target.value);
        break;
      case "telephone":
        setTelephoneNumber(e.target.value);
        break;
      case "relWithCompany":
        setRelWithCompany(e.target.value);
        break;
      default:
        break;
    }
  };

  const datos2 = {
    RecruiterName: name,
    RecruiterLastName: lastname,
    RecruiterEmail: email,
    RecruiterPosition: position,
    RecruiterPhoneNumber: telephoneNumber,
    RecruiterRelWithCompany: relWithCompany,
    FirstChargeData: true,
  };

  const submitHandler = () => {
    if (name && lastname && position && telephoneNumber && relWithCompany) {
      if (
        email
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          )
      ) {
        setSuccessfulCharge(true);
        UpdateData(datos2);
        setTimeout(() => {
          navigate("/ofertasEmpresa");
        }, 3000);

        toast("Los datos han sido cargados exitosamente", {
          autoClose: 3000,
          hideProgressBar: false,
          type: "success",
          theme: "dark",
          position: toast.POSITION.TOP_LEFT,
        });
        toast(
          "Los datos seran validados por administración para su aprobación",
          {
            autoClose: 5000,
            hideProgressBar: false,
            type: "info",
            theme: "dark",
            position: toast.POSITION.TOP_LEFT,
          }
        );
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
      <div className="form">
        <div className="header">
          <h2>Complete los datos de contacto</h2>
        </div>
        <div className="row">
          <div className="col">
            <label>Nombres</label>
            <br />
            <input
              className="form-control-sm"
              type="text"
              id="name"
              onChange={inputHandler}
              value={name}
            />
          </div>
          <div className="col">
            <label>Apellido</label>
            <br />
            <input
              className="form-control-sm"
              type="text"
              id="lastname"
              onChange={inputHandler}
              value={lastname}
            />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <label>Puesto / Cargo</label>
            <br />
            <input
              className="form-control-sm"
              type="text"
              id="position"
              onChange={inputHandler}
              value={position}
            />
          </div>
          <div className="col">
            <label>Email</label>
            <br />
            <input
              className="form-control-sm"
              type="email"
              id="email"
              onChange={inputHandler}
              value={email}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label>Telefono</label>
            <br />
            <input
              className="form-control-sm"
              type="number"
              placeholder="código de area + número"
              id="telephone"
              onChange={inputHandler}
              value={telephoneNumber}
            />
          </div>
          <div className="col">
            <label>Relacion del contacto con la empresa</label>
            <form onChange={inputHandler}>
              <select
                id="relWithCompany"
                className="form-control-sm"
                name="relWithCompany"
                value={relWithCompany}
                onChange={inputHandler}
              >
                <option value={"Seleccionar"}>Seleccionar</option>
                <option value={0}>Trabajo en la empresa</option>
                <option value={1}>Trabajo en una consultora</option>
              </select>
            </form>
          </div>
        </div>

        <button type="button" className="btn" onClick={submitHandler}>
          Guardar
        </button>
      </div>
    </>
  );
};

export default CompanyDataPag2;
