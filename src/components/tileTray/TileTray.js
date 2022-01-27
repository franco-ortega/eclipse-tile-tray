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
      color={currentRow.color}
    />
    );
  }

  if(!availableTiles) return <div>Loading...</div>

  return(
    <>
      {availableTiles &&
        <section className={styles.TileTray}>
          {tileRowList}
        </section>
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
