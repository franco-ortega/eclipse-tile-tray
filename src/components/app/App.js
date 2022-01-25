import TileTray from "../tileTray/TileTray";
import availableTiles from '../../data/tiles.json';
import { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState();

  useEffect(() => {
    setData(availableTiles);
  }, []);

  console.log('DATA:');
  
  if(data) console.log(data.pink);
  
  return (
    <>
      <header><h1>Eclipse Tech Tile Tray</h1></header>
      {/* <TileTray /> */}
      <TileTray availableTiles={data} />
    </>
  );
};

export default App;
