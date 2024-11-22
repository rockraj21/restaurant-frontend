import React, { useState } from 'react';
import './Login.css';

function Login({ setIsAdmin }) {
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleLogin = () => {
    if (credentials.username === 'admin' && credentials.password === 'password') {
      setIsAdmin(true); // Grant admin access
      alert('Logged in successfully as admin!');
    } else {
      alert('Invalid username or password!');
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <div className="login-form">
        <input
          type="text"
          placeholder="Username"
          value={credentials.username}
          onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          value={credentials.password}
          onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default Login;
