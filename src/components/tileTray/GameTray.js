import { useTrayContext } from "../../state/TrayContext";
import TileTray from "./TileTray";

const GameTray = () => {
  const { allTiles } = useTrayContext();
  return (
    <TileTray currentTiles={allTiles} />
  )
}

export default GameTray;
