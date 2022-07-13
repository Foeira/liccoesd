import React from "react";
import { useState } from "react";
import axios from "axios";

function ContactForm() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [msj, setMsj] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(name, lastName, email, tel, msj);
    const data = {
      Name: name,
      LastName: lastName,
      Email: email,
      Tel: tel,
      Msj: msj,
    };
    axios
      .post(
        "https://sheet.best/api/sheets/b5fc4f2d-6a09-4425-9d4b-e94bdbc58837",
        data
      )
      .then((response) => {
        console.log(response);
        setName("");
        setLastName("");
        setEmail("");
        setTel("");
        setMsj("");
      });
  };

  return (
    <div>
      <form className="flex flex-col space-y-10" onSubmit={handleSubmit}>
        <h1 className="text-4xl font-semibold text-secondary mb-5">
          Envianos un mensaje
        </h1>
        <div className="flex space-x-10">
          <input
            type={"text"}
            placeholder="Nombre"
            required
            className="py-3 px-5 bg-blue-50 focus:outline-none rounded-lg text-gray-500 w-full"
            onChange={(e) => setName(e.target.value)}
            value={name}
          ></input>
          <input
            type={"text"}
            placeholder="Apellido"
            required
            className="py-3 px-5 bg-blue-50 focus:outline-none rounded text-gray-500 w-full"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          ></input>
        </div>

        <input
          type={"text"}
          placeholder="E-mail"
          className="py-3 px-5 bg-blue-50 focus:outline-none rounded text-gray-500 w-full"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        ></input>
        <input
          type={"text"}
          placeholder="Telefono"
          className="py-3 px-5 bg-blue-50 focus:outline-none rounded text-gray-500 w-full"
          onChange={(e) => setTel(e.target.value)}
          value={tel}
        ></input>
        <div className="flex space-x-10">
          <textarea
            type={"text"}
            placeholder="Mensaje"
            className="py-10 px-5 bg-blue-50 focus:outline-none rounded text-gray-500 w-full"
            onChange={(e) => setMsj(e.target.value)}
            value={msj}
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
