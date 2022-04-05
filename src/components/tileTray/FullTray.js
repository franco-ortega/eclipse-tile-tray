import TileRow from "../tileRow/TileRow";
import styles from './TileTray.module.css';
import { useTrayContext } from "../../state/TrayContext";

const FullTray = () => {
  const { allTiles } = useTrayContext();
  const tileRowList = [];
  
  for (const rowColor in allTiles) {
    const currentRow = allTiles[rowColor]
    tileRowList.push(
      <TileRow
      key={currentRow.row}
      rowColor={rowColor}
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

export default FullTray;
