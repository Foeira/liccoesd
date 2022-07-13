import React from "react";

function Intro() {
  return (
    <div className="h-screen bg-primary grid grid-cols-2 items-center sm:h-cover">
      <div>
        <img src="images/atelier.jpg" alt="" />
      </div>
      <div>
        <h1 className="text-secondary text-7xl font-semibold">
          En Licco{" "}
          <b className="text-white">
            {" "}
            lo <b className="text-green-600">MÁS</b> importante son nuestros
          </b>
          <b> clientes </b>
        </h1>
      </div>
    </div>
  );
}

export default Intro;
