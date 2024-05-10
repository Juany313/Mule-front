import React from "react";
import about from "../assets/about.jpg";

const About = () => {
  return (
    <div className="bg-p300 flex justify-end w-full h-screen ">
      <div
        className="w-full bg-cover bg-center h-3/4 bg-no-repeat"
        style={{ backgroundImage: `url(${about})` }}
      >
        <div className="w-1/3 h-56 m-12 p-8 border text-lg bg-s300 rounded-lg text-center shadow-md flex ml-auto justify-center">
          <p className="w-4/5 text-center">
            Somos el socio ideal para cualquier empresa que busque soluciones
            logísticas integrales para acompañar el desarrollo de su negocio. Lo
            hacemos con flexibilidad y eficiencia, impulsados por la tecnología
            y la innovación continua al servicio de nuestros clientes
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
