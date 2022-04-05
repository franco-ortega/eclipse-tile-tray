import PropTypes from 'prop-types';
import TileSpace from '../tileSpace/TileSpace';
import styles from './TileRow.module.css';

const TileRow = ({
  rowColor,
  row,
  slotsPerRow,
  color,
  tiles
}) => {
  const tileSpacesInThisRow = [];
  const tileSpacesInBlackRowOne = [];
  const tileSpacesInBlackRowTwo = [];
  const tileSpacesInBlackRowThree = [];
  console.log(tiles);

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

      tileSpacesInThisRow.push(
        <TileSpace
          key={`${row}${i}`}
          rowColor={rowColor}
          color={color}
          slot={currentSlot}
          tile={tileToInsert}
        />
      );
    }
  } else {
    // The last row does NOT display a slot number; nor does it care about the slot where a tile is inserted; it simply places the tile in the first (left-most) slot available
    for(let i = 0; i < slotsPerRow; i++) {
      tileSpacesInBlackRowOne.push(
        <TileSpace
          key={`${row}${i}`}
          rowColor={rowColor}
          color={color}
          slot={null}
          tile={tiles[i]}
        />
      );
    }

    for(let i = 0; i < slotsPerRow; i++) {
      tileSpacesInBlackRowTwo.push(
        <TileSpace
          key={`${row}${i}`}
          rowColor={rowColor}
          color={color}
          slot={null}
          tile={tiles[i + 7]}
        />
      );
    }

    for(let i = 0; i < slotsPerRow; i++) {
      tileSpacesInBlackRowThree.push(
        <TileSpace
          key={`${row}${i}`}
          rowColor={rowColor}
          color={color}
          slot={null}
          tile={tiles[i + 14]}
        />
      );
    }
  }

  return (
    <>
      {tileSpacesInThisRow.length > 0 &&
        <ul className={styles.TileRow}>
          {tileSpacesInThisRow}
        </ul>
      }
      {tileSpacesInBlackRowOne.length > 0 &&
        <ul className={styles.TileRow}>
          {tileSpacesInBlackRowOne}
        </ul>
      }
      {tileSpacesInBlackRowTwo.length > 0 && tiles.length > 7 &&
        <ul className={styles.TileRow}>
          {tileSpacesInBlackRowTwo}
        </ul>
      }
      {tileSpacesInBlackRowThree.length > 0 && tiles.length > 14 &&
        <ul className={styles.TileRow}>
          {tileSpacesInBlackRowThree}
        </ul>
      }
    </>
  );
};

TileRow.propTypes = {
  rowColor: PropTypes.string.isRequired,
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