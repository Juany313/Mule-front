import axios from "axios";

export default async function loginUser(formData) {
  console.log("Form data:", formData);
  try {
    const response = await axios.post("/users/login", formData);
    console.log("Response data:", response.data);

    if (response.data && response.data.token) {
      const token = response.data.token;
      console.log("Token:", token);
      return token;
    } else {
      throw new Error("El servidor no devolvió un token de autenticación.");
    }
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    throw error;
  }
}
