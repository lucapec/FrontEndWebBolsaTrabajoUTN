import React, {useContext, useEffect, useState} from 'react';
import Select from 'react-select';
import UserContext from "../../../context/UserContext";

const SelectComponent = ({saveSkills}) => {

   const { jwt } = useContext(UserContext);
    const [skillsList, setSkillsList] = useState();
    const [isCharged, setIsCharged] = useState(false);
    const [selectedSkills, setSelectedSkills] = useState();

    
    useEffect(() => {
        fetch("https://localhost:7172/api/Skills/GetAllSkills", {
          method: "GET",
          headers: { "Content-type": "application/json" }})
        .then((response) => response.json())
        .then((data) => setSkillsList(data))
        .then(() => setIsCharged(true))
    }, []);
    
    if(saveSkills) {
        fetch('https://localhost:7172/api/UsersInfo/xxx', {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${jwt}`,
            },
            body: JSON.stringify(selectedSkills),
          })
            .then((res) => res.json())
            .catch((err) => {
              console.log(err.message);
            });
    }
    const SelectHandler = (e) => {
        setSelectedSkills(e);
    }


 var array = [{label:"CSS", id:5}]

    return(
        (isCharged? 
            (<div className="col mt-4">
                <label>Habilidades</label>
                <div>
                    <Select 
                        options={skillsList.map(skill => ({label: skill.skillName, value: skill.id}))} 
                        isMulti 
                        onChange={SelectHandler}
                        defaultValue = {array}
                    />
                </div>
            </div>)
            :
            null)
    )
}

export default SelectComponent;