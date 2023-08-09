// src/components/EditPost.js

import React, { useState } from "react";
import { connect } from "react-redux";
import { updatePost } from "../Redux/actions/postActions";
import { useNavigate, useParams } from "react-router-dom"; // Sử dụng useNavigate thay cho useHistory

function EditPost({ posts, updatePost }) {
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.body);
  const navigate = useNavigate(); // Sử dụng useNavigate thay cho useHistory

  const handleSubmit = () => {
    const updatedPost = {
      ...post,
      title,
      body: content,
    };
    updatePost(updatedPost);
    alert("Post updated successfully!");
    navigate("/"); // Sử dụng navigate() thay cho history.push()
  };

  return (
    <div>
      <h1>Edit Post</h1>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea value={content} onChange={(e) => setContent(e.target.value)} />
      <button onClick={handleSubmit}>Save</button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  posts: state.posts,
});

const mapDispatchToProps = {
  updatePost,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditPost);
