import PropTypes from 'prop-types';
// import { useEffect } from 'react';
import Tile from '../tile/Tile';
import styles from './TileSpace.module.css';

const TileSpace = ({ rowName, color, slot, tile }) => {
  // TileSpace will return a tile space with the appropriate Tile
  // Else it will return a TileSpace with the slot number
  // if(tile) console.log(tile.selected);
  // let isDisabled= false;

  
  // useEffect(() => {
  //   if(tile) {
  //     console.log('SELECTED', tile.selected);
  //     console.log('LIMIT', tile?.limit);
  //     if(tile.selected === tile?.limit) {
  //       isDisabled = true;
  //     } 
  //   }
  // }, [tile?.selected]);
  
  return (
    <>
      {tile
      ?
        <div
          className={styles.TileSpace}
          style={{ justifyContent: 'center' }}
          >
          <Tile
            rowName={rowName}
            color={color}
            slot={slot}
            cost={tile.cost}
            selected={tile.selected}
            title={tile.title}
            active={tile.active}
            slotPosition={tile.slotPosition}
            // isDisabled={isDisabled}
            limit={tile.limit}
          />
        </div>
      :
        <div className={styles.TileSpace}>
          {slot ? slot : null}
        </div> 
      }
    </>
  );
};

TileSpace.propTypes = {
  rowName: PropTypes.string.isRequired,
  color: PropTypes.string,
  slot: PropTypes.number,
  tile: PropTypes.shape({
    cost: PropTypes.shape({
      min: PropTypes.number.isRequired,
      max: PropTypes.number.isRequired
    }).isRequired,
    selected: PropTypes.number.isRequired,
    slot: PropTypes.number,
    title: PropTypes.string.isRequired,
    active: PropTypes.bool,
    slotPosition: PropTypes.number,
    limit: PropTypes.number
  })
};

export default TileSpace;
