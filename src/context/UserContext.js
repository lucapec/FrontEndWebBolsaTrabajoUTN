import React, { useState } from "react";

const UserContext = React.createContext();

export function UserContextProvider({ children }) {
  const [jwt, setJwt] = useState(() => window.sessionStorage.getItem('jwt'));

  return (
    <UserContext.Provider value={{ jwt, setJwt }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
