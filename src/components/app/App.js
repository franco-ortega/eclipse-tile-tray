import TileTray from "../tileTray/TileTray";
// import TileTrayEmpty from "../tileTray/TileTrayEmpty";
// import availableTiles from '../../data/tiles.json';
// import tilesArrayData from '../../data/tilesArray.json';
import tilesObjectData from '../../data/tilesObject.json';
import tilesObjectHalfData from '../../data/tilesObjectHalf.json';
import { useEffect, useState } from "react";

const App = () => {
  const [currentTiles, setCurrentTiles] = useState({});

  const placeholderData = {
    'pink': { 'row': 1, 'tiles': []},
    'green': { 'row': 2, 'tiles': []},
    'tan': { 'row': 3, 'tiles': []},
    'black': { 'row': 4, 'tiles': []}
  }

  useEffect(() => {
    setCurrentTiles(placeholderData);
  }, [])

  return (
    <>
      <header><h1>Eclipse Tech Tile Tray</h1></header>
      <TileTray availableTiles={currentTiles} />
      {/* <TileTrayEmpty /> */}
      <TileTray
        availableTiles={tilesObjectData}
        setCurrentTiles={setCurrentTiles}
      />
      <TileTray availableTiles={tilesObjectHalfData} />
    </>
  );
};

export default App;
