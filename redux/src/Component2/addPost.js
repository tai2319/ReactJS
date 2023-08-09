// src/components/AddPost.js

import React, { useState } from "react";
import { connect } from "react-redux";
import { addPost } from "../Redux/actions/postActions";
import { useNavigate } from "react-router-dom";

function AddPost({ addPost }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    const newPost = {
      title,
      body: content,
    };
    addPost(newPost);
    alert("Post added successfully!");
    navigate.push("/");
  };

  return (
    <div>
      <h1>New Post</h1>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
}

export default connect(null, { addPost })(AddPost);
