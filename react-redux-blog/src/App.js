import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Component/Header";
import Home from "./Component/Home";
import PostDetail from "./Component/PostDetail";
import EditPost from "./Component/EditPost";
import NewPost from "./Component/NewPost";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/post/:id" component={PostDetail} />
          <Route path="/edit/:id" component={EditPost} />
          <Route path="/new" component={NewPost} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
