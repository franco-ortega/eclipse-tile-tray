import PropTypes from 'prop-types';
import { useTrayContext } from '../../state/TrayContext';
import styles from './Tile.module.css';

const Tile = ({ rowName, color, cost, slot, title }) => {
  const { setCurrentTray, changeTray } = useTrayContext();

  let currentCount = 1;

  const onTileClick = () => {
    console.log('Tile clicked!!!:', slot);

    const tileSelected = {
      slotPosition: slot,
      cost,
      title,
      selected: currentCount++
    }

    setCurrentTray(prevState => {
      console.log('Setting the new state');
      prevState[rowName].tiles = [...prevState[rowName].tiles, tileSelected]
      return prevState;
    });

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
  slot: PropTypes.number,
  title: PropTypes.string.isRequired,
};

export default Tile;
