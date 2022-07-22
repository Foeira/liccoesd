import React from "react";
import Video from "./Video";

function Intro_2() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-1 h-screen items-center sm:mt-10">
      <div className="flex flex-col items-start space-y-7">
        <h1 className=" px-1 py-4 text text-6xl font-semibold text-primary sm:text-4xl">
          Control de Asistencia <b> a partir de</b>
        </h1>
        <h1 className="px-1 text-6xl font-semibold text-secondary sm:text-4xl">
          Reconocimiento Facial
        </h1>
        <button className="px-16 py-5 bg-secondary text-2xl text-white max-w-max hover:bg-primary">
          Acceder
        </button>
      </div>

      <div className="p-2 h-50 w-50">
        <Video />
      </div>
    </div>
  );
}

export default Intro_2;
