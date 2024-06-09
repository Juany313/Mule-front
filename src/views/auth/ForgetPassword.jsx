// import React from "react";
// import { Link } from "react-router-dom";

// /* icons */
// import { RiMailLine } from "react-icons/ri";

// const ForgetPassword = () => {
//   return (
//     <div className="content-loging w-full">
//     <div className="bg-gradient-to-r from-blue-400 to-blue-500 p-8 rounded-xl w-auto lg:w-[450px] items-center justify-center shadow-xl shadow-black">
//       <h1 className="text-3xl text-center uppercase font-bold tracking-[5px] text-white mb-8">
//         Recuperar <span className="text-primary">contraseña</span>
//       </h1>
//       <form className="mb-8">
//         <div className="relative mb-8">
//             <RiMailLine className="absolute top-1/2 -translate-y-1/2 left-2 text-primary" />
//           <input
//             type="email"
//             className=" shadow-md shadow-black py-3 pl-8 pr-8 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary"
//             placeholder="Correo electrónico"
//           />
//         </div>
//           <div>
//             <Link to="/auth">
//               <input
//                 type="submit"
//                 className="bg-s300 text-black uppercase font-extrabold text-sm w-full py-3 px-4 rounded-lg hover:text-gray-100 transition-colors shadow-md shadow-black"
//                 value="Recuperar Cuenta"
//               />
//              </Link>

//         </div>
//       </form>
//       <div className="flex flex-col flex-gap-4 items-center ">
//         <span className="flex items-center gap-2">
//           ¿Ya tienes cuenta?
//           <Link
//             to="/auth"
//             className="text-primary hover:text-white hover:font-medium transition-colors "
//           >
//             Ingresa
//           </Link>
//         </span>
//         <span className="flex items-center gap-2 my-2">
//           ¿No tienes cuenta?
//           <Link
//             to="/auth/registro"
//             className="text-primary hover:text-white hover:font-medium transition-colors  "
//           >
//             Registrate
//           </Link>
//         </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ForgetPassword;

import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

/* icons */
import { RiMailLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { forgotPassword } from "../../redux/actions";

// Email validation function
const validateEmailForgetPassword = (email) => {
  let errors = {};

  if (!email) {
    errors.email = "Completar Campo!";
  } else {
    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errors.email = "Formato de correo electrónico no válido";
    }
  }

  return errors;
};

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [isDisabled, setIsDisabled] = useState(true);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  // Handle input change
  const handleInputChange = (e) => {
    const { value } = e.target;
    setEmail(value);

    // Validate the email
    const validationErrors = validateEmailForgetPassword(value);
    setErrors(validationErrors);
  };

  // Check if the form is valid
  useEffect(() => {
    if (!errors.email && email) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [errors, email]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isDisabled) {
      // Redirect to "/auth"
      dispatch(forgotPassword({ email }));
      navigate("/auth");
    }
  };

  return (
    <div className="content-loging w-full">
      <div
        className="bg-gradient-to-r from-blue-400 to-blue-500 p-8 rounded-xl w-auto lg:w-[450px] 
       shadow-xl shadow-black"
      >
        <h1 className="text-3xl text-center uppercase font-bold tracking-[5px] text-white mb-8">
          Recuperar <span className="text-primary">contraseña</span>
        </h1>
        <form
          className="mb-8  items-center justify-center"
          onSubmit={handleSubmit}
        >
          <div className="relative mb-8">
            <RiMailLine className="absolute top-1/2 -translate-y-1/2 left-2 text-primary" />
            <input
              type="email"
              name="email"
              className="shadow-md shadow-black py-3 pl-8 pr-8 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary"
              placeholder="Correo electrónico"
              value={email}
              onChange={handleInputChange}
            />
          </div>
          {errors.email && (
            <span className="flex items-center justify-center font-bold text-red-600 mb-4">
              {errors.email}
            </span>
          )}
          <div>
            <button
              type="submit"
              className={`bg-s300 text-black uppercase font-extrabold text-sm w-full py-3 px-4 rounded-lg hover:text-gray-100 transition-colors shadow-md shadow-black ${
                isDisabled ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={isDisabled}
            >
              Recuperar Cuenta
            </button>
          </div>
        </form>
        <div className="flex flex-col flex-gap-4 items-center ">
          <span className="flex items-center gap-2">
            ¿Ya tienes cuenta?
            <Link
              to="/auth"
              className="text-primary hover:text-white hover:font-medium transition-colors "
            >
              Ingresa
            </Link>
          </span>
          <span className="flex items-center gap-2 my-2">
            ¿No tienes cuenta?
            <Link
              to="/auth/registro"
              className="text-primary hover:text-white hover:font-medium transition-colors  "
            >
              Registrate
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
