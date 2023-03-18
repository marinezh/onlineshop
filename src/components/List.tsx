import React, { useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { addToCart, fetchProducts } from "../features/productSlice";
import { Product } from "./Product";

const List = () => {
  const products = useAppSelector((state) => state.products.products);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  console.log("products", products);

  return (
    <div className="products">
      <h2>List</h2>

      {products.map((product) => {
        return (
          <Container key={product.id}>
            <Product {...product} />
            <Button onClick={() => dispatch(addToCart(product))}>
              Add to Cart
            </Button>
          </Container>
        );
      })}
    </div>
  );
};

export { List };
