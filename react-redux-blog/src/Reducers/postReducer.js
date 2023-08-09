const initialState = [];

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return action.payload;
    case "EDIT_POST":
      return state.map((post) =>
        post.id === action.payload.id
          ? { ...post, ...action.payload.updatedPost }
          : post
      );
    case "ADD_POST":
      return [...state, action.payload];
    case "INCREMENT_REACTION":
      return state.map((post) =>
        post.id === action.payload.id
          ? {
              ...post,
              [action.payload.reaction]: post[action.payload.reaction] + 1,
            }
          : post
      );
    // ... Handle other cases
    default:
      return state;
  }
};

export default postReducer;
