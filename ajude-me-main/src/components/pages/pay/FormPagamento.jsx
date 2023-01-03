import Pagamento from "./Pagamento";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function FormPagamento() {
  const [psicologo, setPsicologo] = useState();
  async function carregarPsicologo() {
    const idPsic = localStorage.getItem("idPsicologo");
    // console.log(idPsic);
    try {
      await axios
        .get(`http://localhost:5000/api/v1/users/profile/psicologo/${idPsic}`)
        .then((response) => {
          // console.log(response.data);
          setPsicologo(response.data);
        });
    } catch (error) {
      // console.log(error.response);
    }
  }

  const navigate = useNavigate();
  const idPsicologoConsulta = localStorage.getItem("idPsicologo");
  const loggedInUserPaciente = localStorage.getItem("userPaciente");
  const dataConsulta = localStorage.getItem("dataConsulta");
  const horaConsulta = localStorage.getItem("horaConsulta");
  // console.log(loggedInUserPsicologo);
  useEffect(() => {
    if (
      !idPsicologoConsulta ||
      !loggedInUserPaciente ||
      !dataConsulta ||
      !horaConsulta
    ) {
      navigate(`/dashboardPaciente`);
      // console.log("Sem dados de consulta");
    } else {
      // console.log("Com dados de consulta");
      carregarPsicologo();
    }
  }, []);

  return (
    <div className="relative mx-auto w-full bg-white">
      <div className="grid min-h-screen grid-cols-10">
        <div className="col-span-full py-6 px-4 sm:py-12 lg:col-span-6 lg:py-24">
          <div className="mx-auto w-full max-w-lg">
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
            />
            <h1 className="relative text-2xl font-medium text-gray-700 sm:text-3xl">
              Forma de pagamento
              <span className="mt-2 block h-1 w-10 bg-teal-600 sm:w-20"></span>
            </h1>
            <form
              action=""
              className="mt-10 flex flex-col space-y-4"
            >
              <Pagamento />
            </form>
            <p className="mt-10 text-center text-sm font-semibold text-gray-500">
              Ao realizar o pagamento desta consulta você concorda com os{" "}
              <a
                href="#"
                className="whitespace-nowrap text-teal-400 underline hover:text-teal-600"
              >
                Termos e Condições.
              </a>
            </p>
          </div>
        </div>
        <div className="relative col-span-full flex flex-col py-6 pl-8 pr-4 sm:py-12 lg:col-span-4 lg:py-24">
          <h2 className="sr-only">Order summary</h2>
          <div>
            <img
              src="/public/logoSemFundoRoxa - Copia.png"
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-teal-800 to-teal-400 opacity-95"></div>
          </div>
          <div className="relative">
            <ul className="space-y-5">
              <li className="flex justify-between">
                <div className="inline-flex">
                  <div className="items-center ">
                    <h3 className=" font-halimum text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-400 text-3xl">
                      ajude.me
                    </h3>
                  </div>
                  <div className="ml-3">
                    <p className="text-base font-semibold text-white">
                      Consulta particular com Psicólogo
                    </p>
                    <p className="text-sm font-medium text-white text-opacity-80">
                      ajude-me.com.br
                    </p>
                  </div>
                </div>
                <p className="text-sm font-semibold mt-4  ml-8 text-white">
                  R${psicologo?.valorPorConsulta},00
                </p>
              </li>
            </ul>
            <div className="my-5 h-0.5 w-full bg-white bg-opacity-30"></div>
            <div className="space-y-2">
              <p className="flex justify-between text-sm font-medium text-white ">
                <span>Taxa da plataforma: 8%</span>
                <span>R${Number(psicologo?.valorPorConsulta) * 0.08}</span>
              </p>
              <p className="flex justify-between text-lg font-bold text-white">
                <span>
                  Total: R$
                  {Number(psicologo?.valorPorConsulta) +
                    Number(psicologo?.valorPorConsulta) * 0.08}
                </span>
              </p>
            </div>
          </div>
          <div className="relative mt-10 text-white">
            <h3 className="mb-5 text-lg font-bold">Suporte</h3>

            <p className="mt-1 text-sm font-semibold">
              ajude-me@gmail.com <span className="font-light">(Email)</span>
            </p>
            <p className="mt-2 text-xs font-medium">
              Entre em contato agora para questões relacionadas com o pagamento.
            </p>
          </div>
          <div className="relative mt-10 flex">
            <p className="flex flex-col">
              <span className="text-sm font-bold text-white">
                Garantia de devolução de dinheiro
              </span>
              <span className="text-xs font-medium text-white">
                em até 30 dias após a compra
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
