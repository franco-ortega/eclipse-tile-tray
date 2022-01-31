import PropTypes from 'prop-types';
import Tile from '../tile/Tile';
import styles from './TileSpace.module.css';

const TileSpace = ({ rowName, color, slot, tile }) => {
  // TileSpace will return a tile space with the appropriate Tile
  // Else it will return a TileSpace with the slot number
  console.log('SLOT: ', slot)

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
            cost={tile.cost}
            slot={slot}
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
  rowName: PropTypes.string.isRequired,
  color: PropTypes.string,
  slot: PropTypes.number,
  tile: PropTypes.shape({
    slot: PropTypes.number,
    cost: PropTypes.shape({
      min: PropTypes.number.isRequired,
      max: PropTypes.number.isRequired
    }).isRequired,
    title: PropTypes.string.isRequired
  })
};

export default TileSpace;
