// import React from "react";
// import landing from "../assets/landing.jpg";
// import { NavLink } from "react-router-dom";

// const Landing = () => {
//   return (
//     <div
//       className="bg-cover bg-center h-screen"
//       style={{ backgroundImage: `url(${landing})` }}
//     >
//       <div className="grid grid-cols-3 grid-rows-12">
//         <NavLink
//           to="/header"
//           className="text-7xl text-white font-bold text-center col-start-2 row-start-5"
//         >
//           MULE
//         </NavLink>
//       </div>
//     </div>
//   );
// };

// export default Landing;


// import React from "react";
import entrega2 from "../../../public/entrega2.mp4";
import { NavLink } from "react-router-dom";
import "./Landing.css"; // Asegúrate de importar tu archivo CSS
import flecha from "../../../public/flecha.mp4";

const Landing = () => {
  return (
    <div className="content-landing">
      <div className="video-background">
        <video className="video" autoPlay loop muted>
          <source src={entrega2} type="video/mp4" />
        </video>
      </div>
      <div className="contenido">
        <NavLink to="/header" className="link-container">
          <p className="mule-text">MULE</p>
          <div className="flecha-content">
            <p className="pedido"> Comienza tu pedido aquí</p>
            <video className="flecha" autoPlay loop muted>
              <source src={flecha} type="video/mp4" />
            </video>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Landing;
