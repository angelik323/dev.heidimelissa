import React from "react";
import Skills from "./Skills/Skills";
import image from "../../../images/certificado/certificado_general(6).pdf";


const About = () => {
  return (
    <section className="py-8">
      <div className="flex flex-wrap md:px-4">
        <div className="w-full">
          <div className="md:mx-4">
            <h3 className="text-2xl text-gray-800 font-bold mb-4">Quién soy yo?</h3>
            <p className="text-sm text-gray-400 leading-6 mb-3">
              Hola! soy Heidi Melissa Naranjo Acevedo, certificada y graduada de la Universidad del Norte del 
              programa de CONOCIMIENTOS ACADÉMICOS EN HABILIDADES EN PROGRAMACIÓN CON ÉNFASIS EN APLICACIONES WEB. | 
              <a
                href={image}
                target={"_blank"}
                className="inline-block mb-3 rounded text-pink-600 border-0 cursor-pointer"
              >
                Ver Certificado.
              </a>  
            </p>
            <p className="text-sm text-gray-400 leading-6 mb-3">
              Me gusta hacer proyectos personales para cada día enriquecer este campo del conocimiento.
              Me gusta hacer deporte, los videojuegos, bailar y las investigaciones con soporte científico.
            </p>
          </div>
          <Skills />
        </div>
      </div>
    </section>
  );
};

export default About;
