import "./App.css";
import Mybrowser from "./components/bai1/Webbrowser";
import Tablestudent from "./components/bai2/Elementstudent";
import Profile from "./components/bai3/Profile";
import Login from "./components/bai4/login";

function App() {
  return (
    <>
      <div className="browser">
        <Mybrowser />
      </div>
      <div className="table">
        <Tablestudent />
      </div>
      <div className="Profile">
        <Profile />
      </div>
      <div>
        <Login />
      </div>
    </>
  );
}

export default App;
