import TileRow from "../tileRow/TileRow";
import PropTypes from 'prop-types';
import styles from './TileTray.module.css';

const TileTray = ({ currentTiles }) => {
  const tileRowList = [];
  
  for (const rowColor in currentTiles) {
    const currentRow = currentTiles[rowColor]
    tileRowList.push(
      <TileRow
      key={currentRow.row}
      row={currentRow.row}
      slotsPerRow={currentRow.slotsPerRow}
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
    pink: PropTypes.shape({}).isRequired,
    green: PropTypes.shape({}).isRequired,
    tan: PropTypes.shape({}).isRequired,
    black: PropTypes.shape({}).isRequired
  }).isRequired,
};

export default TileTray;
