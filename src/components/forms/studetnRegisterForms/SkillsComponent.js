import React, { useContext, useEffect, useState } from "react";
import Select from "react-select";
import UserContext from "../../../context/UserContext";

const SelectComponent = ({ saveSkills }) => {
  const { jwt } = useContext(UserContext);
  const [skillsList, setSkillsList] = useState(null);
  const [isCharged, setIsCharged] = useState(false);
  const [selectedSkills, setSelectedSkills] = useState();
  const [studentData, setStudentData] = useState(null);

  const SkillsToId = () => {
    return selectedSkills.map(function (skill) {
      return skill.value;
    })};
  
  const IdToSkills = () => {
    return skillsList.filter(function (skill) {
      return studentData.skillsId.includes(skill.id);
    });
  };
  
  if (studentData != null && skillsList != null) {
    const skillsOfStudent = IdToSkills()
    var formattedSkills = skillsOfStudent.map(skill => ({
      label: skill.skillName,
      id: skill.id
    }));
  };

  const SelectHandler = (e) => {
    setSelectedSkills(e);
  };

  useEffect(() => {
    fetch("https://localhost:7172/api/Skills/GetAllSkills", {
      method: "GET",
      headers: { "Content-type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => setSkillsList(data))
      .then(() => setIsCharged(true));
  }, []);

  
  useEffect(() => {
    fetch("https://localhost:7172/api/UsersInfo/Student", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
    })
    .then((response) => response.json())
      .then((data) => {
        setStudentData(data);
      })
    }, [jwt]);
    
    if (saveSkills) {
      var arrayIds = SkillsToId();
      fetch("https://localhost:7172/api/Skills/AddSkillToStudent", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwt}`,
        },
        body: JSON.stringify({"skillsId": arrayIds}),
      })
        .then((res) => res.json())
        .catch((err) => {
          console.log(err.message);
        });
    }

  return isCharged && studentData ? (
    <div className="col mt-4">
      <label>Habilidades</label>
      <div>
        <Select
          options={skillsList.map((skill) => ({
            label: skill.skillName,
            value: skill.id,
          }))}
          isMulti
          onChange={SelectHandler}
          defaultValue={formattedSkills}
        />
      </div>
    </div>
  ) : null;
};

export default SelectComponent;
