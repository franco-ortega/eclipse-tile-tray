import { useTrayContext } from '../../state/TrayContext';
import Count from '../count/Count';
import PropTypes from 'prop-types';
import styles from './Tile.module.css';
import { useState } from 'react';

const Tile = ({
  rowType,
  color,
  slot,
  tile
}) => {
  const { setPlayerTiles, changeTray, playerTiles } = useTrayContext();
  const [ isDisabled, setIsDisabled ] = useState(false);

  // console.log(playerTiles);

  const currentPlayerTiles = playerTiles[rowType].tiles;
  console.log(currentPlayerTiles);

  const searchPlayerTiles = (tilesToSearch, tileToFind) => {
    for(let i = 0; i < tilesToSearch.length; i++) {
      const currentTileSearched = tilesToSearch[i];
      if(currentTileSearched.title === tileToFind.title) {
        console.log('found!');
        return tileToFind.selected;
      }
    }
  };

  const currentSelected = searchPlayerTiles(currentPlayerTiles, tile) || 0;
  console.log({ currentSelected });

  const onTileClick = () => {
    if(tile.active) {
      setPlayerTiles(prevState => {
        prevState[rowType].tiles.forEach((currentTile) => {
          if(currentTile.title === tile.title) currentTile.selected--;
        });
        return prevState;
      });
    } else {
      let existingTile = false;
      setPlayerTiles(prevState => {
        prevState[rowType].tiles.forEach(currentTile => {
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

          prevState[rowType].tiles = [...prevState[rowType].tiles, newTile];
        }

        prevState[rowType].tiles.sort((a, b) => a.slotPosition - b.slotPosition);
  
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
            <p>
              {
                tile.selected > 0
                &&
                <Count selected={tile.selected} />
                ||
                // currentSelected > 0
                // &&
                <Count selected={tile.limit - currentSelected} />
              }
            </p>
          </button>
        : slot
      }
    </>
  );
};

Tile.propTypes = {
  rowType: PropTypes.string,
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
