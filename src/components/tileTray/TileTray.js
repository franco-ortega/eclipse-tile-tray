import TileRow from "../tileRow/TileRow";
import PropTypes from 'prop-types';
import styles from './TileTray.module.css';

const TileTray = ({ currentTiles }) => {
  const tileRowList = [];
  
  for (const tileGroup in currentTiles) {
    const currentRow = currentTiles[tileGroup]
    tileRowList.push(
      <TileRow
      key={currentRow.row}
      row={currentRow.row}
      color={currentRow.color}
      currentTiles={currentRow.tiles}
    />
    );
  }

  if(!currentTiles) return <div>Loading...</div>

  return(
    <>
      {currentTiles &&
        <section className={styles.TileTray}>
          {tileRowList}
        </section>
      }
    </>
  );
};

TileTray.propTypes = {
  currentTiles: PropTypes.shape({
    pink: PropTypes.shape({}),
    green: PropTypes.shape({}),
    tan: PropTypes.shape({}),
    black: PropTypes.shape({}),
  }),
};

export default TileTray;
