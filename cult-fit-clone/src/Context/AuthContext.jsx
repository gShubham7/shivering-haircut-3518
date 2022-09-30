import React from "react";

export const AuthContext = React.createContext();

function AuthContextProvider({ children }) {
  const [isAuth, setIsAuth] = React.useState(false);
  const [contact, setContact] = React.useState("");

  const toggleAuth = (val) => {
    setIsAuth(!isAuth);
    setContact(val);
  };
  return (
    <AuthContext.Provider value={{ isAuth, toggleAuth, contact, setContact }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContextProvider };
