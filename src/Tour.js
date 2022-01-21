import React, { useState } from "react";

const Tour = (props) => {
  const { id, image, info, price, name, removeTour } = props;
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">{price}</h4>
        </div>
        <p>
          {readMore && info}
          {!readMore && <button onClick={() => setReadMore(true)}>Read more</button>}
          {readMore && <button onClick={() => setReadMore(false)}>Show less</button>}
        </p>
        <button onClick={() => removeTour(id)} className="delete-btn">
          Not Interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
