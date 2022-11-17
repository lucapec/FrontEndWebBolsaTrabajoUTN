import React, {useContext, useEffect, useState} from 'react';
import Select from 'react-select';
import UserContext from "../../../context/UserContext";

const SelectComponent = ({saveSkills}) => {

//    const { jwt } = useContext(UserContext);
    const [skillsList, setSkillsList] = useState();
    const [isCharged, setIsCharged] = useState(false);
    const [selectedSkills, setSelectedSkills] = useState();

    
    useEffect(() => {
        fetch("https://localhost:7172/api/Skills/GetAllSkills", {
          method: "GET",
          headers: { "Content-type": "application/json" }})
        .then((response) => response.json())
        .then((data) => setSkillsList(data))
        .then(() => setIsCharged(true));
    }, []);
    
    const SelectHandler = (e) => {
        setSelectedSkills(e);
    }
    console.log("se cargo? ", selectedSkills)
    return(
        (isCharged? 
            (<div>
            <Select 
                options={skillsList.map(skill => ({label: skill.skillName, value: skill.id}))} 
                isMulti 
                onChange={SelectHandler}
            />
            </div>)
            :
            null)
    )
}

export default SelectComponent;