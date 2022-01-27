import TileRow from "../tileRow/TileRow";
import PropTypes from 'prop-types';
import styles from './TileTray.module.css';

const TileTray = ({ totalTiles }) => {
  const tileRowList = [];
  
  for (const tileGroup in totalTiles) {
    const currentRow = totalTiles[tileGroup]
    tileRowList.push(
      <TileRow
      key={currentRow.row}
      row={currentRow.row}
      color={currentRow.color}
      totalTiles={currentRow.tiles}
    />
    );
  }

  if(!totalTiles) return <div>Loading...</div>

  return(
    <>
      {totalTiles &&
        <section className={styles.TileTray}>
          {tileRowList}
        </section>
      }
    </>
  );
};

TileTray.propTypes = {
  totalTiles: PropTypes.shape({
    pink: PropTypes.shape({}),
    green: PropTypes.shape({}),
    tan: PropTypes.shape({}),
    black: PropTypes.shape({}),
  }),
};

export default TileTray;
