import TileTray from "../tileTray/TileTray";
import tilesObjectData from '../../data/tilesObject.json';
import tilesObjectHalfData from '../../data/tilesObjectHalf.json';
import { useEffect } from "react";
import { useTrayContext } from "../../state/TrayContext";

const App = () => {
  const { currentTray, setCurrentTray } = useTrayContext();
  console.log('APP: ', currentTray);

  const startingTray = JSON.parse(JSON.stringify(tilesObjectData));

  // This will empty the tiles from the starting tray
  for (const rowColor in startingTray) {
    startingTray[rowColor].tiles = []
  }

  useEffect(() => {
    setCurrentTray(startingTray);
  }, []);

  return (
    <>
      <header><h1>Eclipse Tech Tile Tray</h1></header>
      <TileTray currentTiles={currentTray} />
      <TileTray
        currentTiles={tilesObjectData}
        setCurrentTray={setCurrentTray}
        />
      <TileTray currentTiles={tilesObjectHalfData} />
        {/* <TileTrayEmpty /> */}
    </>
  );
};

export default App;
