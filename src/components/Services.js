import React from "react";
import Title from "./Title";
import { FaGlassMartiniAlt, FaTools, FaWindows } from "react-icons/fa";
import { GiTank } from "react-icons/gi";

const Services = () => {
  const services = [
    {
      icon: <FaGlassMartiniAlt />,
      title: "Free Serrice Ice Brandy",
      info:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, dicta!"
    },
    {
      icon: <GiTank />,
      title: "Endless MAKO drives",
      info:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, dicta!"
    },
    {
      icon: <FaTools />,
      title: "Calibrations 101 with Garus ",
      info:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, dicta!"
    },
    {
      icon: <FaWindows />,
      title: "Windows instalation 101 with Legion",
      info:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, dicta!"
    }
  ];
  return (
    <section className="services">
      <Title title="Services" />
      <div className="services-center">
        {services.map((item, index) => {
          return (
            <article key={index} className="service">
              <span>{item.icon}</span>
              <h6>{item.title}</h6>
              <p>{item.info}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
