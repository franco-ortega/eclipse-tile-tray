import TileRow from "../tileRow/TileRow";
// import PropTypes from 'prop-types';
import styles from './TileTray.module.css';
import { useTrayContext } from "../../state/TrayContext";

const TileTray = () => {
  const {
    // allTiles,
    currentTray } = useTrayContext();
  const tileRowList = [];
  // console.log('CURRENT TILES: ', currentTray);
  
  for (const rowName in currentTray) {
    const currentRow = currentTray[rowName]
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

  if(!currentTray) return <div>Loading...</div>

  return(
    <>
      {currentTray &&
        <section className={styles.TileTray}>
          {tileRowList}
        </section>
      }
    </>
  );
};

export default TileTray;
