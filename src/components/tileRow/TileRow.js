import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import Tile from '../tile/Tile';
import TileSpace from '../tileSpace/TileSpace';
import styles from './TileRow.module.css';

const TileRow = ({ section, availableTiles }) => {
  //The section will determine the number of TileSpaces needed in each row
  // Sections 1, 2, 3 will have 8 TilesSpaces
  // Section 4 will have 7 TilesSpaces

  // Add "spaces to props"

  const [rowData, setRowData] = useState(availableTiles);

  useEffect(() => {
    if(availableTiles) {
      setRowData(availableTiles);
      // console.log(rowData);
      // rowData.forEach(item => {
      //   console.log('row data');
      //   console.log(item);
      // });
      
    }
  }, []);

  console.log('FSOINONONODWNOIWNOINO')
  if(rowData) {
    if(typeof rowData[0] === 'number') rowData.shift();
  }
  // console.log(rowData);

  // const tilesToDisplay = rowData.map((item, i) => (
  //   <li key={i}>
  //     <Tile
  //     slot={item.slot}
  //     cost={item.cost}
  //     title={item.title}
  //     />
  //   </li>
  // ));

  // eslint-disable-next-line react/prop-types
  // const { pink } = availableTiles;
  // console.log(pink)
  // const testing = Object.values(availableTiles);
  // console.log('TESTING: ', testing)

  const tileSpaceList = []

  if(section === 4) {
    // console.log('Alien Tech Tiles');
    for(let i = 1; i < 8; i++) {
      if(rowData) {
        tileSpaceList.push(<Tile
          slot={rowData[i - 1].slot}
          cost={rowData[i - 1].cost}
          title={rowData[i - 1].title}
          />)
      } else {
        tileSpaceList.push(<TileSpace slot={0} />)
      }
    }
  } else {
    // console.log('Regular Tech Tiles');
    for(let i = 1; i < 9; i++) {
      if(rowData) {
        tileSpaceList.push(<Tile
          slot={rowData[i - 1].slot}
          cost={rowData[i - 1].cost}
          title={rowData[i - 1].title}
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
