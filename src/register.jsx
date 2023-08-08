import React, { useState } from "react";


export const Register = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label for="firstName">First Name</label>
        <input
          value={firstName}
          type="text"
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="Enter First name"
          id="firstName"
          name="firstName"
        />
        <label htmlFor="lastName">Last name</label>
        <input
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          type="text"
          placeholder="enter Last Name"
          id="lastName"
          name="lastName"
        />
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
      <button onClick={() => props.onFormSwitch('login')}>Already have an account? Login here</button>
    </>
  );
};
