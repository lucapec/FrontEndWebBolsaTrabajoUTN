const ModalInternshipForm = () => {
  return (
    <>
      <div
        className="modal fade"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalToggleLabel">
                Pasantia
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="pb-3 mt-3">
                <div className=" container " id="primary">
                  <div className="row row-cols-2" id="rowInternship">
                    <div className=" col form-field align-items-center">
                      <label>
                        La empresa ¿Tiene un Convenio Marco firmado con la UTN
                        Rosario?
                      </label>
                      <br />
                      <input
                        type="radio"
                        name="agreementSigned"
                        id="agreementSigned"
                        className="form-control-sm"
                        placeholder="E-mail receptor de CVs"
                      />
                      <div className="labelInternship">
                        <label> SI</label>
                      </div>
                      <br />
                      <input
                        type="radio"
                        name="agreementSigned"
                        id="agreementSigned"
                        className="form-control-sm"
                        placeholder="E-mail receptor de CVs"
                      />
                      <div className="labelInternship">
                        <label> NO</label>
                      </div>
                    </div>
                    <div className=" col form-field align-items-center">
                      <label>Fecha Tentativa de Inicio</label>
                      <br />
                      <input
                        type="date"
                        name="tentativeStartDate"
                        id="tentativeStartDate"
                        className="form-control-sm"
                        placeholder="Periodo desde"
                      />
                    </div>
                  </div>
                </div>
                <div className=" container " id="primary">
                  <div className="row row-cols-2" id="rowInternship">
                    <div className=" col form-field align-items-center">
                      <label>Duracion de la Pasantia</label>
                      <br />
                      <input
                        type="text"
                        name="durationInternship"
                        id="durationInternship"
                        className="form-control-sm"
                        placeholder="Duracion de la Pasantia"
                      />
                    </div>
                    <div className=" col form-field align-items-center">
                      <label>Descripcion</label>
                      <br />
                      <textarea
                        type="textarea"
                        name="descriptionInternship"
                        id="descriptionInternship"
                        className="form-control-sm"
                        placeholder="Descripcion"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button id="buttonModal" className="btn">
                Crear Oferta
              </button>
              <button
                className="btn"
                data-bs-target="#exampleModalToggle2"
                data-bs-toggle="modal"
                id="buttonModalCreate"
              >
                Relacion de dependencia
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalInternshipForm;
