const initialState = [
  { id: 1, title: "Ipad 4 Mini", price: 500.01, inventory: 10 },
  { id: 2, title: "Ipad 5 Mini", price: 500.08, inventory: 10 },
  { id: 3, title: "Ipad 6 Mini", price: 700.01, inventory: 10 },
];
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default productReducer;
