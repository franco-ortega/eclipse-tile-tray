import TileRow from "../tileRow/TileRow";
import styles from './TileTray.module.css';
import { useTrayContext } from "../../state/TrayContext";

const TileTray = () => {
  const { allTiles } = useTrayContext();
  const tileRowList = [];
  
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

export default TileTray;
