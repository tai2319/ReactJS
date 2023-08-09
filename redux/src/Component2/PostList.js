import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../Redux/actions/postActions";
import { Link } from "react-router-dom";

function PostList({ posts, fetchPosts }) {
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Post List</h1>
      <Link to="/add">Add new Post</Link>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <Link to={`/edit/${post.id}`}>Edit</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => ({
  posts: state.posts,
});

export default connect(mapStateToProps, { fetchPosts })(PostList);
