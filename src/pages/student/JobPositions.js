import React, { useState, useEffect, useContext, useCallback, useRef } from 'react';
import UserContext from "../../context/UserContext";
import "./JobPositions.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const JobPositions = () => {
  const { jwt } = useContext(UserContext);
  const [jobPositions, setJobPositions] = useState([]);
  const [selectedJobPosition, setSelectedJobPosition] = useState({});
  const [searchText, setSearchText] = useState('');
  const [skillsText, setSkillsText] = useState('');
  let firstEnter = useRef(false);
  const date = new Date();

  useEffect(() => {
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
  }, [jwt]);

  const onSelectJobPosition = useCallback(
    (id) => {
      if (jobPositions.length !== 0) {
        setSelectedJobPosition(jobPositions.find(x => x.id === id));
      }
    }, [jobPositions]);

  useEffect(() => {
    if (!firstEnter.current && jobPositions.length !== 0) {
      console.log(jobPositions);
      setSelectedJobPosition(jobPositions[0]);
      firstEnter.current = true;
    }
  }, [jobPositions, selectedJobPosition, setSelectedJobPosition]);

  const handleInput = (e) => {
    switch (e.target.id) {
      case 'search-text':
        setSearchText(e.target.value);
        break;
      case 'skills-text':
        setSkillsText(e.target.value);
        break;
      default:
        break;
    }
  }


  return (
    <div className="container-fluid main">
      <div className="main-card">
        <div className="search">
          <input value={searchText} onChange={handleInput} id="search-text" className="search-filter job-position-filter" type="text" name="job-position-filter" placeholder='Buscar ofertas' />
          <input value={skillsText} onChange={handleInput} id="skills-text" className="search-filter skills-filter" type="text" name="skills-filter" placeholder='Habilidades' />
        </div>
        <div className="job-positions">
          <ul className="list">
            {jobPositions && jobPositions.filter((jobPosition) => {
              return jobPosition.jobTitle.includes(searchText);
            }).map((jobPosition) => {
              return <Card className="card" key={jobPosition.id} onClick={() => onSelectJobPosition(jobPosition.id)} variant="outlined" style={{ border: jobPosition.id === selectedJobPosition.id ? '1px solid black' : 'none'}}>
                <CardContent>
                  {jobPosition.jobTitle}
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {jobPosition.location}
                  </Typography>
                </CardContent>
              </Card>
            })}
          </ul>
          <div className="details">
            <Card key={selectedJobPosition && selectedJobPosition.id} variant="outlined">
              <CardContent>
                <Typography variant="body" component="div" style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <h2>{selectedJobPosition && selectedJobPosition.jobTitle}</h2>
                  <input className="apply-button" type="submit" value='Aplicar' />
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {selectedJobPosition && selectedJobPosition.location}
                </Typography>
                <Typography variant="body2">
                  {selectedJobPosition && selectedJobPosition.jobDescription}
                </Typography>
                <Typography variant="body2">
                  {selectedJobPosition && date.getDate(selectedJobPosition.createdDate)}
                </Typography>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobPositions;