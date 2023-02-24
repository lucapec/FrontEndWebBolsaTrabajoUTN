import React, { useContext, useEffect, useState } from "react";
import Select from "react-select";
import UserContext from "../../../context/UserContext";

const SelectComponent = ({ saveSkills }) => {
  const { jwt } = useContext(UserContext);
  const [skillsList, setSkillsList] = useState();
  const [isCharged, setIsCharged] = useState(false);
  const [selectedSkills, setSelectedSkills] = useState();
  const [studentData, setStudentData] = useState(null);

  const SkillsToId = () => {
    return selectedSkills.map(function (skill) {
      return skill.value;
    })};

  // const IdToSkills = (skillIdStudent, skillsList) => {
    //   var skillsmatched = skillsList.filter(function (skill) {
  //     return skillIdStudent.includes(skill.id);
  //   });
  //   return skillsmatched
  // };
  
  const IdToSkills = () => {
    var skillsmatched = skillsList.filter(function (skill) {
      return studentData.skillsId.includes(skill.id);
    });
    return skillsmatched
  };
  
  // if (studentData != null) {
  //   var asd = IdToSkills()
    
  //   console.log("del id a los skills ", asd)
  // };

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
  
  var array = [{ label: "CSS", id: 5 }];

  return isCharged ? (
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
          defaultValue={array}
        />
      </div>
    </div>
  ) : null;
};

export default SelectComponent;
