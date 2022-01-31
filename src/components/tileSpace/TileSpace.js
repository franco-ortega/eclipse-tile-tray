import PropTypes from 'prop-types';
import Tile from '../tile/Tile';
import styles from './TileSpace.module.css';

const TileSpace = ({ color, slot, tile }) => {
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
            color={color}
            cost={tile.cost}
            slot={tile.slot}
            title={tile.title}
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
  slot: PropTypes.number,
  tile: PropTypes.shape({
    slot: PropTypes.number,
    cost: PropTypes.shape({
      min: PropTypes.number.isRequired,
      max: PropTypes.number.isRequired
    }).isRequired,
    title: PropTypes.string.isRequired
  }),
  color: PropTypes.string
};

export default TileSpace;
