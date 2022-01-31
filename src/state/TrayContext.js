import { createContext, useContext, useState } from "react";
import PropTypes from 'prop-types';

const TrayContext = createContext(null);

export const TrayProvider = ({ children }) => {
  const [currentTray, setCurrentTray] = useState({});

  return (
    <TrayContext.Provider value={{
      currentTray,
      setCurrentTray
    }}>{children}</TrayContext.Provider>
  );
};

export const useTrayContext = () => {
  const {
    currentTray,
    setCurrentTray
  } = useContext(TrayContext);

  return {
    currentTray,
    setCurrentTray
  }
};

TrayProvider.propTypes = {
  children: PropTypes.shape({})
}
