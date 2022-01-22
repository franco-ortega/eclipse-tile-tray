import TileRow from "../tileRow/TileRow";
import style from './TileTray.module.css';

const TileTray = () => {
  return(
    <main className={style.TileTray}>
      <section>
        <TileRow section={1} />
      </section>
      <section>
        <TileRow section={2} />
      </section>
      <section>
        <TileRow section={3} />
      </section>
      <section>
        <TileRow section={4} />
      </section>
    </main>
  );
};

export default TileTray;
