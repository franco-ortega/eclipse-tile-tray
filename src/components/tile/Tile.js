import PropTypes from 'prop-types';
import styles from './Tile.module.css';

const Tile = ({ slot, cost, title, color }) => {
  console.log(`This tile goes in slot: ${slot}`);
  return (
    <button className={styles.Tile} style={{backgroundColor: `${color}`}}>
    <p>{title}</p>
    <p>Cost: {cost.max} / {cost.min}</p>
    <p>Slot: {slot}</p>
    </button>
  );
};

Tile.propTypes = {
  slot: PropTypes.number,
  cost: PropTypes.shape({
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired
  }).isRequired,
  title: PropTypes.string.isRequired,
  color: PropTypes.string
};

export default Tile;
