import React from "react";

function Servicios() {
  const items = [
    {
      title: "Control de asistencia",
      icon: "images/20220323_225617.jpg",
      description:
        "Automatización de procesos de gestión de Nómina a partir del control de acceso a partir de reconocimiento facial",
    },
    {
      title: "Arquitectura Empresarial",
      icon: "images/foto3.png",
      description:
        "Análisis de los lineaminetos entre las capas de negocio y las capas de datos y tecnología para mejorar tus procesos internos de negocio.",
    },
    {
      title: "Servicios Web",
      icon: "images/licco_logo_negro.jpeg",
      description:
        "Diseño y creación de herramientas digitales que ayudan a tu empresa",
    },
    {
      title: "Soporte y Monitoreo",
      icon: "images/20220322_115144.jpg",
      description: "Te podemos ayudar en optimizar tu departamento de IT",
    },
  ];
  return (
    <div className="py-20 z-20">
      <h1 className="py-14 text-secondary text-5xl text-center z-20 font-semibold mt-7 lg:mt-14">
        Nuestros Servicios
      </h1>
      <div className="h-48 w-full bg-primary mt-2"></div>
      <div className="grid grid-cols-4 sm:grid-cols-1 lg:grid-cols-2 gap-8 mx-6 -mt-40">
        {items.map((item) => (
          <div className="p-1 bg-white border shadow flex flex-col space-y-2 items-center transform hover:scale-105 duration-300">
            <img src={item.icon} alt="" className="h-30 w-30" />
            <h1 className="text-2xl">{item.title}</h1>
            <p className="text-gray-600 text-md text-center">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Servicios;
