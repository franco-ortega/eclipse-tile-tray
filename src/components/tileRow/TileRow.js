import PropTypes from 'prop-types';
import TileSpace from '../tileSpace/TileSpace';
import styles from './TileRow.module.css';

const TileRow = ({ row, availableTiles, color }) => {
  //The section will determine the number of TileSpaces needed in each row
  // Sections 1, 2, 3 will have 8 TilesSpaces
  // Section 4 will have 7 TilesSpaces
  // Add "number of TileSpaces" to props (maybe?)

  // If there are availableTiles (which would be one row of tiles at this point)
  // Then create a list of TileSpaces
  // // Each TileSpace will receive Tile info for its corresponding tile
  // // Or it will receive no info
  // // Each TileSpace will display its Tile or an empty slot

  // console.log({ color })

  const tileSpaceListNew = [];
  console.log({ tileSpaceListNew });

  if(row === 4) {
    for(let i = 1; i <= 7; i++) {
      tileSpaceListNew.push(
        <TileSpace
          key={i}
          slot={0}
          tile={availableTiles[i - 1]}
          color={color}
        />
      );
    }
  } else {
    for(let i = 1; i <= 8; i++) {

      let currentTile;

      for(let j = 0; j <= 7; j++) {
        const currentData = availableTiles[j];

        if((i * 2) === currentData?.slot) {
          currentTile = currentData
        }
      }

      tileSpaceListNew.push(
        <TileSpace
          key={i}
          slot={i * 2}
          tile={currentTile}
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
  availableTiles: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.shape({})
  ]),
  color: PropTypes.string
};

export default TileRow;
