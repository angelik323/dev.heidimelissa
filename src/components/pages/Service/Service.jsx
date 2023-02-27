import React from "react";
import { FaBootstrap, FaCode, FaPython, FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import ServiceItem from "./ServiceItem";

const serviceData = [
  {
    id: 1,
    icon: <FaCode />,
    title: "Programación",
    description:
      "",
  },
  {
    id: 2,
    icon: <FaPython />,
    title: "Desarrollo Backend Junior",
    description:
      "",
  },
  {
    id: 3,
    icon: <FaReact />,
    title: "React Template",
    description:
      "",
  },
  {
    id: 4,
    icon: <FaBootstrap />,
    title: "Bootstrap Template",
    description:
      "",
  }
];

const Service = () => {
  return (
    <section className="pb-10">
      <div className="flex flex-wrap md:px-4">
        {serviceData.map((service, id) => (
          <ServiceItem service={service} key={id} />
        ))}
      </div>
    </section>
  );
};

export default Service;
