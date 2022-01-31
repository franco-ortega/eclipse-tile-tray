import TileTray from "../tileTray/TileTray";
import tilesObjectData from '../../data/tilesObject.json';
import tilesObjectHalfData from '../../data/tilesObjectHalf.json';
import { useEffect } from "react";
import { useTrayContext } from "../../state/TrayContext";

const App = () => {
  const { currentTray, setCurrentTray, updateTray } = useTrayContext();
  console.log('APP: ', currentTray);

  const startingTray = JSON.parse(JSON.stringify(tilesObjectData));

  // This will empty the tiles from the starting tray
  for (const rowColor in startingTray) {
    startingTray[rowColor].tiles = []
  }

  
  useEffect(() => {
      if(
        currentTray?.pink?.tiles.length > 0 ||
        currentTray?.green?.tiles.length > 0 ||
        currentTray?.tan?.tiles.length > 0 ||
        currentTray?.black?.tiles.length > 0
        ) {
        setCurrentTray(currentTray);
      } else {
        setCurrentTray(startingTray);
      }
  }, [updateTray]);

  return (
    <>
      <header><h1>Eclipse Tech Tile Tray</h1></header>
      <TileTray currentTiles={currentTray} />
      <TileTray currentTiles={tilesObjectData} />
      <TileTray currentTiles={tilesObjectHalfData} />
        {/* <TileTrayEmpty /> */}
    </>
  );
};

export default App;
