// ... Import axios and other actions
import axios from "axios";
export const fetchPosts = () => async (dispatch) => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    dispatch({ type: "FETCH_POSTS", payload: response.data });
  } catch (error) {
    console.error(error);
  }
};
export const editPost = (id, updatedPost) => async (dispatch) => {
  try {
    await axios.put(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      updatedPost
    );
    dispatch({ type: "EDIT_POST", payload: { id, updatedPost } });
  } catch (error) {
    console.error(error);
  }
};

export const addPost = (newPost) => async (dispatch) => {
  try {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      newPost
    );
    dispatch({ type: "ADD_POST", payload: response.data });
  } catch (error) {
    console.error(error);
  }
};
export const incrementReaction = (id, reaction) => async (dispatch) => {
  try {
    await axios.post(
      `https://jsonplaceholder.typicode.com/posts/${id}/reactions`,
      { reaction }
    );
    dispatch({ type: "INCREMENT_REACTION", payload: { id, reaction } });
  } catch (error) {
    console.error(error);
  }
};
