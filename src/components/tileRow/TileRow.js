import PropTypes from 'prop-types';
import TileSpace from '../tileSpace/TileSpace';

const TileRow = ({ section }) => {
  //The section will determine the number of TileSpaces needed in each row
  // Sections 1, 2, 3 will have 8 TilesSpaces
  // Section 4 will have 7 TilesSpaces

  // Add "spaces to props"

  const tileSpaceList = []

  if(section === 4) {
    console.log('Alien Tech Tiles');
    for(let i = 1; i < 8; i++) {
      tileSpaceList.push(<TileSpace slot={0} />)
    }
  } else {
    console.log('Regular Tech Tiles');
    for(let i = 1; i < 9; i++) {
      tileSpaceList.push(<TileSpace slot={1 * 2} />)
    }
  }


  return <div>{tileSpaceList.map((tileSpace, i) => (
    <li key={i}>{tileSpace}</li>
  ))}</div>;
};

TileRow.propTypes = {
  section: PropTypes.number.isRequired
};

export default TileRow;
