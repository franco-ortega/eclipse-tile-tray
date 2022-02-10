import PropTypes from 'prop-types';
// import { useEffect } from 'react';
import Tile from '../tile/Tile';
import styles from './TileSpace.module.css';

const TileSpace = ({ rowName, color, slot, tile }) => {
  // TileSpace will return a tile space with the appropriate Tile
  // Else it will return a TileSpace with the slot number
  
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
