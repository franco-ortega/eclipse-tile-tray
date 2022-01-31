import PropTypes from 'prop-types';
import { useTrayContext } from '../../state/TrayContext';
import styles from './Tile.module.css';

const Tile = ({ rowName, color, slot, cost, selected, title }) => {
  const { setCurrentTray, changeTray } = useTrayContext();

  const onTileClick = () => {
    let currentCount = selected;
    currentCount++;

    const tileSelected = {
      slotPosition: slot,
      cost,
      title,
      selected: currentCount
    }

    setCurrentTray(prevState => {
      let existingTile = false;

      prevState[rowName].tiles.forEach(tile => {
        if(tile.title === title) existingTile = true;
      })

      if(existingTile) {
        console.log('Increase the count of SELECTED');
        prevState[rowName].tiles.forEach(tile => {
          if(tile.title === title) tile.selected++
        })
    } else {
      console.log('Add SELECTED');
      prevState[rowName].tiles = [...prevState[rowName].tiles, tileSelected]
    }

      return prevState;
    });

    changeTray();
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
  slot: PropTypes.number,
  cost: PropTypes.shape({
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired
  }).isRequired,
  selected: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default Tile;
