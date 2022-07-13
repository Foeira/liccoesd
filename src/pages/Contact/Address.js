import React from "react";

function Address() {
  return (
    <div className="flex justify-center">
      <div className="bg-primary rounded-3xl flex-col space-y-10 p-10 text-white">
        <h1 className="text-3xl font-semibold"> Contáctanos </h1>
        <p>Déjanos un mensage y alguien de nuestro equipo te contactará </p>

        <div className="flex space-x-5 items-center">
          <div className="h-12 w-12 bg-primary p-2 rounded">
            <i className="ri-map-pin-fill text-5xl text-secondary"></i>
          </div>
          <div>
            <p className="text-3xl">CDMX, México</p>
          </div>
        </div>
        <div className="flex space-x-5 items-center">
          <div className="h-12 w-12 bg-primary p-2 rounded">
            <i className="ri-mail-line text-5xl text-secondary"></i>
          </div>
          <div>
            <h1 className="text-3xl p-2">E-Mail</h1>
            <p className="p-2">VENTAS@LICCO.COM</p>
          </div>
        </div>
        <div className="flex space-x-5 items-center">
          <div className="h-12 w-12 bg-primary p-2 rounded">
            <i className="ri-phone-line text-5xl text-secondary"></i>
          </div>
          <div>
            <h1 className="text-3xl p-2">Llámanos</h1>
            <p className="p-2">+(52) 5548119401</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Address;
