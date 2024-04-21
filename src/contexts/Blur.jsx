import { createContext, useContext, useState } from "react";

const BlurContex = createContext();

export const useBlur = () => {
  return useContext(BlurContex);
};

export const BlurProvider = ({ children }) => {
  const [isBlurActive, setIsBlurActive] = useState(false);
  const switchBlur = () => {
    setIsBlurActive(!isBlurActive ? true : false);
  };

  return (
    <BlurContex.Provider value={{ isBlurActive, switchBlur }}>
      {children}
    </BlurContex.Provider>
  );
};