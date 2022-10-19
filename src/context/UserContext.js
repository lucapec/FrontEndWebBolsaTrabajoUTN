import React, { useState } from "react";

const UserContext = React.createContext();

export function UserContextProvider({ children }) {
  const [jwt, setJwt] = useState(() => window.sessionStorage.getItem('jwt'));
  const [role, setRole] = useState(() => window.sessionStorage.getItem('role'));

  return (
    <UserContext.Provider value={{ jwt, setJwt, role, setRole }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
