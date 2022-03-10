import { createContext, useState } from "react";
export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleToggleSelect = () => {
    setIsSelected(!isSelected);
  };

  const value = { isSelected, handleToggleSelect };
  return (
    <LocationContext.Provider value={value}>
      {children}
    </LocationContext.Provider>
  );
};
