import PropTypes from 'prop-types';
import Tile from '../tile/Tile';
import TileSpace from '../tileSpace/TileSpace';
import styles from './TileRow.module.css';

const TileRow = ({ section, availableTiles }) => {
  //The section will determine the number of TileSpaces needed in each row
  // Sections 1, 2, 3 will have 8 TilesSpaces
  // Section 4 will have 7 TilesSpaces
  // Add "number of TileSpaces" to props (maybe?)

  // console.log('ROW DATA')
  if(availableTiles) {
    if(typeof availableTiles[0] === 'number') availableTiles.shift();
  }


  // const tilesToDisplay = availableTiles.map((item, i) => (
  //   <li key={i}>
  //     <Tile
  //     slot={item.slot}
  //     cost={item.cost}
  //     title={item.title}
  //     />
  //   </li>
  // ));

  
  
  const tileSpaceList = []

  if(section === 4) {
    console.log('Alien Tech Tiles');
    for(let i = 1; i < 8; i++) {
      if(availableTiles) {
        tileSpaceList.push(<Tile
          slot={availableTiles[i - 1].slot}
          cost={availableTiles[i - 1].cost}
          title={availableTiles[i - 1].title}
          />)
      } else {
        tileSpaceList.push(<TileSpace slot={0} />)
      }
    }
  } else {
    console.log('Regular Tech Tiles');
    for(let i = 1; i < 9; i++) {
      if(availableTiles) {
        tileSpaceList.push(<Tile
          slot={availableTiles[i - 1].slot}
          cost={availableTiles[i - 1].cost}
          title={availableTiles[i - 1].title}
          />)
      } else {
        tileSpaceList.push(<TileSpace slot={i * 2} />)
      }
    }
  }


  return (
  <ul className={styles.TileRow}>
    {tileSpaceList.map((tileSpace, i) => (
    <li key={i}>{tileSpace}</li>
  ))}
  </ul>);
};

TileRow.propTypes = {
  section: PropTypes.number.isRequired,
  availableTiles: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.shape({})
  ])
};

export default TileRow;
