import TileRow from "../tileRow/TileRow";
import PropTypes from 'prop-types';
import styles from './TileTray.module.css';
import { useState } from "react";
import { useEffect } from "react";

const TileTray = ( {availableTiles} ) => {
  const [tileData, setTileData] = useState({});

  const [pink, setPink] = useState([]);
  const [green, setGreen] = useState([]);
  const [tan, setTan] = useState([]);
  const [black, setBlack] = useState([]);

  useEffect(() => {
    if(availableTiles) {
      setTileData(availableTiles)
      setPink(availableTiles.pink);
      setGreen(availableTiles.green);
      setTan(availableTiles.tan);
      setBlack(availableTiles.black);
    }
  }, [availableTiles]);

  console.log(tileData);
  console.log(pink);
  console.log(green);
  console.log(tan);
  console.log(black);
  

  if(pink.length === 0) return <div>Loading...</div>



  if(pink.length > 0) return(
    <main className={styles.TileTray}>
      <section>
        <TileRow section={1} availableTiles={pink} />
      </section>
      <section>
        <TileRow section={2} availableTiles={green}  />
      </section>
      <section>
        <TileRow section={3} availableTiles={tan}  />
      </section>
      <section>
        <TileRow section={4} availableTiles={black}  />
      </section>
    </main>
  );

  if(pink.length === 0) return(
    <main className={styles.TileTray}>
      <section>
        <TileRow section={1} availableTiles={availableTiles} />
      </section>
      <section>
        <TileRow section={2} availableTiles={availableTiles}  />
      </section>
      <section>
        <TileRow section={3} availableTiles={availableTiles}  />
      </section>
      <section>
        <TileRow section={4} availableTiles={availableTiles}  />
      </section>
    </main>
  );

  // return pink ? 
  //   <main className={styles.TileTray}>
  //     <section>
  //       <TileRow section={1} availableTiles={pink} />
  //     </section>
  //     <section>
  //       <TileRow section={2} availableTiles={green}  />
  //     </section>
  //     <section>
  //       <TileRow section={3} availableTiles={tan}  />
  //     </section>
  //     <section>
  //       <TileRow section={4} availableTiles={black}  />
  //     </section>
  //   </main>
  // :
  //   <main className={styles.TileTray}>
  //     <section>
  //       <TileRow section={1} availableTiles={availableTiles} />
  //     </section>
  //     <section>
  //       <TileRow section={2} availableTiles={availableTiles}  />
  //     </section>
  //     <section>
  //       <TileRow section={3} availableTiles={availableTiles}  />
  //     </section>
  //     <section>
  //       <TileRow section={4} availableTiles={availableTiles}  />
  //     </section>
  //   </main>


  
};

TileTray.propTypes = {
  availableTiles: PropTypes.shape({
    pink: PropTypes.array,
    green: PropTypes.array,
    tan: PropTypes.array,
    black: PropTypes.array,
  }),
};


export default TileTray;
