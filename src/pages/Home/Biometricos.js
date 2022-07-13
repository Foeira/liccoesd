import React from "react";

function Biometricos() {
  const pasosBio = [
    {
      title: "REGISTRA A TU PERSONAL",
      description:
        "Toma una foto del rostro de todo tu personal, mándanos su número de empleado, nombre, contrato y todo eso.",
      image: "images/foto1.png",
    },
    {
      title: "INSTALA TU MÓDULO DE ACCESO",
      description:
        "Coloca una tablet con conexión a Internet y permite a la aplicación acceder a la cámara y archivos multimedia.",
      image: "images/20220324_012039.jpg",
    },
    {
      title: "TOMA ASISTENCIA",
      description:
        "Toca Entrada o Salida para marcar el comienzo o fin de tu turno laboral, tomate una selfie con luz, lo mas cerca posible. ",
      image: "images/20220323_225634.jpg",
    },
    {
      title: "REVISA INCIDENCIAS",
      description:
        "Revisa faltas, retardos, inserta vacaciones o incapacidades, agrega tiempos extra y manda a tu programa de nómina.",
      image: "images/foto2.png",
    },
  ];

  return (
    <div className="px-10">
      <h1 className="text-5xl font-semibold text-primary">
        Agiliza tu pago de Nómina
      </h1>
      <h1 className="text-7xl font-semibold text-secondary mt-10">
        <b>Utiliza cualquier TABLETA </b>
      </h1>
      <p className="text-gray-600 text-xl mt-10">
        Utilizando la camara de cualquier tablet, puedes tomar la asistencia de
        tu personal. Solo descarga la aplicación, registra a tus trabajadores y
        podrás revisar asistencias, horas de acceso, suma de horas y descargar
        un archivo .csv para ingresar a tu programa de nómina. Debes tener una
        conexión a Internet estable y algo de luz no seas cabrón.
      </p>
      <div className="grid grid-cols-2 gap-20 mt-10 sm:grid-cols-1 border-gray-600">
        {pasosBio.map((item) => {
          return (
            <div className="border border-gray-500 p-5 flex flex-col space-y-10 rounded transform hover:scale-105 duration-300">
              <h1 className=" mx-20 sm:mx-5 text-center -mt-8 bg-white border-gray-600 border text-2xl rounded text-secondary font-semibold py-2">
                {item.title}
              </h1>
              <img src={item.image} alt="" className="h-90 w-90 rounded" />
              <p className="text-gray-600 text-md hover:text-primary">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Biometricos;
