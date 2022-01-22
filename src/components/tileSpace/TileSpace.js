import PropTypes from 'prop-types';

const TileSpace = ({ slot, tile }) => {
  if(tile) return {tile}
  return <div>{slot}</div>;
};

TileSpace.propTypes = {
  slot: PropTypes.number.isRequired,
  tile: PropTypes.elementType
};

export default TileSpace;
