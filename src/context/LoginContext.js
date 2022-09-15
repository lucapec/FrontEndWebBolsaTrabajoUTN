import React, { useState } from "react";

const LoginContext = React.createContext();

export function LoginContextProvider({ children }) {
  const [logged, setLogged] = useState(false);
  const [data, setData] = useState();
  
  const EnterpriseDataHandler = (datos) => {

     setData({...data,...datos});
  }
  console.log(data);

  return (
    <LoginContext.Provider value={{ logged, setLogged, EnterpriseDataHandler }}>
      {children}
    </LoginContext.Provider>
  );
}

export default LoginContext;
