import "./EnterpriseData.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EnterpriseDataPag2 = ({ data, setData, setSuccessfulCharge }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");
  const [telephoneNumber, setTelephoneNumber] = useState();
  const [relWithCompany, setRelWithCompany] = useState();

  const inputHandler = (e) => {
    switch (e.target.id) {
      case "name":
        setName(e.target.value);
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
      case "relacion":
        setRelWithCompany(e.target.value);
        break;
      default:
        break;
    }
  };

  const submitHandler = () => {
    if (name && position && telephoneNumber && relWithCompany) {
      if (
        email
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          )
      ) {
        const datos2 = {
          ...data,
          managerName: name,
          managerEmail: email,
          managerPosition: position,
          managerTelephone: telephoneNumber,
          managerRelWithCompany: relWithCompany,
        };
        setData(datos2);
        setSuccessfulCharge(true);

        toast("Los datos han sido cargados existosamente", {
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
            <label>Nombre y apellido</label>
            <br />
            <input
              className="form-control-sm"
              type="text"
              id="name"
              placeholder="Nombre y Apellido"
              onChange={inputHandler}
              value={name}
            />
          </div>
          <div className="col">
            <label>Email</label>
            <br />
            <input
              className="form-control-sm"
              type="email"
              id="email"
              placeholder="Email"
              onChange={inputHandler}
              value={email}
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
              placeholder="Puesto / Cargo"
              onChange={inputHandler}
              value={position}
            />
          </div>
          <div className="col">
            <br />
            <h5>Relacion del Contacto con la Empresa</h5>
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
            <form onChange={inputHandler}>
              <p>
                <input
                  type="radio"
                  name="relacion"
                  id="relacion"
                  className="form-check-input"
                  value={"en-empresa"}
                />
                Trabajo en la empresa solicitante
              </p>
              <div className="divInput">
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
            </form>
          </div>
        </div>

        <button type="button" className="btn" onClick={submitHandler}>
          Guardar e Ingresar
        </button>
      </div>
    </>
  );
};

export default EnterpriseDataPag2;
