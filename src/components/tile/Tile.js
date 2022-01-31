import PropTypes from 'prop-types';
import { useTrayContext } from '../../state/TrayContext';
import styles from './Tile.module.css';

const Tile = ({ cost, title, color }) => {
  const { currentTray, setCurrentTray } = useTrayContext();
  console.log('TILE: ', currentTray);
  console.log('TILE: ', setCurrentTray);

  const onTileClick = () => {
    console.log('Tile clicked!!!:', title);
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
  cost: PropTypes.shape({
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired
  }).isRequired,
  title: PropTypes.string.isRequired,
  color: PropTypes.string
};

export default Tile;
