import FullTray from '../tileTray/FullTray';
import CurrentTray from '../tileTray/CurrentTray';

const App = () => {
  return (
    <>
      <header>
        <h1>Eclipse Tech Tile Tray</h1>
      </header>
      <FullTray />
      <CurrentTray />
    </>
  );
};

export default App;
