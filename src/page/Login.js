import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ user, setUser }) => {
  let navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [errorPassword, setErrorPassword] = useState("");

  const [userNameColor, setUserNameColor] = useState("");
  const [passwordColor, setPasswordColor] = useState("");

  const validateLogin = (e) => {
    e.preventDefault();
    for (var i = 0; i < user.length; i++) {
      if (
        (user[i].userName === userName || user[i].email === userName) &&
        user[i].password === password
      ) {
        navigate("./profile", { state: user[i] });
      } else {
        setUserNameColor("red");
        setPasswordColor("red");
        setErrorPassword(
          "The username or password you entered isn't connected to an account"
        );
      }
    }
  };

  return (
    <div className="container">
      <form className="form" onSubmit={validateLogin}>
        <h1>Create New Account</h1>
        <div className="form-control">
          <label>Username/E-mail</label>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            style={{ borderColor: userNameColor }}
          />
          <small style={{ color: userNameColor }}></small>
        </div>
        <div className="form-control">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ borderColor: passwordColor }}
          />
          <small style={{ color: passwordColor }}>{errorPassword}</small>
          <nav>
            <button type="submit">LogIn</button>
          </nav>
          <Link to="/register">SignUp</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
