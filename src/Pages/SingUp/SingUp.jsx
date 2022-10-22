import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../Contexts/Context";
import "./singup.css";
const SingUp = () => {
  const { createUser, error, setError } = useContext(AuthContext);
  let navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirm.value;
    if (password.length < 6) {
      setError("Password length should be between 6-10 characters");
      return;
    }
    if (password !== confirmPassword) {
      setError("Password Are Not Same ");
      return;
    }
    createUser(email, password)
    navigate('/')
  };
  return (
    <div className="form-container">
      <h2 className="form-title">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" required />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" required />
        </div>
        <div className="form-control">
          <label htmlFor="confirm">Confirm Password</label>
          <input type="password" name="confirm" required />
        </div>
        <p className="text-error">{error}</p>
        <input className="btn-submit" type="submit" value="Sign Up" />
      </form>
      <p className="justText">
        Already Have an Account <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default SingUp;
