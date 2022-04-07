import { useTrayContext } from "../../state/TrayContext";
import TileTray from "./TileTray";

const PlayerTray = () => {
  const { playerTiles } = useTrayContext();
  return (
    <TileTray currentTiles={playerTiles} />
  )
}

export default PlayerTray