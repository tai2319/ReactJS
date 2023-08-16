import ProductDetail from "./ProductDetail";

const ProductItem = ({ product, onAddToCart }) => (
  <div style={{ marginBottom: 20 }}>
    <ProductDetail
      title={product.title}
      price={product.price}
      quantity={product.inventory}
    />
    <button onClick={onAddToCart}>
      {product.inventory > 0 ? "Add to cart" : "Sold OUT"}
    </button>
  </div>
);

export default ProductItem;
