import React, { useEffect } from "react";
import "./ProductList.css";
import { useProduct } from "../Context/ProductContextProvider";

const ProductList = () => {
  const { getProducts, products } = useProduct();

  useEffect(() => {
    getProducts();
  }, []);

  console.log(products);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        width: "73%",
      }}
    >
      {products.map((anime) => (
        <div className="anime">
          <h3 className="anime_h3">{anime.title}</h3>
          <img className="anime_img" src={anime.poster} alt="image" />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
