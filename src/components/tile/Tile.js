import PropTypes from 'prop-types';
import { useTrayContext } from '../../state/TrayContext';
import Count from '../count/Count';
import styles from './Tile.module.css';

const Tile = ({ rowName, color, slot, cost, selected, title, active }) => {
  const { setCurrentTray, changeTray } = useTrayContext();

  const onTileClick = () => {

    if(active) {
      console.log('Tile clicked');
      setCurrentTray(prevState => {
        let existingTile = false;

        prevState[rowName].tiles.forEach((tile, i) => {
          if(tile.title === title) existingTile = true;
          if(tile.selected === 1) {
            prevState[rowName].tiles.splice(i, 1)
          }
          return prevState;
        });

        if(existingTile) {
          console.log('EXISTING TILE')
          prevState[rowName].tiles.forEach(tile => {
            if(tile.title === title) {
              console.log('Subtract TILE')
              tile.selected--;
            }
          });
        }

        return prevState;
      });
    } else {

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
    <>
    {active && selected > 0 ? <button
      className={styles.Tile}
      style={{backgroundColor: `${color}`}}
      onClick={onTileClick}
    >
    <p>{title}</p>
    <p>Cost: {cost.max} / {cost.min}</p>
    <p>{selected > 0 && slot && <Count selected={selected} />}</p>
    </button>
    : !active ? <button
      className={styles.Tile}
      style={{backgroundColor: `${color}`}}
      onClick={onTileClick}
    >
    <p>{title}</p>
    <p>Cost: {cost.max} / {cost.min}</p>
    <p>{selected > 0 && slot && <Count selected={selected} />}</p>
    </button>
    : null
    }
    </>
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
  active: PropTypes.bool
};

export default Tile;
