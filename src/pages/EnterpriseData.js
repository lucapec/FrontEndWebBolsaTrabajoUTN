import React, { useContext, useState, useEffect } from "react";
import EnterpriseDataPag1 from "../components/forms/enterpriseRegisterForms/EnterpriseDataPag1";
import EnterpriseDataPag2 from "../components/forms/enterpriseRegisterForms/EnterpriseDataPag2";
import UserContext from "../context/UserContext"

const EnterpriseData = () => {
  const [data, setData] = useState({});
  const [boolPage2, setBoolPage2] = useState(false);
  const [successfulCharge, setSuccessfulCharge] = useState(false);
  const {jwt} = useContext(UserContext);


  const UpdateData= (datos) =>{
    const _datos = {...data, ...datos}
     setData(_datos);
  }

  useEffect(() => {
    fetch("https://localhost:7172/api/UsersInfo/CreateDataCompany", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .catch((err) => {
        console.log(err.message);
      });
  }, [data, jwt])
  

  return !boolPage2 ? (
    <div>
      <EnterpriseDataPag1 UpdateData={UpdateData} setBoolPage2={setBoolPage2}  />
    </div>
  ) : (
    <div>
      <EnterpriseDataPag2 UpdateData={UpdateData} setSuccessfulCharge={setSuccessfulCharge} />
    </div>
  );
};

export default EnterpriseData;
