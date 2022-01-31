import PropTypes from 'prop-types';
import { useTrayContext } from '../../state/TrayContext';
import styles from './Tile.module.css';

const Tile = ({ rowName, color, cost, slot, title }) => {
  const { currentTray, setCurrentTray, changeTray } = useTrayContext();
  console.log('TILE: ', currentTray);
  console.log('FUNC: ', setCurrentTray);

  let currentCount = 1;

  const onTileClick = () => {
    console.log('Tile clicked!!!:', slot);

    const tileSelected = {
      slotPosition: slot,
      cost,
      title,
      selected: currentCount++
    }

    console.log('CURRET TRAY ROW', currentTray[rowName].tiles);

    currentTray[rowName].tiles.push(tileSelected);
    changeTray();

    console.log(tileSelected);
  }

  return (
    <button
      className={styles.Tile}
      style={{backgroundColor: `${color}`}}
      onClick={onTileClick}
    >
    <p>{title}</p>
    <p>Cost: {cost.max} / {cost.min}</p>
    </button>
  );
};

Tile.propTypes = {
  rowName: PropTypes.string,
  color: PropTypes.string,
  cost: PropTypes.shape({
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired
  }).isRequired,
  slot: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default Tile;
