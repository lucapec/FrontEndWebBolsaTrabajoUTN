// import { useState } from "react";
// import { toast, ToastContainer } from "react-toastify";

// import utnLogo from "../../../assets/logo-utn.png";

// import "./InternshipForm.css";

// const InternshipForm = () => {
//   const [agreementSigned, setAgreementSigned] = useState("");
//   const [tentativeStartDate, setTentativeStartDate] = useState("");
//   const [durationInternship, setDurationInternship] = useState("");
//   const [description, setDescription] = useState("");

//   const errorsList = () => {
//     const errorsList = [];
//     if (
//       !(
//         agreementSigned &&
//         tentativeStartDate &&
//         durationInternship &&
//         description
//       )
//     ) {
//       errorsList.push({ message: "Los campos son oligatorios" });
//     }
//     return errorsList;
//   };

//   const dataValidation = (e) => {
//     e.preventDefault();
//     const errors = errorsList();
//     if (errors.length === 0) {
//     } else {
//       errors.forEach((error) => {
//         toast(error.message, {
//           autoClose: 3000,
//           hideProgressBar: false,
//           type: "error",
//           theme: "dark",
//           position: toast.POSITION.TOP_LEFT,
//         });
//       });
//     }
//   };

//   const inputHandler = (e) => {
//     switch (e.target.id) {
//       case "agreementSigned":
//         setAgreementSigned(e.target.value);
//         break;
//       case "tentativeStartDate":
//         setTentativeStartDate(e.target.value);
//         break;
//       case "durationInternship":
//         setDurationInternship(e.target.value);
//         break;
//       case "description":
//         setDescription(e.target.value);
//         break;
//       default:
//         break;
//     }
//   };

//   return (
//     <div className="divFormUniversity">
//       <header></header>
//       <ToastContainer className="mt-5" />
//       <div className="form">
//         <form className="pb-3 mt-3">
//           <div className="titleInternship">
//             <h2>PASANTIA</h2>
//           </div>
//           <div className=" container " id="primary">
//             <div className="row row-cols-2" id="rowInternship">
//               <div className=" col form-field align-items-center">
//                 <label>
//                   La empresa ¿Tiene un Convenio Marco firmado con la UTN
//                   Rosario?
//                 </label>
//                 <br />

//                 <input
//                   type="radio"
//                   name="agreementSigned"
//                   id="agreementSigned"
//                   className="form-control-sm"
//                   value={"Yes"}
//                   placeholder="E-mail receptor de CVs"
//                   onChange={inputHandler}
//                 />
//                 <div className="labelInternship">
//                   <label> SI</label>
//                 </div>
//                 <br />

//                 <input
//                   type="radio"
//                   name="agreementSigned"
//                   id="agreementSigned"
//                   className="form-control-sm"
//                   value={"No"}
//                   placeholder="E-mail receptor de CVs"
//                   onChange={inputHandler}
//                 />
//                 <div className="labelInternship">
//                   <label> NO</label>
//                 </div>
//               </div>
//               <div className=" col form-field align-items-center">
//                 <label>Fecha Tentativa de Inicio</label>
//                 <br />
//                 <input
//                   type="date"
//                   name="tentativeStartDate"
//                   id="tentativeStartDate"
//                   className="form-control-sm"
//                   value={tentativeStartDate}
//                   placeholder="Periodo desde"
//                   onChange={inputHandler}
//                 />
//               </div>
//             </div>
//           </div>
//           <div className=" container " id="primary">
//             <div className="row row-cols-2" id="rowInternship">
//               <div className=" col form-field align-items-center">
//                 <label>Duracion de la Pasantia</label>
//                 <br />
//                 <input
//                   type="text"
//                   name="durationInternship"
//                   id="durationInternship"
//                   className="form-control-sm"
//                   value={durationInternship}
//                   placeholder="Duracion de la Pasantia"
//                   onChange={inputHandler}
//                 />
//               </div>
//               <div className=" col form-field align-items-center">
//                 <label>Descripcion</label>
//                 <br />
//                 <textarea
//                   type="textarea"
//                   name="description"
//                   id="description"
//                   className="form-control-sm"
//                   value={description}
//                   placeholder="Descripcion"
//                   onChange={inputHandler}
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="container">
//             <div className="col-md-12 text-center">
//               <button onClick={dataValidation} id="btn" className="btn">
//                 Crear Oferta
//               </button>
//             </div>
//           </div>
//         </form>
//       </div>
//       <footer className="footerCompany">
//         <div id="divFooter" className="container">
//           <div id="divLeftRight" className="row justify-content-center">
//             <div id="divLeft" className="col-4">
//               <figure>
//                 <img src={utnLogo} alt="UTN Logo" className="logo" />
//               </figure>
//             </div>
//             <div id="divRight" className="col-4">
//               <div className="divUniversity">
//                 <p>FACULTAD REGIONAL ROSARIO</p>
//               </div>
//               <div className="divContact">
//                 <p> Localidad: Zeballos 1341 - Rosario</p>
//               </div>
//               <div className="divPhone">
//                 <p>Telefono: 0341-4481871</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default InternshipForm;
