import TileRow from "../tileRow/TileRow";
import styles from './TileTray.module.css';
import { useTrayContext } from "../../state/TrayContext";

const TileTray = () => {
  const { currentTray } = useTrayContext();
  const tileRowList = [];
  
  for (const rowName in currentTray) {
    const currentRow = currentTray[rowName]
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
