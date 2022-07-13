import React from "react";

function ClientsList() {
  const clientes = [
    {
      name: "Lavatap",
      logo: "images/LavatapLogo.png",
      description:
        "Arquitectura EMpresarial y diseño de soluciones tecnológicas en sus procesos internos, biométricos, pase de asistencia",
    },
    {
      name: "MCA",
      logo: "images/MCALogo.png",
      description: "Pase de asistencia con reconocimiento facial",
    },
    {
      name: "Kopol",
      logo: "images/logo-kopol.png",
      description: "Pase de asistencia con reconocimiento facial",
    },
    {
      name: "87Grados",
      logo: "images/87_grados_masterlogo.png",
      description: "Pase de asistencia con reconocimiento facial",
    },
    {
      name: "Fonts Hostal and Camping",
      logo: "images/fontsCuulogo.jpg",
      description: "Pase de asistencia con reconocimiento facial",
    },
  ];

  return (
    <div className="grid grid-cols-3 sm:grid-cols-1 lg:grid-cols-2">
      {clientes.map((item) => {
        return (
          <div className="flex justify-center">
            <div className="bg-white shadow p-5 w-[500px] border mt-7">
              <div className="flex space-x-10 items-center justify-between">
                <h1 className="text-primary font-semibold text-2xl">
                  {item.name}
                </h1>
                <img src={item.logo} alt="" className="h-40 w-40 rounded-sm" />
              </div>
              <p className="text-gray-600 text-md mt-10">{item.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ClientsList;
