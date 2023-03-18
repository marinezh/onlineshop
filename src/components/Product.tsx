import React from "react";
// Another way
// interface Rating {
//   rate: number;
//   count: number;

// }
// interface IProps {
//     id: number;
//     title: string;
//     proce: number;
//     description: string;
//     category: string;
//     image: string;
//     rating: Rating
// }

interface IProps {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const Product = (props: IProps) => {
  const { id, title, price, description, category, image, rating } = props;
  const product = props;

  return (
    <section className="Detail">
      <article>
        <img style={{ maxWidth: "20%" }} src={image} alt="" />
      </article>
      <article>
        <div>
          <h2>{title}</h2>
        </div>
      </article>
      <article>
        <div>
          <span>€ {price}</span>
          <span>Rating: {rating.rate} / 5</span>
        </div>
      </article>
      <p>{description}</p>
      <article>
        <div>
          <h2>€ {price}</h2>
        </div>
      </article>
    </section>
  );
};

export { Product };
