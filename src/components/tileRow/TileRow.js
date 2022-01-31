import PropTypes from 'prop-types';
import TileSpace from '../tileSpace/TileSpace';
import styles from './TileRow.module.css';

const TileRow = ({
  row,
  slotsPerRow,
  color,
  currentTiles
}) => {
  const tileSpaceListNew = [];

  if(row < 4) {
    // The tile must go into the slot with the corresponding position
    for(let i = 0; i < slotsPerRow; i++) {
      const currentSlot = (i + 1) * 2;
      let tileToInsert;

      for(let j = 0; j < slotsPerRow; j++) {
        const currentTile = currentTiles[j];
        if(currentSlot === currentTile?.slotPosition) {
          tileToInsert = currentTile
          break;
        }
      }

      tileSpaceListNew.push(
        <TileSpace
          key={`${row}${i}`}
          slot={currentSlot}
          tile={tileToInsert}
          color={color}
        />
      );
    }
  } else {
    // The last row does NOT display a slot number; nor does it care about the slot where a tile is inserted; it simply places the tile in the first (left-most) slot available
    for(let i = 0; i < slotsPerRow; i++) {
      tileSpaceListNew.push(
        <TileSpace
          key={`${row}${i}`}
          slot={null}
          tile={currentTiles[i]}
          color={color}
        />
      );
    }
  }

  return (
    <ul className={styles.TileRow}>
      {tileSpaceListNew}
    </ul>
  );
};

TileRow.propTypes = {
  row: PropTypes.number.isRequired,
  slotsPerRow: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  currentTiles: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.shape({})
  ])
};

export default TileRow;

// REFACTOR THOUGHTS:

      // The current slot will see if there are any tiles left (check the length of currentTiles?)

      // // If there is a tile, it will check to see if the slot value matches the slot position
      // // If the slot position is null, it will enter the tile in the next slot
      // // Otherwise...
      // // // If there is a match, the tile to insert will be this current tile
      // // // If no match, it will check the next tile, and repeat this process until the last tile

      // // If there are no tiles, it will stop searching