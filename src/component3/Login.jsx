import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login-card">
      <h2>Login Form</h2>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={() => {
          if (username && password) {
            alert("Login Successful");
          } else {
            alert("Please enter username and password");
          }
        }}
      >
        Login
      </button>
    </div>
  );
}

export default Login;