import TileRow from "../tileRow/TileRow";
import PropTypes from 'prop-types';
import styles from './TileTray.module.css';

const TileTray = ({ availableTiles }) => {
  console.log({ availableTiles })
  const tileRowList = [];
  
  for (const property in availableTiles) {
    const currentRow = availableTiles[property]
    tileRowList.push(
      <TileRow
      key={currentRow.row}
      section={currentRow.row}
      availableTiles={currentRow.tiles}
      color={property}
    />
    );
  }

  if(!availableTiles) return <div>Loading...</div>

  const testing = false;
  return(
    <>
    {testing
    ? 
    <div className={styles.TileTray}>Testing...</div>
    :
    <section className={styles.TileTray}>
      {tileRowList}
    </section>
    }
    </>
  );


  

  // return (
  //   <div className={styles.TileTray}>
  //   {pink.length === 0
  //   ?
  //     <div>Loading...</div>
  //   :
  //     <main className={styles.TileTray}>
  //       <section>
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
  //     </main>
  //   }
  //   </div>
  // )




};

TileTray.propTypes = {
  availableTiles: PropTypes.shape({
    pink: PropTypes.shape({}),
    green: PropTypes.shape({}),
    tan: PropTypes.shape({}),
    black: PropTypes.shape({}),
  }),
};


export default TileTray;
