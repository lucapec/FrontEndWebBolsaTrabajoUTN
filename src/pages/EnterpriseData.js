import React, { useContext, useState } from "react";
import EnterpriseDataPag1 from "../components/forms/enterpriseRegisterForms/EnterpriseDataPag1";
import EnterpriseDataPag2 from "../components/forms/enterpriseRegisterForms/EnterpriseDataPag2";
import UserContext from "../context/UserContext";

const EnterpriseData = () => {
  const [data, setData] = useState({});
  const [boolPage2, setBoolPage2] = useState(true);
  const [successfulCharge, setSuccessfulCharge] = useState(false);
  const {jwt} = useContext(UserContext);


  // fetch('https://localhost:7172/api/UsersInfo/Company',{
  //   method: "GET",
  //   headers: { "Content-type": "application/json", Authorization:`Bearer ${jwt}`}
  // })
  // .then(response => response.json())
  // .then(data => console.log(data));

  fetch("https://localhost:7172/api/UsersInfo/CreateDataCompany",
    {
      method: 'PUT',
      headers: {'Content-Type': 'application/json', Authorization: `Bearer ${jwt}`},
      body: JSON.stringify(data)
    }
  )
  .then((res) => res.json())
  .catch((err) => {
    console.log(err.message);
  });

  // fetch("https://localhost:7172/api/UsersInfo/ChargeDataCompany", {
  //   method: "PUT",
  //   headers:{'Content-type': 'application/json', Authorization:`Bearer ${jwt}`},
  //   body: JSON.stringify(
  //     {
  //     CompanyName: "businessName",
  //     Cuit: "cuit",
  //     TelephoneNumber: "telephoneNumber",
  //     Sector: "sector",
  //     LegalAdress: "legalAdress",
  //     PostalCode: "postalCode",
  //     Web: "webURL",
  //     RecruiterName: "name",
  //     RecruiterLastName: "lastname",
  //     RecruiterPosition: "position",
  //     RecruiterPhoneNumber: "telephoneNumber",
  //     RecruiterEmail: "email",
  //     RecruiterRelWithCompany: 1,
  //     FirstChargeData: true
  //   }
  //   ),
  // })
  //   .then((r) => r.json())
  //   .then((res) => {
  //     console.log(res);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
    
  if (successfulCharge) {
    
    console.log("carga correcta ", successfulCharge);
    console.log("data por console log ",data);

  }

  return !boolPage2 ? (
    <div>
      <EnterpriseDataPag1 setBoolPage2={setBoolPage2} setData={setData} />
    </div>
  ) : (
    <div>
      <EnterpriseDataPag2
        data={data}
        setData={setData}
        setSuccessfulCharge={setSuccessfulCharge}
      />
    </div>
  );
};

export default EnterpriseData;
