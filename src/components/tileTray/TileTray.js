import TileRow from "../tileRow/TileRow";

const TileTray = () => {
  return(
    <main>
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
