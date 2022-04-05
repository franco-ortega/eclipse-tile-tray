import { useTrayContext } from "../../state/TrayContext";
import TileTray from "./TileTray";

const PlayerTray = () => {
  const { currentTray } = useTrayContext();
  return (
    <TileTray currentTiles={currentTray} />
  )
}

export default PlayerTray