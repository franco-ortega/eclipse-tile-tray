import { createContext, useContext, useState } from "react";
import PropTypes from 'prop-types';

const TrayContext = createContext(null);

export const TrayProvider = ({ children }) => {
  const [currentTray, setCurrentTray] = useState({});
  const [updateTray, setUpdateTray] = useState(false);

  const changeTray = () => {
    setUpdateTray(!updateTray);
  }

  return (
    <TrayContext.Provider value={{
      currentTray,
      setCurrentTray,
      changeTray,
      updateTray
    }}>{children}</TrayContext.Provider>
  );
};

export const useTrayContext = () => {
  const {
    currentTray,
    setCurrentTray,
    changeTray,
    updateTray
  } = useContext(TrayContext);

  return {
    currentTray,
    setCurrentTray,
    changeTray,
    updateTray
  }
};

TrayProvider.propTypes = {
  children: PropTypes.shape({})
}
