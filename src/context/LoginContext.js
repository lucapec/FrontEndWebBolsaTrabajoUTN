import React, { useState } from "react";

const LoginContext = React.createContext();

export function LoginContextProvider({ children }) {
  const [logged, setLogged] = useState(false);
  return (
    <LoginContext.Provider value={{ logged, setLogged }}>
      {children}
    </LoginContext.Provider>
  );
}

export default LoginContext;
