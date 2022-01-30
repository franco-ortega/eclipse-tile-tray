import TileTray from "../tileTray/TileTray";
import tilesObjectData from '../../data/tilesObject.json';
import tilesObjectHalfData from '../../data/tilesObjectHalf.json';
import { useEffect, useState } from "react";

const App = () => {
  const [currentTray, setCurrentTray] = useState({});

  const startingTray = JSON.parse(JSON.stringify(tilesObjectData));

  // empties tiles from starting tray
  for (const rowColor in startingTray) {
    startingTray[rowColor].tiles = []
  }

  useEffect(() => {
    setCurrentTray(startingTray);
  }, []);

  return (
    <>
      <header><h1>Eclipse Tech Tile Tray</h1></header>
      <TileTray totalTiles={currentTray} />
      <TileTray
        totalTiles={tilesObjectData}
        setCurrentTray={setCurrentTray}
        />
      <TileTray totalTiles={tilesObjectHalfData} />
        {/* <TileTrayEmpty /> */}
    </>
  );
};

export default App;
