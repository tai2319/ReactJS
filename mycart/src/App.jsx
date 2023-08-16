import "./App.css";
import Cart from "./component/Cart";
import ProductList from "./component/ProductList";

function App() {
  return (
    <div>
      <h2> Shopping Cart</h2>
      <hr />
      <ProductList />
      <hr />
      <Cart />
    </div>
  );
}

export default App;
