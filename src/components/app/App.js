import TileTray from "../tileTray/TileTray";
import TileTrayEmpty from "../tileTray/TileTrayEmpty";
// import availableTiles from '../../data/tiles.json';
// import tilesArrayData from '../../data/tilesArray.json';
import tilesObjectData from '../../data/tilesObject.json';
import tilesObjectHalfData from '../../data/tilesObjectHalf.json';

const App = () => {
  return (
    <>
      <header><h1>Eclipse Tech Tile Tray</h1></header>
      {/* <TileTray /> */}
      <TileTrayEmpty />
      <TileTray availableTiles={tilesObjectData} />
      <TileTray availableTiles={tilesObjectHalfData} />
    </>
  );
};

export default App;
