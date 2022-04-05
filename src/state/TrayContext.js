import { createContext, useContext, useEffect, useState } from "react";
import tilesObjectData from '../data/tilesObject.json';
import PropTypes from 'prop-types';

const TrayContext = createContext(null);

export const TrayProvider = ({ children }) => {
  const [playerTiles, setPlayerTiles] = useState({});
  const [updateTray, setUpdateTray] = useState(false);

  const [allTiles, setAllTiles] = useState({});

  const startingTray = JSON.parse(JSON.stringify(tilesObjectData));

  // This will remove the tiles from the starting tray
  for (const rowType in startingTray) {
    startingTray[rowType].tiles = []
  }

  const changeTray = () => {
    setUpdateTray(!updateTray);
  }

  let tilesAvailable = false;

  for (const rowType in playerTiles) {
    if(playerTiles[rowType].tiles.length > 0) tilesAvailable = true;
  }

  useEffect(() => {
    setAllTiles(tilesObjectData);
  }, []);

  
  useEffect(() => {
      if(!tilesAvailable) setPlayerTiles(startingTray);
      else setPlayerTiles(playerTiles);

  }, [updateTray]);

  return (
    <TrayContext.Provider value={{
      allTiles,
      playerTiles,
      setPlayerTiles,
      changeTray,
      updateTray
    }}>{children}</TrayContext.Provider>
  );
};

export const useTrayContext = () => {
  const {
    allTiles,
    playerTiles,
    setPlayerTiles,
    changeTray,
    updateTray
  } = useContext(TrayContext);

  return {
    allTiles,
    playerTiles,
    setPlayerTiles,
    changeTray,
    updateTray
  }
};

TrayProvider.propTypes = {
  children: PropTypes.shape({})
}
