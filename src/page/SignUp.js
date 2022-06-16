import "../style/SignUp.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = ({ user, setUser }) => {
    let navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");

  const [errorUserName, setErrorUserName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirmpassword, setErrorConfirmpassword] = useState("");

  const [userNameColor, setUserNameColor] = useState("");
  const [emailColor, setEmailColor] = useState("");
  const [passwordColor, setPasswordColor] = useState("");
  const [confirmpasswordColor, setConfirmpasswordColor] = useState("");



  const handleOnSubmit = (e) => {
    if (validateForm(e)) {
      user.push({ userName: userName, email: email, password: password });
      navigate("/", { replace: true })
    }
  };

  const validateForm = (e) => {
    e.preventDefault();
    let checkUsername = false;
    let checkEmail = false;
    let checkPassword = false;
    let checkConfirmPassword = false;

    if (userName.length >= 6) {
      setErrorUserName("");
      setUserNameColor("");
      checkUsername = true;
    } else {
      setErrorUserName("Please enter 6 characters or more.");
      setUserNameColor("red");
    }

    if (email.includes("@")) {
      setErrorEmail("");
      setEmailColor("");
      checkEmail = true;
    } else {
      setErrorEmail("Invalid email format");
      setEmailColor("red");
    }

    if (password.length >= 8) {
      setErrorPassword("");
      setPasswordColor("");
      checkPassword = true;
    } else {
      setErrorPassword("Password must be 8 characters or more.");
      setPasswordColor("red");
    }

    if (confirmpassword !== "" && confirmpassword === password) {
      setErrorConfirmpassword("");
      setConfirmpasswordColor("");
      checkConfirmPassword = true;
    } else {
      setErrorConfirmpassword("Passwords do not match.");
      setConfirmpasswordColor("red");
    }

    if (checkUsername && checkEmail && checkPassword && checkConfirmPassword) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleOnSubmit}>
        <h1>Create New Account</h1>
        <div className="form-control">
          <label>UserName</label>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            style={{ borderColor: userNameColor }}
          />
          <small style={{ color: userNameColor }}>{errorUserName}</small>
        </div>
        <div className="form-control">
          <label>E-Mail</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ borderColor: emailColor }}
          />
          <small style={{ color: emailColor }}>{errorEmail}</small>
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
        </div>
        <div className="form-control">
          <label>ConFirm Password</label>
          <input
            type="password"
            value={confirmpassword}
            onChange={(e) => setConfirmpassword(e.target.value)}
            style={{ borderColor: confirmpasswordColor }}
          />
          <small style={{ color: confirmpasswordColor }}>
            {errorConfirmpassword}
          </small>
        </div>
        <button type="submit">
          SignUp
        </button>
        <button type="submit">LogIn</button>
      </form>
    </div>
  );
};

export default SignUp;
