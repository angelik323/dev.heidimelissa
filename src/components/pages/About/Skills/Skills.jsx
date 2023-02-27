import React from "react";
import SkillItem from "./SkillItem";

const skillData = [
  {
    id: 1,
    title: "Python",
    percentage: "28%",
  },
  {
    id: 2,
    title: "Java",
    percentage: "23%",
  },
  {
    id: 3,
    title: "Git, Github",
    percentage: "30%",
  },
  {
    id: 4,
    title: "Bootstrap5",
    percentage: "3%",
  },
  {
    id: 5,
    title: "Html5, Css3",
    percentage: "5%",
  },
  {
    id: 6,
    title: "Bootstrap5",
    percentage: "3%",
  },
  {
    id: 7,
    title: "JavaScript",
    percentage: "5%",
  },
  {
    id: 8,
    title: "ReactJS",
    percentage: "3%",
  },
];

const Skills = () => {
  return (
    <div className="py-4">
      <div className="flex flex-wrap">
        <div className="w-full">
          <div className="md:mx-4">
            <h3 className="text-2xl text-gray-800 font-bold mb-4">Habilidades</h3>
          </div>
        </div>
        {skillData.map((skill, id) => (
          <SkillItem skill={skill} key={id} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
