import PropTypes from 'prop-types';

const Tile = ({ slot, cost, title }) => {
  console.log(`This tile goes in slot: ${slot}`);
  return (
    <>
    <p>{title}</p>
    <p>Cost: {cost.max} / {cost.min}</p>
    <p>Slot: {slot}</p>
    </>
  );
};

Tile.propTypes = {
  slot: PropTypes.number.isRequired,
  cost: PropTypes.shape({
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired
  }).isRequired,
  title: PropTypes.string.isRequired
};

export default Tile;
