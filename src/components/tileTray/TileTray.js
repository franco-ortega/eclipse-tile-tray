import TileRow from "../tileRow/TileRow";
import PropTypes from 'prop-types';
import styles from './TileTray.module.css';

const TileTray = ({ availableTiles }) => {
  const tileRowList = [];
  
  for (const property in availableTiles) {
    const currentRow = availableTiles[property]
    tileRowList.push(
      <TileRow
      key={currentRow.row}
      row={currentRow.row}
      availableTiles={currentRow.tiles}
      color={property}
    />
    );
  }

  // const emptyTray = [];

  // for(let i = 0; i < 4; i++) {
  //   emptyTray.push(
  //     <TileRow
  //       key={i}
  //       row={i + 1}
  //     />
  //   );
  // }

  if(!availableTiles) return <div>Loading...</div>

  return(
    <>
      {availableTiles
      &&
        <section className={styles.TileTray}>
          {tileRowList}
        </section>
      // :
      //   <main className={styles.TileTray}>
      //     {emptyTray}
      //   </main>
      }
    </>
  );
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
