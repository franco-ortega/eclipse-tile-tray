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

  const onTileClick = () => {
    if(tile.active) {
      setCurrentTray(prevState => {
        prevState[rowName].tiles.forEach((currentTile) => {
          if(currentTile.title === tile.title) {
            // if(currentTile.selected === 1 && currentTile.slotPosition === null) {
            //   console.log('fenjwon')
            //   prevState[rowName].tiles.splice(i, 1)
            // } else {
            //   // currentTile.selected--;
            // }
            currentTile.selected--;
          }
        });

        return prevState;
      });
    } else {
      let existingTile = false;
      setCurrentTray(prevState => {
        prevState[rowName].tiles.forEach(currentTile => {
          if(currentTile.title === tile.title) {
            existingTile = true;
            if(currentTile.selected < currentTile.limit) {
              currentTile.selected++;
              currentTile.total++;
              if(currentTile.total >= tile.limit) {
                setIsDisabled(true)
              }
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
            limit: tile.limit,
            total: 1
          };

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
    <>
      {!tile.active || tile.selected
        ? <button
            className={styles.Tile}
            style={{backgroundColor: `${color}`}}
            onClick={onTileClick}
            disabled={isDisabled}
          >
            <p className={styles.Title}>{tile.title}</p>
            <p className={`${styles.FlexRow} ${styles.MaxCost}`}>
              {tile.cost.max}
              <span className={`${styles.FlexRow} ${styles.MinCost}`}>
                {tile.cost.min}
              </span>
            </p>
            <p>{tile.selected > 0 && <Count selected={tile.selected} />}</p>
          </button>
        : slot
      }
    </>
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
