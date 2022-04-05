import GameTray from '../tileTray/GameTray';
import PlayerTray from '../tileTray/PlayerTray';

const App = () => {
  return (
    <>
      <header>
        <h1>Eclipse Tech Tile Tray</h1>
      </header>
      <GameTray />
      <PlayerTray />
    </>
  );
};

export default App;
