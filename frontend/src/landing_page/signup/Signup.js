import React, { useState } from "react";
import axios from "axios";
import "./Signup.css";

const Signup = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toggleMode = () => setIsLogin(!isLogin);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isLogin ? "/login" : "/signup";

    try {
      const res = await axios.post(`${process.env.REACT_APP_API_BASE_URL}${url}`, {
        email,
        password,
      });

      alert(res.data.msg);

      // ✅ Redirect to dashboard after login/signup
      window.location.href = "http://localhost:3001"; // Your dashboard app URL
    } catch (err) {
     window.location.href = "http://localhost:3001";
    }
  };

  return (
    <div className="auth-container">
      <h2>{isLogin ? "Login" : "Sign Up"}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password (min 6 chars)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength={6}
        />
        <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
      </form>
      <p>
        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
        <span onClick={toggleMode} className="toggle">
          {isLogin ? "Sign up" : "Login"}
        </span>
      </p>
    </div>
  );
};

export default Signup;
