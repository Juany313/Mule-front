import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";
// import "./ConfirmPasswordReset.css";
import "./Conten.css";

const ConfirmPasswordReset = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const query = new URLSearchParams(location.search);
  const token = query.get("token");

  const validatePassword = (password) => {
    const regex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{5,25}$/;
    return regex.test(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "¡Las contraseñas no coinciden!",
      });
      return;
    }
    if (!validatePassword(newPassword)) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "La contraseña debe contener al menos una letra mayúscula, un carácter especial y un número.",
      });
      return;
    }
    try {
      await axios.patch(
        `${import.meta.env.VITE_BACKEND_URL}/users/reset-password`,
        {
          token,
          newPassword,
        }
      );
      Swal.fire({
        icon: "success",
        title: "Éxito",
        text: "¡Contraseña restablecida con éxito!",
      }).then(() => {
        navigate("/auth");
      });
    } catch (error) {
      console.error("Error resetting password:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Error al restablecer la contraseña. Por favor, inténtelo de nuevo.",
      });
    }
  };

  return (
    <div className="content-loging min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-blue-500 p-4">
      <form
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
        onSubmit={handleSubmit}
      >
        <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">
          Restablecer Contraseña
        </h1>
        <label className="block mb-4">
          <span className="text-gray-700">Nueva Contraseña:</span>
          <div className="relative mt-2">
            <input
              type={showNewPassword ? "text" : "password"}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="button"
              onClick={() => setShowNewPassword(!showNewPassword)}
              className="absolute inset-y-0 right-0 px-3 py-2 flex items-center"
            >
              {showNewPassword ? (
                <FaEyeSlash className="text-gray-600" />
              ) : (
                <FaEye className="text-gray-600" />
              )}
            </button>
          </div>
        </label>
        <label className="block mb-6">
          <span className="text-gray-700">Confirmar Contraseña:</span>
          <div className="relative mt-2">
            <input
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute inset-y-0 right-0 px-3 py-2 flex items-center"
            >
              {showConfirmPassword ? (
                <FaEyeSlash className="text-gray-600" />
              ) : (
                <FaEye className="text-gray-600" />
              )}
            </button>
          </div>
        </label>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-white p-3 rounded hover:from-yellow-500 hover:to-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        >
          Restablecer Contraseña
        </button>
      </form>
    </div>
  );
};

export default ConfirmPasswordReset;
