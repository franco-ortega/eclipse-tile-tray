import PropTypes from 'prop-types';
import TileSpace from '../tileSpace/TileSpace';
import styles from './TileRow.module.css';

const TileRow = ({
  rowName,
  row,
  slotsPerRow,
  color,
  tiles
}) => {
  const tileSpaceListNew = [];
  const tileSpaceListNewTwo = [];
  const tileSpaceListNewThree = [];

  if(row < 4) {
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

      tileSpaceListNew.push(
        <TileSpace
          key={`${row}${i}`}
          rowName={rowName}
          color={color}
          slot={currentSlot}
          tile={tileToInsert}
        />
      );
    }
  } else {
    // The last row does NOT display a slot number; nor does it care about the slot where a tile is inserted; it simply places the tile in the first (left-most) slot available
    if(tiles.length > 0) {
      console.log('length > 0')
      for(let i = 0; i < tiles.length; i++) {
        if(i < 7) {
          tileSpaceListNew.push(
            <TileSpace
              key={`${row}${i}`}
              rowName={rowName}
              color={color}
              slot={null}
              tile={tiles[i]}
            />
          );
        } else if(i >= 7 && i < 14) {
          tileSpaceListNewTwo.push(
            <TileSpace
              key={`${row}${i}`}
              rowName={rowName}
              color={color}
              slot={null}
              tile={tiles[i]}
            />
          );
        } else if (i >= 14 && i < 21) {
          tileSpaceListNewThree.push(
            <TileSpace
              key={`${row}${i}`}
              rowName={rowName}
              color={color}
              slot={null}
              tile={tiles[i]}
            />
          );
        }
      }
    } else {
      console.log('length === 0');

      for(let i = 0; i < slotsPerRow; i++) {
        tileSpaceListNew.push(
          <TileSpace
            key={`${row}${i}`}
            rowName={rowName}
            color={color}
            slot={null}
            tile={tiles[i]}
          />
        );
      }
    }

  }

  return (
    <>
      <ul className={styles.TileRow}>
        {tileSpaceListNew}
      </ul>
      {tileSpaceListNewTwo.length > 0 && <ul className={styles.TileRow}>
        {tileSpaceListNewTwo}
      </ul>}
      {tileSpaceListNewThree.length > 0 && <ul className={styles.TileRow}>
        {tileSpaceListNewThree}
      </ul>}
    </>
  );
};

TileRow.propTypes = {
  rowName: PropTypes.string.isRequired,
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