import { useSelector } from "react-redux";
import ProductDetail from "./ProductDetail";

const Cart = () => {
  const cartReducer = useSelector((state) => state.cartReducer);
  return (
    <div>
      <h3>Your Cart</h3>
      {cartReducer.map((cart) => (
        <ProductDetail
          title={cart.title}
          quantity={cart.quantityInCart}
          price={cart.price}
        />
      ))}
      <p>Total : </p>
      <button>Checkout</button>
    </div>
  );
};

export default Cart;
