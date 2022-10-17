import { useState, useContext } from "react";
import PersonalData from "../../components/forms/studetnRegisterForms/PersonalData";
import UniversityData from "../../components/forms/studetnRegisterForms/UniversityData";
import UserContext from "../../context/UserContext";

const StudentData = () => {
  const { jwt } = useContext(UserContext);
  const [data, setData] = useState("");
  const [boolUniversityData, setboolUniversityData] = useState(false);
  const [successfulCharge, setSuccessfulCharge] = useState(false);

  fetch("https://localhost:7172/api/UsersInfo/ChargeDataStudent", {
    method: "PUT",
    headers:{'Content-type': 'application/json', Authorization:`Bearer ${jwt}`},
    body: JSON.stringify(
      {
      CompanyName: "businessName",
      Cuit: "cuit",
      TelephoneNumber: "telephoneNumber",
      Sector: "sector",
      LegalAdress: "legalAdress",
      PostalCode: "postalCode",
      Web: "webURL",
      RecruiterName: "name",
      RecruiterLastName: "lastname",
      RecruiterPosition: "position",
      RecruiterPhoneNumber: "telephoneNumber",
      RecruiterEmail: "email",
      RecruiterRelWithCompany: 1,
      FirstChargeData: true
    }
    ),
  })
    .then((r) => r.json())
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });

  if (successfulCharge) {
    //Hacer el fetch
    //En el then usar el Navigate a Home.

    console.log(data);
  }

  return !boolUniversityData ? (
    <div>
      <PersonalData
        setboolUniversityData={setboolUniversityData}
        setData={setData}
      />
    </div>
  ) : (
    <div>
      <UniversityData
        data={data}
        setData={setData}
        setSuccessfulCharge={setSuccessfulCharge}
      />
    </div>
  );
};

export default StudentData;
