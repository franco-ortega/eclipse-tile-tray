import TileTray from "../tileTray/TileTray";
import tilesObjectData from '../../data/tilesObject.json';
// import tilesObjectHalfData from '../../data/tilesObjectHalf.json';
// import { useEffect } from "react";
import { useTrayContext } from "../../state/TrayContext";

const App = () => {
  const { currentTray } = useTrayContext();
  return (
    <>
      <header>
        <h1>Eclipse Tech Tile Tray</h1>
      </header>
      <TileTray currentTiles={currentTray} />
      <TileTray currentTiles={tilesObjectData} />
      {/* <TileTray currentTiles={tilesObjectHalfData} /> */}
      {/* <TileTrayEmpty /> */}
    </>
  );
};

export default App;
