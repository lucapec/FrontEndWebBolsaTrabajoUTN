import "./DataEnterprise1.css";
import { useState } from "react";
//import { useNavigate } from "react-router-dom";

const DataEnterprise2 = () => {
  //const navigate = useNavigate();

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [position, setPosition] = useState();
  const [telephoneNumber, setTelephoneNumber] = useState();

  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const positionHandler = (e) => {
    setPosition(e.target.value);
  };

  const telephoneNumberHandler = (e) => {
    setTelephoneNumber(e.target.value);
  };

  const submitHandler = () => {
    // navigate("/EmpresaReg2", { replace: true })
    const Datos2 = {
      name: name,
      email: email,
      position: position,
      telephone: telephoneNumber,
    };
    console.log(Datos2);
  };

  return (
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
            onChange={nameHandler}
            value={name}
          />
        </div>
        <div class="col">
          <label>Email</label>
          <br />
          <input
            className="form-control-sm"
            type="email"
            onChange={emailHandler}
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
            onChange={positionHandler}
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
            placeholder="codigo de area + numero"
            onChange={telephoneNumberHandler}
            value={telephoneNumber}
          />
        </div>
        <div class="col">
          <div>
            <p>
              <input type="radio" name="relacion" class="relacion-empresa" />
              Trabajo en la empresa solicitante
            </p>
            <p>
              <input type="radio" name="relacion" class="relacion-empresa" />
              Trabajo para una consultora
            </p>
          </div>
        </div>
      </div>

      <button type="button" class="btn" onClick={submitHandler}>
        Guardar e Ingresar
      </button>
    </form>
  );
};

export default DataEnterprise2;
