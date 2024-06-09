import axios from "axios";

export default async function loginUserAuth(email, name) {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/users/register-auth0`,
      { email, name }
    );

    if (response.data) {
      const token = response.data;
      localStorage.setItem("token", token);
      return token;
    } else {
      throw new Error("El servidor no devolvió un token de autenticación.");
    }
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
  }
}
