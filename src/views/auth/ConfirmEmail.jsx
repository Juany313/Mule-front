import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ConfirmEmail = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const verificationCode = query.get("bearer"); // Obtener el token de la URL

    if (verificationCode) {
      axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/users/email-confirmation`, {
          headers: {
            Authorization: `Bearer ${verificationCode}`,
          },
        })
        .then((response) => {
          console.log(response.data);
          navigate("/login?verified=true");
        })
        .catch((error) => {
          console.error("Error confirming email:", error);
        });
    }
  }, [navigate]);

  const handleChange = () => {
    navigate("/auth");
  };

  return (
    <div
      id="email"
      className="h-screen w-full flex flex-col items-center justify-center bg-blue-700"
      style={{
        backgroundImage: `url(https://res.cloudinary.com/deotitxt8/image/upload/v1717444940/Assets/vzsozyc7glvkeae1kjpp.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-xl p-8 text-center text-gray-800 bg-white shadow-xl lg:max-w-3xl rounded-3xl lg:p-12">
        <h3 className="text-2xl">Gracias por verificar tu email</h3>
        <div className="flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-24 h-24 text-green-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1"
              d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
            />
          </svg>
        </div>

        <p>Estamos felices de que estés aquí</p>
        <div className="mt-4">
          <button
            className="px-2 py-2 text-white font-semibold bg-blue-600 rounded"
            onClick={handleChange}
          >
            Iniciar sesión
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmEmail;
