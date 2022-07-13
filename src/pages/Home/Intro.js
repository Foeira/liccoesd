import React from "react";

function Intro() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-1 h-screen items-center sm:mt-10">
      <div className="flex flex-col items-end space-y-7">
        <h1 className=" px-5 py-1 text text-4xl font-semibold text-primary sm:text-4xl">
          Liccontrol de Asistencia <b> a partir de</b>
        </h1>
        <h1 className="text-6xl font-semibold text-secondary sm:text-4xl">
          Reconocimiento Facial
        </h1>
        <button className="px-16 py-5 bg-secondary text-2xl text-white max-w-max hover:bg-primary">
          Acceder
        </button>
      </div>

      <div className="p-10">
        <lottie-player
          src="https://assets3.lottiefiles.com/packages/lf20_Sb1gLg.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        ></lottie-player>
      </div>
    </div>
  );
}

export default Intro;
