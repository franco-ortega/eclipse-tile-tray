import { useTrayContext } from '../../state/TrayContext';
import Count from '../count/Count';
import PropTypes from 'prop-types';
import styles from './Tile.module.css';
import { useState } from 'react';

const Tile = ({
  rowName,
  color,
  slot,
  cost,
  selected,
  title,
  active,
  slotPosition,
  limit }) => {
  const { setCurrentTray, changeTray } = useTrayContext();
  const [ isDisabled, setIsDisabled ] = useState(false);

  const onTileClick = async() => {
    if(active) {
      await setCurrentTray(prevState => {
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
      await setCurrentTray(prevState => {
        prevState[rowName].tiles.forEach(tile => {
          if(tile.title === title) existingTile = true;
          if(tile.title === title && tile.selected < limit) {
            // setIsDisabled(false);
            tile.selected++;
            if(tile.selected >= limit) {
              console.log('going to disable', tile.selected, limit);
              setIsDisabled(true)
            }
          }
        });
  
        if(!existingTile) {
          const newTile = {
            slotPosition: slot,
            cost,
            title,
            selected: 1,
            active: true,
            limit
          }
          console.log(newTile);
          if(!slotPosition) setIsDisabled(true);

          prevState[rowName].tiles = [...prevState[rowName].tiles, newTile];
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
      disabled={isDisabled}
    >
      <p className={styles.Title}>{title}</p>
      <p 
        // className={styles.MaxCost}
        className={`${styles.FlexRow} ${styles.MaxCost}`}
      >
        {cost.max}
        <span
          // className={styles.MinCost}
          className={`${styles.FlexRow} ${styles.MinCost}`}
          >{cost.min}</span>
      </p>
      
      <p>{selected > 0 && <Count selected={selected} />}</p>
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
  active: PropTypes.bool,
  slotPosition: PropTypes.number,
  limit: PropTypes.number
};

export default Tile;
