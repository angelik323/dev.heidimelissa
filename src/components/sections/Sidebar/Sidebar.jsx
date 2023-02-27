import React from "react";
import image from "../../../images/certificado/CVDeveloperHeidiMelissaNaranjoAcevedoPROG.pdf";
import {
  FaBehance,
  FaDribbble,
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaSkype,
  FaTwitter,
} from "react-icons/fa";
import profile from "../../../images/profile.jpg";

const socials = [
  {
    id: 2,
    icon: <FaGithub />,
    link: "#0",
  },
  {
    id: 3,
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/heidi-melissa-naranjo-acevedo-943838230/",
  },
  {
    id: 4,
    icon: <FaInstagram />,
    link: "https://www.instagram.com/melinaranjoa/",
  }
];

const Sidebar = () => {
  return (
    <aside className="sticky top-0 bg-white md:mx-8 lg:mx-4 mb-8 p-6 shadow-md rounded-md -mt-40">
      <div className="w-24 h-24 rounded-md overflow-hidden mx-auto mb-5">
        <img src={profile} alt="shafiqhammad" className="w-full" />
      </div>
      <div className="text-center">
        <h1 className="text-xl text-gray-800 font-bold mb-1">Melissa Naranjo</h1>
        <p className="text-sm text-gray-400 mb-3">
          Python Developer Junior
          {/*
          <a href="#0" className="text-purple-600 pl-1">
            Abc Company
          </a>    
          */}
        </p>

        <a
          href={image}
          target={"_blank"}
          className="inline-block mb-3 rounded bg-pink-600 text-center border-0 py-2 px-6 text-white leading-7 tracking-wide hover:bg-purple-800"
        >
          Descargar CV
        </a>        

        <ul className="flex flex-wrap justify-center">
          {socials.map((social, id) => (
            <SocialIcon social={social} key={id} />
          ))}
        </ul>
      </div>
      <div className="text-start pt-4">
        <h3 className="text-md mb-2 uppercase font-medium text-gray-800">
          Sobre mi
        </h3>
        <p className="text-gray-400 text font-light leading-relaxed">
          Me apasiona la tecnología, el campo de la salud, y alimentar lo que mas pueda mi conocimiento; para así muy pronto
          poder subir de nivel como desarrolladora backend, estoy dispuesta a aprovechar las oportunidades que se me presenten
          en el campo laboral y explotar al máximo mis capacidades para aportar al equipo de trabajo al que pueda pertenecer.
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;

const SocialIcon = (props) => {
  const { icon, link } = props.social;
  return (
    <li className="m-2">
      <a
        href={link}
        className="w-8 h-8 bg-purple-100 rounded text-purple-800 flex items-center justify-center hover:text-white hover:bg-purple-600"
      >
        {icon}
      </a>
    </li>
  );
};
