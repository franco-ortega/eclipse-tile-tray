import PropTypes from 'prop-types';
import styles from './TileSpace.module.css';

const TileSpace = ({ slot, tile }) => {
  console.log('SLOT: ', slot);
  if(tile) return {tile}
  return (
    <div className={styles.TileSpace}>
      {slot ? slot : null}
    </div>
  );
};

TileSpace.propTypes = {
  slot: PropTypes.number.isRequired,
  tile: PropTypes.elementType
};

export default TileSpace;
