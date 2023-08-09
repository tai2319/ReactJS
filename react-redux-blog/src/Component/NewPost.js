import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addPost } from "../Actions/postActions";

const NewPost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const dispatch = useDispatch();
  const history = useNavigate();

  const handleSave = () => {
    const newPost = { title, body };
    dispatch(addPost(newPost));
    history.push("/");
  };

  return (
    <div>
      <h2>New Post</h2>
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

export default NewPost;
