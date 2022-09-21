import React, { useState } from "react";
import EnterpriseDataPag1 from "../components/forms/enterpriseRegisterForms/EnterpriseDataPag1";
import EnterpriseDataPag2 from "../components/forms/enterpriseRegisterForms/EnterpriseDataPag2";

const EnterpriseData = () => {
  const [data, setData] = useState("");
  const [boolPage2, setBoolPage2] = useState(false);
  const [successfulCharge, setSuccessfulCharge] = useState(false);

  if (successfulCharge) {
    //Cuando este listo el crud del back tengo que:
    //poner un set time out de 5 seg para dejar que se terminen de mostrar las alertas
    //luego hacer el fetch
    //Y en el then usar el Navigate a Home.
    
    console.log("carga correcta ", successfulCharge);
    console.log(data);
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
