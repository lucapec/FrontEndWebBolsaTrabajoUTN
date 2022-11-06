import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import utnLogo from "../../../assets/logo-utn.png";

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
      case "telephoneNumber":
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

  const submitHandler = (e) => {
    e.preventDefault();
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
                    <h3>Complete los datos de contacto</h3>
                    <hr />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <form className="formProfile">
                      <div className="form-group row">
                        <label className="col-4 col-form-label">
                          Nombres del Contacto
                        </label>
                        <div className="col-6">
                          <input
                            className="form-control here"
                            placeholder="Nombres del Contacto"
                            type="text"
                            id="name"
                            onChange={inputHandler}
                            value={name}
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-4 col-form-label">
                          Apellido del Contacto
                        </label>
                        <div className="col-6">
                          <input
                            className="form-control here"
                            placeholder="Apellido del Contacto"
                            type="text"
                            id="lastname"
                            onChange={inputHandler}
                            value={lastname}
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-4 col-form-label">
                          Email de Contacto
                        </label>
                        <div className="col-6">
                          <input
                            className="form-control here"
                            placeholder="Email"
                            type="email"
                            id="email"
                            onChange={inputHandler}
                            value={email}
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-4 col-form-label">
                          Puesto / Cargo del Contacto
                        </label>
                        <div className="col-6">
                          <input
                            className="form-control here"
                            placeholder="Puesto / Cargo"
                            type="text"
                            id="position"
                            onChange={inputHandler}
                            value={position}
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-4 col-form-label">
                          Telefono del Contacto
                        </label>
                        <div className="col-6">
                          <input
                            className="form-control here"
                            type="number"
                            placeholder="Codigo de area + número"
                            id="telephoneNumber"
                            onChange={inputHandler}
                            value={telephoneNumber}
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-4 col-form-label">
                          Relacion con la Empresa
                        </label>
                        <div className="col-6">
                          <select
                            id="relWithCompany"
                            className="form-control here"
                            name="relWithCompany"
                            value={relWithCompany}
                            onChange={inputHandler}
                          >
                            <option value={"Seleccionar"}>Seleccionar</option>
                            <option value={0}>Trabajo en la empresa</option>
                            <option value={1}>Trabajo en una consultora</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <div className="offset mt-5 md-10">
                          <button onClick={submitHandler} className="btn">
                            Guardar e Ingresar
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
      </footer>
    </div>
  );
};

export default CompanyDataPag2;
