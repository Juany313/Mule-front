import axios from "axios";

export default async function loginUser(formData) {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/users/login`,
      formData
    );

    if (response.data && response.data.token) {
      const token = response.data.token;
      return token;
    } else {
      throw new Error("El servidor no devolvió un token de autenticación.");
    }
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    throw error;
  }
}
