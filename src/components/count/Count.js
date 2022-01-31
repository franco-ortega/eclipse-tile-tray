import PropTypes from 'prop-types';
import styles from './Count.module.css';

const Count = ({ selected }) => {
  return <span className={styles.Count}>x{selected}</span>;
};

Count.propTypes = {
  selected: PropTypes.number.isRequired
};

export default Count;
