import TileRow from "../tileRow/TileRow";
import PropTypes from 'prop-types';
import styles from './TileTray.module.css';

const TileTray = ({ currentTiles }) => {
  const tileRowList = [];
  
  for (const rowName in currentTiles) {
    const currentRow = currentTiles[rowName]
    tileRowList.push(
      <TileRow
      key={currentRow.row}
      rowName={rowName}
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
  }).isRequired,
};

export default TileTray;
