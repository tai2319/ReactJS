import ProductItem from "./ProductItem";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import actionType from "../redux/actions/actionType";

const ProductList = () => {
  const dispatch = useDispatch();

  const productReducer = useSelector((state) => state.productReducer);
  const handleAddtoCart = (product) =>
    dispatch({
      type: actionType.ADD_TO_CART,
      payload: { product, quantityInCart: 1 },
    });
  return (
    <div>
      <h3> Product</h3>
      {productReducer.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          onAddToCart={handleAddtoCart}
        />
      ))}
    </div>
  );
};

export default ProductList;
