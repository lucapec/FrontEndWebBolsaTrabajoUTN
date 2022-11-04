import React, { useState, useEffect, useContext, useCallback, useRef } from 'react';
import "./JobPositions.css";
import UserContext from "../../context/UserContext";
import utnLogo from "../../assets/logo-utn.png";

const JobPositions = () => {
  const { jwt, role } = useContext(UserContext);
  const [jobPositions, setJobPositions] = useState([]);
  const [selectedJobPosition, setSelectedJobPosition] = useState({});
  const [searchText, setSearchText] = useState('');
  let firstEnter = useRef(false);
  const date = new Date();

  useEffect(() => {
    if (role === "Student") {
      fetch('https://localhost:7172/api/JobPosition/GetAllJobPositions', {
        method: 'GET',
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${jwt}`,
        },
      })
        .then((r) => r.json())
        .then((r) => {
          if (r.success) {
            setJobPositions(r.data);
          }
        });
    } else if (role === "Company") {
      fetch('https://localhost:7172/api/JobPosition/GetCompanyJobPositions', {
        method: 'GET',
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${jwt}`,
        },
      })
        .then((r) => r.json())
        .then((r) => {
          if (r.success) {
            setJobPositions(r.data);
          }
        });
    }
  }, [jwt, role]);

  const onSelectJobPosition = useCallback(
    (id) => {
      if (jobPositions.length !== 0) {
        setSelectedJobPosition(jobPositions.find(x => x.id === id));
      }
    }, [jobPositions]);

  useEffect(() => {
    if (!firstEnter.current && jobPositions.length !== 0) {
      setSelectedJobPosition(jobPositions[0]);
      console.log(jobPositions);
      firstEnter.current = true;
    }
  }, [jobPositions, selectedJobPosition, setSelectedJobPosition]);

  const handleInput = (e) => {
    switch (e.target.id) {
      case 'search-text':
        setSearchText(e.target.value);
        break;
      default:
        break;
    }
  }


  return (
    <div className="container-fluid main">
      <div className="main-card">
        <div className="job-positions">
          <ul className="list">
            <h3>Ofertas laborales</h3>
            <div className="search">
              <input value={searchText} onChange={handleInput} id="search-text" className="search-filter job-position-filter" type="text" name="job-position-filter" placeholder='Buscar ofertas...' />
              <span className="icon-search"></span>
            </div>
            <div className="scrollable-jobPositions">
              {jobPositions && jobPositions.filter((jobPosition) => {
                return jobPosition.jobTitle.includes(searchText) || jobPosition.location.includes(searchText) || jobPosition.company.companyName.includes(searchText);
              }).map((jobPosition) => {
                return <div className="list-item" key={jobPosition.id} onClick={() => onSelectJobPosition(jobPosition.id)} style={{ backgroundColor: jobPosition.id === selectedJobPosition.id ? '#E2F0FE' : 'white' }}>
                  <h5>{jobPosition.jobTitle}</h5>
                  <div className="list-item__text">
                    Empresa: {jobPosition.company.companyName}
                  </div>
                  <div className="list-item__text">
                    Ubicación: {jobPosition.location}
                  </div>
                </div>
              })}
            </div>
          </ul>
          <div className="details">
            {role === "Student" && (
              <div className="companyDetail" key={selectedJobPosition && selectedJobPosition.id}>
                <div>
                  <h2>{selectedJobPosition && selectedJobPosition.jobTitle}</h2>
                  <input className="apply-button" type="submit" value='Aplicar' />
                </div>
                <div>
                  {selectedJobPosition && selectedJobPosition.location}
                </div>
                <div>
                  {selectedJobPosition && selectedJobPosition.jobDescription}
                </div>
              </div>
            )}
            {role === "Company" && (
              <div key={selectedJobPosition && selectedJobPosition.id} variant="outlined">
                <div>
                  <h3>{selectedJobPosition && `Postulantes para "${selectedJobPosition.jobTitle}"`}</h3>
                  <ul className="list">
                    {selectedJobPosition.studentsWhoApplied && selectedJobPosition.studentsWhoApplied.map((student) => {
                      return <div key={student.id}>{student.firstName}</div>
                    })}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <footer className="footerCompany">
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
  )
}

export default JobPositions;