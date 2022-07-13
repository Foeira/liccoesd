import React from "react";

function PorqueLicco() {
  return (
    <div className="mt-20">
      <h1 className="text-center text-8xl font-semibold text-primary">
        ¿Porqué <b className="text-secondary">Licco?</b>
      </h1>
      <div className="h-[500px]">
        <lottie-player
          src="https://assets1.lottiefiles.com/packages/lf20_jyh1kswl.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        ></lottie-player>
      </div>
      <p className="px-10 text-gray-600 text-xl mt-10">
        Con Licco ESD no necesitas invertir en costosos equipos biométricos,
        utiliza una tableta, manda la información de forma segura y revisa las
        incidencias de tus empleados. Sólo necesitas una conexión estable a
        internet, un cargador para la tableta y si es neceesario puedes comprar
        el stand protector contra bestias
      </p>
      <h1 className="px-10 text-primary text-4xl font-semibold mt-10">
        En Licco pensamos en todo ese desmadre
      </h1>
      <p className="px-10 text-gray-600 text-xl mt-10">
        Contactanos para mas información y como podemos ayudarte a mejorar uno
        de tus principales procesos internos administrativos
      </p>
    </div>
  );
}

export default PorqueLicco;
