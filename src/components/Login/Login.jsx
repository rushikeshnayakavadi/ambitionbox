import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios for API calls
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Employee");
  const navigate = useNavigate();

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleRoleChange = (e) => setRole(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username && password) {
      try {
        // API call to login or create user
        const response = await axios.post('http://localhost:8000/api/users/login', {
          username,
          password,
          role
        });

        if (response.status === 201) {
          alert('User created and logged in');
        } else if (response.status === 200) {
          alert('User logged in successfully');
        }

        // Redirect to home page after successful login or profile creation
        navigate("/");

      } catch (error) {
        console.error('Error during login:', error);
        alert('An error occurred. Please try again.');
      }
    } else {
      alert("Please fill out all fields.");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            onPaste={(e) => e.preventDefault()}
            onCopy={(e) => e.preventDefault()}
            required
          />
        </div>
        <div className="input-group">
          <label>Role</label>
          <select value={role} onChange={handleRoleChange}>
            <option value="Employee">Employee</option>
            <option value="Employer">Employer</option>
          </select>
        </div>
        <button type="submit" className="login-btn">Login</button>
      </form>
    </div>
  );
};

export default Login;
