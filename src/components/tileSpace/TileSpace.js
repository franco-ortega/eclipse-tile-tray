import PropTypes from 'prop-types';
import styles from './TileSpace.module.css';

const TileSpace = ({ slot, tile }) => {
  console.log('SLOT: ', slot);
  // TileSpace will return a tile space if no tile is present
  // Else it will return a TileSpace with the appropriate Tile in it


  if(tile) return {tile}
  return (
    <div className={styles.TileSpace}>
      {slot ? slot : null}
    </div>
  );
};

TileSpace.propTypes = {
  slot: PropTypes.number,
  tile: PropTypes.elementType
};

export default TileSpace;
