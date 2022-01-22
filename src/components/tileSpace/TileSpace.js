import PropTypes from 'prop-types';
import styles from './TileSpace.module.css';

const TileSpace = ({ slot, tile }) => {
  if(tile) return {tile}
  return (
    <div className={styles.TileSpace}>
      {slot}
    </div>
  );
};

TileSpace.propTypes = {
  slot: PropTypes.number.isRequired,
  tile: PropTypes.elementType
};

export default TileSpace;
