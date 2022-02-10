import { useTrayContext } from '../../state/TrayContext';
import Count from '../count/Count';
import PropTypes from 'prop-types';
import styles from './Tile.module.css';
import { useState } from 'react';

const Tile = ({
  rowName,
  color,
  slot,
  tile
}) => {
  const { setCurrentTray, changeTray } = useTrayContext();
  const [ isDisabled, setIsDisabled ] = useState(false);

  const onTileClick = async() => {
    if(tile.active) {
      await setCurrentTray(prevState => {
        prevState[rowName].tiles.forEach((currentTile, i) => {
          if(currentTile.title === tile.title) {
            if(currentTile.selected === 1) {
              prevState[rowName].tiles.splice(i, 1)
            } else {
              currentTile.selected--;
            }
          }
        });

        return prevState;
      });
    } else {
      let existingTile = false;
      await setCurrentTray(prevState => {
        prevState[rowName].tiles.forEach(currentTile => {
          if(currentTile.title === tile.title) existingTile = true;
          if(currentTile.title === tile.title && currentTile.selected < tile.limit) {
            // setIsDisabled(false);
            currentTile.selected++;
            if(currentTile.selected >= tile.limit) {
              console.log('going to disable', currentTile.selected, tile.limit);
              setIsDisabled(true)
            }
          }
        });
  
        if(!existingTile) {
          const newTile = {
            slotPosition: slot,
            cost: tile.cost,
            title: tile.title,
            selected: 1,
            active: true,
            limit: tile.limit
          }
          console.log(newTile);
          if(!tile.slotPosition) setIsDisabled(true);

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
      <p className={styles.Title}>{tile.title}</p>
      <p 
        // className={styles.MaxCost}
        className={`${styles.FlexRow} ${styles.MaxCost}`}
      >
        {tile.cost.max}
        <span
          // className={styles.MinCost}
          className={`${styles.FlexRow} ${styles.MinCost}`}
          >{tile.cost.min}</span>
      </p>
      
      <p>{tile.selected > 0 && <Count selected={tile.selected} />}</p>
    </button>
  );
};

Tile.propTypes = {
  rowName: PropTypes.string,
  color: PropTypes.string,
  slot: PropTypes.number,
  tile: PropTypes.shape({
    slotPosition: PropTypes.number,
    cost: PropTypes.shape({
      min: PropTypes.number.isRequired,
      max: PropTypes.number.isRequired
    }).isRequired,
    title: PropTypes.string.isRequired,
    selected: PropTypes.number.isRequired,
    limit: PropTypes.number.isRequired,
    active: PropTypes.bool
  })
};

export default Tile;
