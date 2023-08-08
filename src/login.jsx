import React, { useState } from "react";

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label for="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
          id="email"
          name="email"
        />
        <label htmlFor="password">Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="enter password"
          id="password"
          name="password"
        />
        <button type="submit">Log In</button>
      </form>
      <button onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here</button>
    </>
  );
};
