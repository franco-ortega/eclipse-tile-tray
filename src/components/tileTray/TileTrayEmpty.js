import TileRowEmpty from "../tileRow/TileRowEmpty";
import styles from './TileTray.module.css';

const TileTrayEmpty = () => {
  return(
    <main className={styles.TileTray}>
      <section>
        <TileRowEmpty section={1} />
      </section>
      <section>
        <TileRowEmpty section={2} />
      </section>
      <section>
        <TileRowEmpty section={3} />
      </section>
      <section>
        <TileRowEmpty section={4} />
      </section>
    </main>
  );
};

export default TileTrayEmpty;