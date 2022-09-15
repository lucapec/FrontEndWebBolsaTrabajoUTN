import React, { useState } from "react";

const UserContext = React.createContext();

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);

  const [data, setData] = useState();

  const EnterpriseDataHandler = (datos) => {
    setData({ ...data, ...datos });
  };

  return (
    <UserContext.Provider value={{ user, setUser, EnterpriseDataHandler }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
