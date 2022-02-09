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
  // slotPosition,
  limit }) => {
  const { setCurrentTray, changeTray,
    // isDisabled,
    // setIsDisabled
  } = useTrayContext();

  // let isDisabled = false;

  const [ isDisabled, setIsDisabled ] = useState(false);

  

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
          console.log('SELECTED #1', tile.selected)
          if(tile.title === title && tile.selected < limit) {
            console.log('SELECTED #2', tile.selected)
            tile.selected++;
            console.log('SELECTED #3', tile.selected)
          } else if(tile.selected === limit) {
            setIsDisabled(true);
          }
        })
  
        if(!existingTile) {
          prevState[rowName].tiles = [...prevState[rowName].tiles, {
            slotPosition: slot,
            cost,
            title,
            selected: 1,
            active: true,
            limit
          }];
        }

        prevState[rowName].tiles.sort((a, b) => a.slotPosition - b.slotPosition);
  
        return prevState;
      });
    }

    changeTray();

    // console.log({selected});
    // console.log({limit});
    console.log(isDisabled);
  };

  return (
    <button
      className={styles.Tile}
      style={{backgroundColor: `${color}`}}
      onClick={onTileClick}
      disabled={isDisabled}
    >
      <p>{title}</p>
      <p>Cost: {cost.max} / {cost.min}</p>
      <p>{selected > 0 && <Count selected={selected} />}</p>
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
  slotPosition: PropTypes.number,
  limit: PropTypes.number
};

export default Tile;
