import PropTypes from 'prop-types';
import TileSpace from '../tileSpace/TileSpace';
import styles from './TileRow.module.css';

const TileRow = ({
  rowType,
  row,
  slotsPerRow,
  color,
  tiles
}) => {
  const standardTileSpacesRow = [];
  const rareTileSpacesRowOne = [];
  const rareTileSpacesRowTwo = [];
  const rareTileSpacesRowThree = [];

  if(slotsPerRow === 8) {
    // The tile must go into the slot with the corresponding position
    for(let i = 0; i < slotsPerRow; i++) {
      const currentSlot = (i + 1) * 2;
      let tileToInsert;

      for(let j = 0; j < slotsPerRow; j++) {
        const currentTile = tiles[j];
        if(currentSlot === currentTile?.slotPosition) {
          tileToInsert = currentTile
          break;
        }
      }

      standardTileSpacesRow.push(
        <TileSpace
          key={`${row}${i}`}
          rowType={rowType}
          color={color}
          slot={currentSlot}
          tile={tileToInsert}
        />
      );
    }
  } else {
    // The last row does NOT display a slot number; nor does it care about the slot where a tile is inserted; it simply places the tile in the first (left-most) slot available
    for(let i = 0; i < slotsPerRow; i++) {
      rareTileSpacesRowOne.push(
        <TileSpace
          key={`${row}${i}`}
          rowType={rowType}
          color={color}
          slot={null}
          tile={tiles[i]}
        />
      );
    }

    for(let i = 0; i < slotsPerRow; i++) {
      rareTileSpacesRowTwo.push(
        <TileSpace
          key={`${row}${i}`}
          rowType={rowType}
          color={color}
          slot={null}
          tile={tiles[i + 7]}
        />
      );
    }

    for(let i = 0; i < slotsPerRow; i++) {
      rareTileSpacesRowThree.push(
        <TileSpace
          key={`${row}${i}`}
          rowType={rowType}
          color={color}
          slot={null}
          tile={tiles[i + 14]}
        />
      );
    }
  }

  return (
    <>
      {standardTileSpacesRow.length > 0 &&
        <ul className={styles.TileRow}>
          {standardTileSpacesRow}
        </ul>
      }
      {rareTileSpacesRowOne.length > 0 &&
        <ul className={styles.TileRow}>
          {rareTileSpacesRowOne}
        </ul>
      }
      {rareTileSpacesRowTwo.length > 0 && tiles.length > 7 &&
        <ul className={styles.TileRow}>
          {rareTileSpacesRowTwo}
        </ul>
      }
      {rareTileSpacesRowThree.length > 0 && tiles.length > 14 &&
        <ul className={styles.TileRow}>
          {rareTileSpacesRowThree}
        </ul>
      }
    </>
  );
};

TileRow.propTypes = {
  rowType: PropTypes.string.isRequired,
  row: PropTypes.number.isRequired,
  slotsPerRow: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  tiles: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.shape({})
  ])
};

export default TileRow;

// REFACTOR THOUGHTS:

      // The current slot will see if there are any tiles left (check the length of tiles?)

      // // If there is a tile, it will check to see if the slot value matches the slot position
      // // If the slot position is null, it will enter the tile in the next slot
      // // Otherwise...
      // // // If there is a match, the tile to insert will be this current tile
      // // // If no match, it will check the next tile, and repeat this process until the last tile

      // // If there are no tiles, it will stop searching