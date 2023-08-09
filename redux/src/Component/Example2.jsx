// src/App.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AddPost from "../Component2/addPost";
import PostList from "../Component2/PostList";
import EditPost from "../Component2/EditPost";

function Example2() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact component={PostList} />
        <Route path="/add" component={AddPost} />
        <Route path="/edit/:id" component={EditPost} />
      </Routes>
    </Router>
  );
}

export default Example2;
