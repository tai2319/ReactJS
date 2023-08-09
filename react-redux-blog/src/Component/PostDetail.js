import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { incrementReaction } from "../Actions/postActions";

const PostDetail = () => {
  const { id } = useParams();
  const posts = useSelector((state) => state.posts);
  const post = posts.find((post) => post.id === parseInt(id));

  const dispatch = useDispatch();

  const handleReaction = (reaction) => {
    dispatch(incrementReaction(id, reaction));
  };

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <div>
        <button onClick={() => handleReaction("like")}>Like</button>
        {/* Add other reaction buttons */}
      </div>
    </div>
  );
};

export default PostDetail;
