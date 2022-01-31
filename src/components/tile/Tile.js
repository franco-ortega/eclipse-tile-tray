import { useTrayContext } from '../../state/TrayContext';
import Count from '../count/Count';
import PropTypes from 'prop-types';
import styles from './Tile.module.css';

const Tile = ({ rowName, color, slot, cost, selected, title, active, slotPosition }) => {
  const { setCurrentTray, changeTray } = useTrayContext();

  const onTileClick = () => {
    if(active) {
      setCurrentTray(prevState => {
        prevState[rowName].tiles.forEach((tile, i) => {
          if(tile.title === title) {
            if(tile.selected === 1) {
              prevState[rowName].tiles.splice(i, 1)
            } else {
              tile.selected--;
            }
          }
        });

        return prevState;
      });
    } else {
      let existingTile = false;
      setCurrentTray(prevState => {
        prevState[rowName].tiles.forEach(tile => {
          if(tile.title === title) existingTile = true;
          if(tile.title === title && slotPosition) {
            tile.selected++;
          }
        })
  
        if(!existingTile) {
          prevState[rowName].tiles = [...prevState[rowName].tiles, {
            slotPosition: slot,
            cost,
            title,
            selected: 1,
            active: true
          }];
        }

        prevState[rowName].tiles.sort((a, b) => a.slotPosition - b.slotPosition);
  
        return prevState;
      });
    }

    changeTray();
  };

  return (
    <button
      className={styles.Tile}
      style={{backgroundColor: `${color}`}}
      onClick={onTileClick}
      // disabled={true}
    >
      <p>{title}</p>
      <p>Cost: {cost.max} / {cost.min}</p>
      <p>{selected > 0 && slot && <Count selected={selected} />}</p>
    </button>
    // <>
    // {active ? <button
    //   className={styles.Tile}
    //   style={{backgroundColor: `${color}`}}
    //   onClick={onTileClick}
    // >
    // <p>{title}</p>
    // <p>Cost: {cost.max} / {cost.min}</p>
    // <p>{selected > 0 && slot && <Count selected={selected} />}</p>
    // </button>
    // : <button
    //   className={styles.Tile}
    //   style={{backgroundColor: `${color}`}}
    //   onClick={onTileClick}
    //   // disabled={true}
    // >
    // <p>{title}</p>
    // <p>Cost: {cost.max} / {cost.min}</p>
    // <p>{selected > 0 && slot && <Count selected={selected} />}</p>
    // </button>
    // }
    // </>
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
  active: PropTypes.bool,
  slotPosition: PropTypes.number
};

export default Tile;
