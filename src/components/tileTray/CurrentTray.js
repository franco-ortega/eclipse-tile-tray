import TileRow from "../tileRow/TileRow";
import styles from './TileTray.module.css';
import { useTrayContext } from "../../state/TrayContext";

const playerTiles = () => {
  const { playerTiles } = useTrayContext();
  const tileRowList = [];
  
  for (const rowType in playerTiles) {
    const currentRow = playerTiles[rowType]
    tileRowList.push(
      <TileRow
      key={currentRow.row}
      rowType={rowType}
      row={currentRow.row}
      slotsPerRow={currentRow.slotsPerRow}
      color={currentRow.color}
      tiles={currentRow.tiles}
    />
    );
  }

  if(!playerTiles) return <div>Loading...</div>

  return(
    <>
      {playerTiles &&
        <section className={styles.TileTray}>
          {tileRowList}
        </section>
      }
    </>
  );
};

export default playerTiles;
