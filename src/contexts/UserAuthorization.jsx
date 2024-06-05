import { useContext, useState } from "react";
import { createContext } from "react";

const UserAuthorization = createContext();

export const useUserAuthorization = () => {
  return useContext(UserAuthorization);
};

export const UserAuthorizationProvider = ({ children }) => {
  const [isUserAuthorization, setIsUserAuthorization] = useState(false);
  const switchAuthorization = () => {
    setIsUserAuthorization(!isUserAuthorization ? true : false);
  };

  return (
    <UserAuthorization.Provider
      value={{ isUserAuthorization, switchAuthorization }}
    >
      {children}
    </UserAuthorization.Provider>
  );
};
