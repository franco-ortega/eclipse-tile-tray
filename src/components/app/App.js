import TileTray from "../tileTray/TileTray";
// import TileTrayEmpty from "../tileTray/TileTrayEmpty";
// import totalTiles from '../../data/tiles.json';
// import tilesArrayData from '../../data/tilesArray.json';
import tilesObjectData from '../../data/tilesObject.json';
import tilesObjectHalfData from '../../data/tilesObjectHalf.json';
import { useEffect, useState } from "react";

const App = () => {
  const [currentTiles, setCurrentTiles] = useState({});

  const currentTray = JSON.parse(JSON.stringify(tilesObjectData));

  for (const tileSection in currentTray) {
    currentTray[tileSection].tiles = []
  }

  useEffect(() => {
    setCurrentTiles(currentTray);
  }, []);

  return (
    <>
      <header><h1>Eclipse Tech Tile Tray</h1></header>
      <TileTray totalTiles={currentTiles} />
      <TileTray
        totalTiles={tilesObjectData}
        setCurrentTiles={setCurrentTiles}
        />
      <TileTray totalTiles={tilesObjectHalfData} />
        {/* <TileTrayEmpty /> */}
    </>
  );
};

export default App;
