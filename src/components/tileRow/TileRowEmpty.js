import PropTypes from 'prop-types';
import TileSpace from '../tileSpace/TileSpace';
import styles from './TileRow.module.css';

const TileRowEmpty = ({ section }) => {
  //The section will determine the number of TileSpaces needed in each row
  // Sections 1, 2, 3 will have 8 TilesSpaces
  // Section 4 will have 7 TilesSpaces
  // Add amount of tiles "spaces" to props?

  const tileSpaceList = []

  if(section === 4) {
    // console.log('Alien Tech Tiles');
    for(let i = 1; i < 8; i++) {
      tileSpaceList.push(<TileSpace slot={0} />)
    }
  } else {
    // console.log('Regular Tech Tiles');
    for(let i = 1; i < 9; i++) {
      tileSpaceList.push(<TileSpace slot={i * 2} />)
    }
  }

  return (
  <ul className={styles.TileRow}>
    {tileSpaceList.map((tileSpace, i) => (
    <li key={i}>{tileSpace}</li>
  ))}
  </ul>);
};

TileRowEmpty.propTypes = {
  section: PropTypes.number.isRequired
};

export default TileRowEmpty;