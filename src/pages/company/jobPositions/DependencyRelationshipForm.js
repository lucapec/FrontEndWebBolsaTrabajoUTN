// import { useState } from "react";
// import { toast, ToastContainer } from "react-toastify";

// import utnLogo from "../../../assets/logo-utn.png";

// import "./DependencyRelationshipForm.css";

// const DependencyRelationshipForm = () => {
//   const [workingDay, setWorkingDay] = useState("");
//   const [careers, setCareers] = useState("");
//   const [jobTitle, setJobTitle] = useState("");
//   const [placeWork, setPlaceWork] = useState("");
//   const [description, setDescription] = useState("");

//   const errorsList = () => {
//     const errorsList = [];
//     if (!(workingDay && careers && jobTitle && placeWork && description)) {
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
//       case "workingDay":
//         setWorkingDay(e.target.value);
//         break;
//       case "careers":
//         setCareers(e.target.value);
//         break;
//       case "jobTitle":
//         setJobTitle(e.target.value);
//         break;
//       case "placeWork":
//         setPlaceWork(e.target.value);
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
//           <div className="titleDependency">
//             <h2>RELACION DE DEPENDENCIA</h2>
//           </div>
//           <div className=" container " id="primary">
//             <div className="row row-cols-3" id="rowDependency">
//               <div className=" col form-field align-items-center">
//                 <label>Jornada Laboral</label>
//                 <br />
// z
//                 <input
//                   type="radio"
//                   name="workingDay"
//                   id="workingDay"
//                   className="form-control-sm"
//                   value={"fullTime"}
//                   placeholder="E-mail receptor de CVs"
//                   onChange={inputHandler}
//                 />
//                 <div className="labelDependency">
//                   <label> FULL TIME</label>
//                 </div>
//                 <br />
//                 <input
//                   type="radio"
//                   name="workingDay"
//                   id="workingDay"
//                   className="form-control-sm"
//                   value={"partTime"}
//                   placeholder="E-mail receptor de CVs"
//                   onChange={inputHandler}
//                 />
//                 <div className="labelDependency">
//                   <label> PART TIME</label>
//                 </div>
//                 <br />
//                 <input
//                   type="radio"
//                   name="workingDay"
//                   id="workingDay"
//                   className="form-control-sm"
//                   value={"freeLance"}
//                   placeholder="E-mail receptor de CVs"
//                   onChange={inputHandler}
//                 />
//                 <div className="labelDependency">
//                   <label> FREELANCE</label>
//                 </div>
//                 <br />
//               </div>
//               <div className=" col form-field align-items-center">
//                 <label>Lugar de Trabajo</label>
//                 <br />
//                 <input
//                   type="text"
//                   name="placeWork"
//                   id="placeWork"
//                   className="form-control-sm"
//                   value={placeWork}
//                   placeholder="Lugar de Trabajo"
//                   onChange={inputHandler}
//                 />
//               </div>
//               <div className=" col form-field align-items-center">
//                 <label>Carreras en UTN Rosario</label>
//                 <br />
//                 <input
//                   type="text"
//                   name="careers"
//                   id="careers"
//                   className="form-control-sm"
//                   value={careers}
//                   placeholder="Carreras en UTN Rosario"
//                   onChange={inputHandler}
//                 />
//               </div>
//             </div>
//           </div>
//           <div className=" container " id="primary">
//             <div className="row row-cols-3" id="rowDependency">
//               <div className=" col form-field align-items-center">
//                 <label>Nombre del Puesto</label>
//                 <br />
//                 <input
//                   type="text"
//                   name="jobTitle"
//                   id="jobTitle"
//                   className="form-control-sm"
//                   value={jobTitle}
//                   placeholder="Nombre del Puesto"
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

// export default DependencyRelationshipForm;
