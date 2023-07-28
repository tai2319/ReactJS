// import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Home from "./Component/componentRouter/home";
// import Login from "./Component/componentRouter/login";
import Login from "./Component/router1/login";
import Employee from "./Component/router1/employee";
import EmployeeDetail from "./Component/router1/EmployeeDetail";

const App = () => {
  // const [loggedInAccount, setLoggedInAccount] = useState(null);

  // const handleLogin = (account) => {
  //   setLoggedInAccount(account);
  // };

  // return (
  //   <Router>
  //     <Routes>
  //       <Route path="/login" element={<Login onLogin={handleLogin} />} />
  //       <Route
  //         path="/home"
  //         element={
  //           loggedInAccount ? (
  //             <Home account={loggedInAccount} />
  //           ) : (
  //             <Login onLogin={handleLogin} />
  //           )
  //         }
  //       />
  //     </Routes>
  //   </Router>
  // );

  return (
    <Router>
      <Route path="/" exact component={Login} element=<Login /> />
      <Route path="/employee" exact component={Employee} />
      <Route path="/employee/:id" component={EmployeeDetail} />
    </Router>
  );
};

export default App;
