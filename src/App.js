import "./App.css";
import { Routes, Route } from "react-router-dom";
import SignUp from "./page/SignUp";
import Login from "./page/Login";
import Profile from "./page/Profile";
import { fakeUser } from "./utils/mockData";
import { useState } from "react";

function App() {
  const [user, setUser] = useState([fakeUser]);

  return (
    <div className="App">
      <h1>Wisdom Epic Coding </h1>
      <Routes>
        <Route path="/" element={<Login user={user} setUser={setUser} />} />
        <Route
          path="/register"
          element={<SignUp user={user} setUser={setUser} />}
        />
        <Route
          path="/profile"
          element={<Profile user={user} setUser={setUser} />}
        />
      </Routes>
    </div>
  );
}

export default App;
