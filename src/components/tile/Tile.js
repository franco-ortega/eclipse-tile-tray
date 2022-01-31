import PropTypes from 'prop-types';
import { useTrayContext } from '../../state/TrayContext';
import Count from '../count/Count';
import styles from './Tile.module.css';

const Tile = ({ rowName, color, slot, cost, selected, title }) => {
  const { setCurrentTray, changeTray } = useTrayContext();

  const onTileClick = () => {
    console.log('Tile clicked');

    setCurrentTray(prevState => {
      let existingTile = false;

      prevState[rowName].tiles.forEach(tile => {
        if(tile.title === title) existingTile = true;
      })

      if(existingTile) {
        prevState[rowName].tiles.forEach(tile => {
          if(tile.title === title) {
            tile.selected++;
          }
        })
      } else {
        prevState[rowName].tiles = [...prevState[rowName].tiles, {
          slotPosition: slot,
          cost,
          title,
          selected: 1
        }];
      }
      

      prevState[rowName].tiles.sort((a, b) => a.slotPosition - b.slotPosition);

      return prevState;
    });
    changeTray();
  };

  return (
    <button
      className={styles.Tile}
      style={{backgroundColor: `${color}`}}
      onClick={onTileClick}
    >
    <p>{title}</p>
    <p>Cost: {cost.max} / {cost.min}</p>
    <p>{selected > 0 && slot && <Count selected={selected} />}</p>
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
