import TileRow from "../tileRow/TileRow";
import PropTypes from 'prop-types';
import styles from './TileTray.module.css';

const TileTray = ({ currentTiles }) => {
  const tileRowList = [];
  console.log(currentTiles);
  
  for (const rowColor in currentTiles) {
    const currentRow = currentTiles[rowColor]
    tileRowList.push(
      <TileRow
      key={currentRow.row}
      rowColor={rowColor}
      row={currentRow.row}
      slotsPerRow={currentRow.slotsPerRow}
      color={currentRow.color}
      tiles={currentRow.tiles}
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
