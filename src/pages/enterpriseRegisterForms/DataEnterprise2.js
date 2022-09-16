import "./DataEnterprise.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DataEnterprise2 = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");
  const [telephoneNumber, setTelephoneNumber] = useState(null);
  const [relWithCompany, setRelWithCompany] = useState(null);
  const [emailOK, setEmailOK] = useState (false);

  const inputHandler = (e) => {
    switch (e.target.id) {
      case "name":
        setName(e.target.value);
        break;
      case "email":
        setEmail(e.target.value)
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
    if (email
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )) {
        setEmailOK(true);
      }
      else {
        toast("ingrese un email valido", {
          autoClose: 3000,
          hideProgressBar: false,
          type: "error",
          theme: "dark",
          position: toast.POSITION.TOP_RIGHT,
        })  
      }
    if (name && emailOK && position && telephoneNumber && relWithCompany) {
      const Datos2 = {
        managerName: name,
        managerEmail: email,
        managerPosition: position,
        managerTelephone: telephoneNumber,
        relWithCompany: relWithCompany,
      };
      toast("Los datos han sido cargados existosamente", {
        autoClose: 3000,
        hideProgressBar: false,
        type: "success",
        theme: "dark",
        position: toast.POSITION.TOP_RIGHT,
      });
      toast("Los datos seran validados por administración para su aprobación", {
        autoClose: 5000,
        hideProgressBar: false,
        type: "info",
        theme: "dark",
        position: toast.POSITION.TOP_RIGHT,
        });
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
          <h2>Complete los datos de contacto</h2>
        </div>
        <div class="row">
          <div class="col">
            <label>Nombre y apellido</label>
            <br />
            <input
              className="form-control-sm"
              type="text"
              id="name"
              onChange={inputHandler}
              value={name}
            />
          </div>
          <div class="col">
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
        <div class="row">
          <div class="col">
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
          <div class="col">
            <br />
            <h5>Relacion del Contacto con la Empresa</h5>
          </div>
        </div>
        <div class="row">
          <div class="col">
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
          <div class="col">
            <form onChange={inputHandler}>
              <p>
                <input
                  type="radio"
                  name="relacion"
                  id="relacion"
                  class="form-check-input"
                  value={"en-empresa"}
                />
                Trabajo en la empresa solicitante
              </p>
              <p>
                <input
                  type="radio"
                  name="relacion"
                  id="relacion"
                  class="form-check-input"
                  value={"en-consultora"}
                />
                Trabajo para una consultora
              </p>
            </form>
          </div>
        </div>

        <button type="button" class="btn" onClick={submitHandler}>
          Guardar e Ingresar
        </button>
      </form>
    </>
  );
};

export default DataEnterprise2;
