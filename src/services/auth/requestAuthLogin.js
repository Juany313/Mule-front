import axios from "axios";

export default async function loginUserAuth(email) {
  try {
    console.log("Form data:", email);
    const response = await axios.post(
      "http://localhost:3000/users/loginAuth",
      { email: email } // Enviar el correo electrónico dentro de un objeto
    );
    console.log("Response data en loginUserAuth:", response);

    if (response.data && response.data.token) {
      const token = response.data.token;
      console.log("Token en loginUserAuth:", token);
      
      return token;
    } else {
      throw new Error("El servidor no devolvió un token de autenticación.");
    }
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    throw error;
  }
}