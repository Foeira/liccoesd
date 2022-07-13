import React from "react";

function ContactForm() {
  return (
    <div>
      <form className="flex flex-col space-y-10">
        <h1 className="text-4xl font-semibold text-secondary mb-5">
          Envianos un mensaje
        </h1>

        <div className="flex space-x-10">
          <input
            type={"text"}
            placeholder="Nombre"
            className="py-3 px-5 bg-blue-50 focus:outline-none rounded-lg text-gray-500 w-full"
          ></input>
          <input
            type={"text"}
            placeholder="Apellido"
            className="py-3 px-5 bg-blue-50 focus:outline-none rounded text-gray-500 w-full"
          ></input>
        </div>

        <input
          type={"text"}
          placeholder="E-mail"
          className="py-3 px-5 bg-blue-50 focus:outline-none rounded text-gray-500 w-full"
        ></input>
        <input
          type={"text"}
          placeholder="Telefono"
          className="py-3 px-5 bg-blue-50 focus:outline-none rounded text-gray-500 w-full"
        ></input>
        <div className="flex space-x-10">
          <textarea
            type={"text"}
            placeholder="Mensaje"
            className="py-10 px-5 bg-blue-50 focus:outline-none rounded text-gray-500 w-full"
          ></textarea>
        </div>
        <div className="flex justify-end">
          <button className="text-white bg-secondary px-5 py-3 rounded-xl max-w-max hover:bg-primary">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
