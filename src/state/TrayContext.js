import { createContext, useContext, useEffect, useState } from "react";
import tilesObjectData from '../data/tilesObject.json';
import PropTypes from 'prop-types';

const TrayContext = createContext(null);

export const TrayProvider = ({ children }) => {
  const [currentTray, setCurrentTray] = useState({});
  const [updateTray, setUpdateTray] = useState(false);

  const [allTiles, setAllTiles] = useState({});

  const startingTray = JSON.parse(JSON.stringify(tilesObjectData));

  // This will remove the tiles from the starting tray
  for (const rowColor in startingTray) {
    startingTray[rowColor].tiles = []
  }

  const changeTray = () => {
    setUpdateTray(!updateTray);
  }

  let tilesAvailable = false;

  for (const rowColor in currentTray) {
    if(currentTray[rowColor].tiles.length > 0) tilesAvailable = true;
  }

  useEffect(() => {
    setAllTiles(tilesObjectData);
  }, []);

  
  useEffect(() => {
      if(!tilesAvailable) setCurrentTray(startingTray);
      else setCurrentTray(currentTray);

  }, [updateTray]);

  return (
    <TrayContext.Provider value={{
      allTiles,
      currentTray,
      setCurrentTray,
      changeTray,
      updateTray
    }}>{children}</TrayContext.Provider>
  );
};

export const useTrayContext = () => {
  const {
    allTiles,
    currentTray,
    setCurrentTray,
    changeTray,
    updateTray
  } = useContext(TrayContext);

  return {
    allTiles,
    currentTray,
    setCurrentTray,
    changeTray,
    updateTray
  }
};

TrayProvider.propTypes = {
  children: PropTypes.shape({})
}
