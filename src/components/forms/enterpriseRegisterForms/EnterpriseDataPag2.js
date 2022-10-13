import "./EnterpriseData.css";
import { useState, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserContext from "../../../context/UserContext";


const EnterpriseDataPag2 = ({ data, setData, setSuccessfulCharge }) => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");
  const [telephoneNumber, setTelephoneNumber] = useState();
  const [relWithCompany, setRelWithCompany] = useState();
  const {jwt} = useContext(UserContext);

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
      case "relacion":
        setRelWithCompany(e.target.value);
        break;
      default:
        break;
    }
  };

    // fetch('https://localhost:7172/api/UsersInfo/Company',{
    //   method: "GET",
    //   headers: { "Content-type": "application/json", Authorization:`Bearer ${jwt}`}
    // })
    // .then(response => response.json())
    // .then(data => console.log(data));

    // fetch("https://localhost:7172/api/UsersInfo/ChargeDataCompany", {
    //   method: "PUT",
    //   headers: {'Content-type': 'application/json', Authorization:`Bearer ${jwt}`},
    //   body: JSON.stringify({
    //     CompanyName: "businessName",
    //     Cuit: "cuit",
    //     TelephoneNumber: "telephoneNumber",
    //     Sector: "sector",
    //     LegalAdress: "legalAdress",
    //     PostalCode: "postalCode",
    //     Web: "webURL",
    //     RecruiterName: "name",
    //     RecruiterLastName: "lastname",
    //     RecruiterPosition: "position",
    //     RecruiterPhoneNumber: "telephoneNumber",
    //     RecruiterEmail: "email",
    //     RecruiterRelWithCompany: 1,
    //     FirstChargeData: true
    //   }),
    // })
    // .then((r) => r.json())
    // .then((res) => {
    //   console.log(res);
    // })
    // .catch((err) => {
    //   console.log(err);
    // });  


  const submitHandler = () => {
    if (name && lastname && position && telephoneNumber && relWithCompany) {
      if (
        email
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          )
      ) {
        const datos2 = {
          ...data,
          RecruiterName: name,
          RecruiterLastName: lastname,
          RecruiterEmail: email,
          RecruiterPosition: position,
          RecruiterPhoneNumber: telephoneNumber,
          RecruiterRelWithCompany: relWithCompany,
          FirstChargeData: true
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
            <label>apellido</label>
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
            <label>Relacion con la empresa</label>
            <form onChange={inputHandler}>
              <br/>
              <p>
                <input
                  type="radio"
                  name="relacion"
                  id="relacion"
                  className="form-check-input"
                  value={0}
                />
                Trabajo en la empresa solicitante
              </p>
              <p>
                <input
                  type="radio"
                  name="relacion"
                  id="relacion"
                  className="form-check-input"
                  value={1}
                />
                Trabajo para una consultora
              </p>
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

export default EnterpriseDataPag2;
