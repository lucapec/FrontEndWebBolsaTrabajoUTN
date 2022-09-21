import { useState } from "react";
import PersonalData from "../components/forms/PersonalData";
import UniversityData from "../components/forms/UniversityData";

const StudentData = () => {
  const [data, setData] = useState("");
  const [boolUniversityData, setboolUniversityData] = useState(false);
  const [successfulCharge, setSuccessfulCharge] = useState(false);

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
