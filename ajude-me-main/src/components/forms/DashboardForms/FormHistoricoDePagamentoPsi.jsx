import * as Dialog from "@radix-ui/react-dialog";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function FormHistoricoDePagamento() {
  const [historico, setHistorico] = useState("");
  const idPsicologo = localStorage.getItem("idPsicologo");
  useEffect(() => {
    try {
      axios
        .get(
          `http://localhost:5000/api/v1/users/psicologo/historic/${idPsicologo}`
        )
        .then((response) => {
          // console.log(response.data);
          setHistorico(response.data);
          // console.log("historico");
        });
    } catch (error) {
      // console.log(error.response);
    }
  }, []);
  // console.log(historico);
  return (
    <form>
      <div className="flex flex-col container max-w-xl mt-10 mx-auto w-full items-center justify-center bg-white dark:bg-gray-800 rounded-lg shadow">
        <ul className="flex flex-col divide-y w-full">
          {historico?.consultas?.map((consulta) => {
            return (
              <li className="flex flex-row">
                <div className="select-none cursor-pointer hover:bg-green-300 flex flex-1 items-center p-4">
                  <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
                    <a
                      href="#"
                      className="block relative"
                    >
                      <img
                        alt="profil"
                        src="/no-photo.jpg"
                        className="mx-auto object-cover rounded-full h-10 w-10"
                      />
                    </a>
                  </div>
                  <div className="flex-1 pl-1">
                    <div className="font-medium dark:text-white">
                      {consulta.Paciente.nome}
                    </div>
                    <div className="text-gray-600 dark:text-gray-200 text-sm">
                      {consulta.dataConsulta.replaceAll("-", "/")} às{" "}
                      {consulta.horaConsulta.replaceAll("-", ":")}
                    </div>
                  </div>
                  <div className="flex flex-row justify-center">
                    <div className="text-gray-600 dark:text-gray-200 text-lg font-semibold">
                      {consulta.valorConsulta === "grátis"
                        ? "Grátis"
                        : "R$ " + consulta.valorConsulta + ",00"}
                    </div>
                    <button className="w-10 text-right flex justify-end">
                      <svg
                        width="20"
                        fill="currentColor"
                        height="20"
                        className="hover:text-gray-800 dark:hover:text-white dark:text-gray-200 text-gray-500"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </li>
            );
          })}
          {historico?.consultas?.length === 0 && (
            <div className="select-none cursor-pointer hover:bg-blue-300 flex justify-center items-center p-4">
              <div className="text-gray-600 dark:text-gray-200 text-lg font-semibold ">
                Você não possui consultas.
              </div>
            </div>
          )}
        </ul>
      </div>
    </form>
  );
}
