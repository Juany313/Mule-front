import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "./ConfirmPasswordReset.css";

const ConfirmPasswordReset = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  // Obtener el token de la URL
  const query = new URLSearchParams(location.search);
  const token = query.get("token");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    try {
      // Enviar la nueva contraseña junto con el token al backend
      await axios.patch("http://localhost:3000/users/reset-password", {
        token,
        newPassword,
      });
      alert("Password reset successfully!");
      navigate("/auth");
    } catch (error) {
      console.error("Error resetting password:", error);
      alert("Error resetting password. Please try again.");
    }
  };

  return (
    <div className="reset-password-container">
      <form className="reset-password-form" onSubmit={handleSubmit}>
        <h1>Reset Password</h1>
        <label>
          New Password:
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </label>
        <label>
          Confirm Password:
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default ConfirmPasswordReset;