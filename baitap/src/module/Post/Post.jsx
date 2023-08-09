import React, { useState, useEffect } from "react";
import axios from "axios";

const PostList = () => {
  const [post, setPost] = useState([]);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/Post")
      .then((response) => {
        setPost(response.data); // Lưu danh sách post vào state
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
    axios
      .get("http://localhost:3001/api/Users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      {/* Hiển thị danh sách post */}
      <ul>
        {post.map((posts) => (
          <li key={posts.id}>{posts.title}</li>
        ))}
        <h1>Users</h1>
        {users.map((user) => (
          <li key={users.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};
export default PostList;
