import TileRow from "../tileRow/TileRow";
import styles from './TileTray.module.css';
import { useTrayContext } from "../../state/TrayContext";

const CurrentTray = () => {
  const { currentTray } = useTrayContext();
  const tileRowList = [];
  
  for (const rowColor in currentTray) {
    const currentRow = currentTray[rowColor]
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

export default CurrentTray;
