import PropTypes from 'prop-types';
import Tile from '../tile/Tile';
import styles from './TileSpace.module.css';

const TileSpace = ({ slot, tile, color }) => {
  // console.log('SLOT: ', slot);
  // TileSpace will return a tile space if no tile is present
  // Else it will return a TileSpace with the appropriate Tile in it

  // if(tile) return {tile}
  // console.log({ tile });
  return (
    <div className={styles.TileSpace}>
      {tile
      ?
      <Tile
        slot={tile.slot}
        cost={tile.cost}
        title={tile.title}
        color={color}
      />
      :
      slot ? slot : null}
    </div>
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
