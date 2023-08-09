import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { editPost } from "../Actions/postActions";

const EditPost = () => {
  const { id } = useParams();
  const history = useNavigate();
  const posts = useSelector((state) => state.posts);
  const post = posts.find((post) => post.id === parseInt(id));

  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);

  const dispatch = useDispatch();

  const handleSave = () => {
    dispatch(editPost(id, { title, body }));
    history.push(`/post/${id}`);
  };

  return (
    <div>
      <h2>Edit Post</h2>
      <label>Title:</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label>Body:</label>
      <textarea value={body} onChange={(e) => setBody(e.target.value)} />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default EditPost;
