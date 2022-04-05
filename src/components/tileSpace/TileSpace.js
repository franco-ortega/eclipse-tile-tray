import PropTypes from 'prop-types';
// import { useEffect } from 'react';
import Tile from '../tile/Tile';
import styles from './TileSpace.module.css';

const TileSpace = ({ rowColor, color, slot, tile }) => {
  // TileSpace will return a TileSpace with the appropriate Tile
  // Else it will return a TileSpace with the slot number
  
  return (
    <>
      {tile
      ?
        <div
          className={styles.TileSpace}
          // style={{ justifyContent: 'center' }}
          >
          <Tile
            rowColor={rowColor}
            color={color}
            slot={slot}
            tile={tile}
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
  rowColor: PropTypes.string.isRequired,
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
