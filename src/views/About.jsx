import React from "react";
import about from "../assets/about.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="bg-p300 flex justify-center items-center w-full h-screen overflow-hidden"
    >
      <div
        className="w-full h-full bg-cover bg-center bg-no-repeat flex justify-end items-center"
        style={{ backgroundImage: `url(${about})` }}
      >
        <div className="w-1/3 max-w-lg h-auto m-8 p-8 border text-lg bg-s300 rounded-lg text-center shadow-md flex justify-center items-center">
          <p className="w-4/5">
            Somos el socio ideal para cualquier empresa que busque soluciones
            logísticas integrales para acompañar el desarrollo de su negocio. Lo
            hacemos con flexibilidad y eficiencia, impulsados por la tecnología
            y la innovación continua al servicio de nuestros clientes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
