import Tour from "./Tour";

const Tours = (props) => {
  const { tours } = props;

  return (
    <section>
      <div className="title">
        <h2>All Tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => {
          return <Tour id={tour.id} image={tour.image} info={tour.info} price={tour.price} name={tour.name} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
