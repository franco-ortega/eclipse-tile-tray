import TileTray from "../tileTray/TileTray";
import availableTiles from '../../data/tiles.json';
import TileTrayEmpty from "../tileTray/TileTrayEmpty";
// import tilesArrayData from '../../data/tilesArray.json';
// import tilesObjectData from '../../data/tilesObject.json';

const App = () => {
  return (
    <>
      <header><h1>Eclipse Tech Tile Tray</h1></header>
      <TileTray />
      <TileTrayEmpty />
      <TileTray availableTiles={availableTiles} />
    </>
  );
};

export default App;
