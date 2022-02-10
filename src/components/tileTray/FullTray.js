import TileRow from "../tileRow/TileRow";
// import PropTypes from 'prop-types';
import styles from './TileTray.module.css';
import { useTrayContext } from "../../state/TrayContext";

const TileTray = () => {
  const { allTiles } = useTrayContext();
  const tileRowList = [];
  // console.log('CURRENT TILES: ', );
  
  for (const rowName in allTiles) {
    const currentRow = allTiles[rowName]
    tileRowList.push(
      <TileRow
      key={currentRow.row}
      rowName={rowName}
      row={currentRow.row}
      slotsPerRow={currentRow.slotsPerRow}
      color={currentRow.color}
      tiles={currentRow.tiles}
    />
    );
  }

  if(!allTiles) return <div>Loading...</div>

  return(
    <>
      {allTiles &&
        <section className={styles.TileTray}>
          {tileRowList}
        </section>
      }
    </>
  );
};

// TileTray.propTypes = {
//   currentTiles: PropTypes.shape({
//     // pink: PropTypes.shape({}).isRequired,
//     // green: PropTypes.shape({}).isRequired,
//     // tan: PropTypes.shape({}).isRequired,
//     // black: PropTypes.shape({}).isRequired
//   }).isRequired,
// };

export default TileTray;

// const rowObject = {
//   row: PropTypes.number.isRequired,
//   slotsPerRow: PropTypes.number.isRequired,
//   color: PropTypes.string.isRequired,
//   tiles: PropTypes.array.isRequired
// };
// console.log(rowObject);
