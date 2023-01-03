import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import CommentForm from "../forms/DashboardForms/CommentForm";
import Profile from "../forms/DashboardForms/Profile";
import CancelarConsulta from "../forms/DashboardForms/CancelarConsulta";
import HistoricoConsulta from "../forms/DashboardForms/HistoricoConsulta";
import VencimentoBeneficio from "../forms/DashboardForms/VencimentoBeneficio";
import AgendarConsulta from "../forms/DashboardForms/AgendarConsulta";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function DashboardPacienteBeneficiado() {
  const [user, setUser] = useState();
  const [othersInfo, setOthersInfo] = useState({
    numeroPsicologos: "carregando...",
    numerosDeConsultas: "carregando...",
  });

  const [consultaHoje, setConsultaHoje] = useState({
    agenda: {
      id: "carregando...",
      dataConsulta: "carregando...",
      horaConsulta: "carregando...",
      idPsicologo: "carregando...",
      valorConsulta: "carregando...",
      linkDoMeet: "carregarndo...",
    },
    psicologo: {
      nome: "Nenhum 😭",
      crp: "carregando...",
    },
  });

  async function carregarPacienteBeneficiado() {
    const idPaciente = localStorage.getItem("idPacienteBeneficiado");
    // console.log(idPaciente);
    try {
      await axios
        .get(
          `http://localhost:5000/api/v1/users/profile/pacienteBeneficiado/${idPaciente}`
        )
        .then((response) => {
          // console.log(response.data);
          setUser(response.data);
        });
    } catch (error) {
      // console.log(error.response);
    }
  }

  const idPacienteBeneficiado = localStorage.getItem("idPacienteBeneficiado");
  async function carregarOutrasInformacoes() {
    let urlNumerosDeConsultas = `http://localhost:5000/api/v1/users/pacienteBeneficiado/totalConsultas/${idPacienteBeneficiado}`;
    let urlNumeroPsicologos = `http://localhost:5000/api/v1/users/others/contador/psicologos`;

    const reqNumerosDeConsulta = axios.get(urlNumerosDeConsultas);
    const reqNumeroPsicologos = axios.get(urlNumeroPsicologos);

    axios
      .all([reqNumerosDeConsulta, reqNumeroPsicologos])
      .then(
        axios.spread((...responses) => {
          const resNumerosDeConsulta = responses[0];
          const resNumeroPsicologos = responses[1];

          // use/access the results
          // console.log(resNumerosDeConsulta.data, resNumeroPsicologos.data);
          setOthersInfo({
            numeroPsicologos: resNumeroPsicologos.data,
            numerosDeConsultas: resNumerosDeConsulta.data,
          });
        })
      )
      .catch((errors) => {
        // react on errors.
        // console.error(errors);
      });
  }

  const [consultaHojeRender, setConsultaHojeRender] = useState(false);
  useEffect(() => {
    // console.log("O pacinete tem consulta hoje? ", consultaHojeRender);
  }, [consultaHojeRender]);

  async function carregarConsultaDeHoje() {
    const idPacienteBeneficiado = localStorage.getItem("idPacienteBeneficiado");
    try {
      await axios
        .get(
          `http://localhost:5000/api/v1/users/pacienteBeneficiado/consultarAgenda/${idPacienteBeneficiado}`
        )
        .then((response) => {
          // console.log(response.data);
          setConsultaHoje(response.data);
          setConsultaHojeRender(true);
        });
      // console.log("consulta de Hoje");
      // console.log(consultaHoje?.agenda?.id);
    } catch (error) {
      // console.log(error.response);
    }
  }
  const navigate = useNavigate();
  const loggedInUserPaciente = localStorage.getItem("userPacienteBeneficiado");
  const loggedUndefined =
    localStorage.getItem("userPacienteBeneficiado") === "undefined";
  // console.log(loggedInUserPaciente);
  useEffect(() => {
    if (!loggedInUserPaciente || loggedUndefined) {
      navigate(`/`);
      // console.log("Não logado");
    } else {
      // console.log("Logado");
      carregarPacienteBeneficiado();
      carregarOutrasInformacoes();
      carregarConsultaDeHoje();
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate(`/`);
  };
  return (
    <body className="flex bg-gray-100 min-h-screen min-w-full">
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
      <div className="flex-grow text-gray-800">
        <header className="flex items-center h-20 px-6 sm:px-10 bg-purple-200">
          <div className="items-center ">
            <h3 className=" font-halimum text-transparent bg-clip-text bg-gradient-to-r from-purple-900 via-fuchsia-800 to-fuchsia-800 text-3xl">
              ajude.me
            </h3>
          </div>
          <div className="flex flex-shrink-0 items-center ml-auto">
            <button className="inline-flex items-center p-2 hover:bg-gray-100 focus:bg-gray-100 rounded-lg">
              <span className="sr-only">User Menu</span>
              <div className="hidden md:flex md:flex-col md:items-end md:leading-tight">
                <span className="font-semibold">{user?.nome}</span>
                <Profile
                  bottonText="Perfil "
                  styleBotton="text-sm text-gray-600"
                  nome={user?.nome}
                  tipo="Paciente"
                  stats="Ativo"
                  moreInformation={true}
                  input1={"CPF: " + user?.cpf}
                  input2={"NIS: " + user?.nis}
                ></Profile>
              </div>
              <span className="h-12 w-12 ml-2 sm:ml-3 mr-2 bg-gray-100 rounded-full overflow-hidden">
                <img
                  src="/no-photo.jpg"
                  alt="user profile photo"
                  className="h-full w-full object-cover"
                />
              </span>
              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="hidden sm:block h-6 w-6 text-gray-300"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <div className="border-l pl-3 ml-3 space-x-1">
              <button className="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full">
                <span className="sr-only">Notifications</span>
                <span className="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-500 rounded-full"></span>
                <span className="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-500 rounded-full animate-ping"></span>
                <svg
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </button>
              <button
                className="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full"
                onClick={handleLogout}
              >
                <span className="sr-only">Log out</span>
                <svg
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
              </button>
            </div>
          </div>
        </header>
        <main className="p-6 sm:p-10 space-y-6">
          <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
            <div className="mr-6">
              <h1 className="text-4xl font-semibold mb-2">Área do Paciente</h1>
              <h2 className="text-gray-600 ml-0.5">Nós cuidados de você!</h2>
            </div>
            <div className="flex flex-wrap items-start justify-end -mb-3">
              <VencimentoBeneficio
                bottonText="Vencimento de Benefício"
                styleBotton="inline-flex px-5 py-3 text-white bg-blue-400 hover:bg-blue-500 focus:bg-blue-200 rounded-md ml-6 mb-3"
                dataVencimentoBeneficio={user?.vencimentoBeneficio}
              ></VencimentoBeneficio>
              <CancelarConsulta
                bottonText="Cancelar Consulta"
                styleBotton="inline-flex px-5 py-3 text-red-600 hover:text-red-700 focus:text-red-700 hover:bg-red-100 focus:bg-red-100 border border-red-600 rounded-md ml-6 mb-3"
                userBeneficiado={true}
              ></CancelarConsulta>
              <AgendarConsulta
                bottonText="Agendar Consulta"
                styleBotton="inline-flex px-5 py-3 text-white bg-purple-600 hover:bg-purple-700 focus:bg-purple-700 rounded-md ml-6 mb-3"
                userBeneficiado={true}
              ></AgendarConsulta>
            </div>
          </div>
          <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            <div className="flex items-center p-8 bg-white shadow rounded-lg hover:ring-offset-2 hover:ring hover:ring-purple-300 hover:shadow-xl transition ease-in duration-150">
              <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-purple-600 bg-purple-100 rounded-full mr-6">
                <svg
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <div>
                <span className="block text-2xl font-bold">
                  {othersInfo?.numeroPsicologos}
                </span>
                <span className="block text-gray-500">
                  Psicólogos disponíveis
                </span>
              </div>
            </div>
            <div className="flex items-center p-8 bg-gray-200 shadow rounded-lg opacity-70 hover:ring-offset-2 hover:ring hover:ring-purple-400 hover:shadow-xl transition ease-in duration-150">
              <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-green-600 bg-green-100 rounded-full mr-6">
                <svg
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <div>
                <span className="block text-2xl font-bold">0</span>
                <span className="block text-gray-500">
                  Avaliação da última consulta (em breve)
                </span>
              </div>
            </div>
            <div className="flex items-center p-8 bg-white shadow rounded-lg hover:ring-offset-2 hover:ring hover:ring-purple-300 hover:shadow-xl transition ease-in duration-150">
              <div className="h-16 w-16 mr-3 bg-gray-100 rounded-full overflow-hidden">
                <img
                  src="/no-photo.jpg"
                  alt="Annette Watson profile picture"
                />
              </div>
              <div>
                <span className="inline-block text-1xl font-bold">
                  Psicólogo(a) atual
                </span>
                <span className="inline-block text-xl text-gray-500 font-semibold"></span>
                <span className="block text-gray-500">
                  {consultaHoje?.psicologo?.nome}
                </span>
              </div>
            </div>
            <div className="flex items-center p-8 bg-white shadow rounded-lg hover:ring-offset-2 hover:ring hover:ring-purple-300 hover:shadow-xl transition ease-in duration-150">
              <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-blue-600 bg-blue-100 rounded-full mr-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M17 3v-2c0-.552.447-1 1-1s1 .448 1 1v2c0 .552-.447 1-1 1s-1-.448-1-1zm-12 1c.553 0 1-.448 1-1v-2c0-.552-.447-1-1-1-.553 0-1 .448-1 1v2c0 .552.447 1 1 1zm13 13v-3h-1v4h3v-1h-2zm-5 .5c0 2.481 2.019 4.5 4.5 4.5s4.5-2.019 4.5-4.5-2.019-4.5-4.5-4.5-4.5 2.019-4.5 4.5zm11 0c0 3.59-2.91 6.5-6.5 6.5s-6.5-2.91-6.5-6.5 2.91-6.5 6.5-6.5 6.5 2.91 6.5 6.5zm-14.237 3.5h-7.763v-13h19v1.763c.727.33 1.399.757 2 1.268v-9.031h-3v1c0 1.316-1.278 2.339-2.658 1.894-.831-.268-1.342-1.111-1.342-1.984v-.91h-9v1c0 1.316-1.278 2.339-2.658 1.894-.831-.268-1.342-1.111-1.342-1.984v-.91h-3v21h11.031c-.511-.601-.938-1.273-1.268-2z" />
                </svg>
              </div>
              <div>
                <HistoricoConsulta
                  bottonText="Histórico de Consultas"
                  styleBotton="block text-gray-500"
                  userBeneficiado={true}
                ></HistoricoConsulta>
              </div>
            </div>
          </section>
          <section className="grid md:grid-cols-2 xl:grid-cols-4 xl:grid-rows-3 xl:grid-flow-col gap-6">
            {consultaHojeRender ? (
              <div className="flex flex-col md:col-span-2 md:row-span-2 bg-white shadow rounded-lg">
                <div className="px-6 py-5 font-semibold border-b border-gray-100">
                  Que legal! Você tem uma consulta marcada para hoje
                </div>

                <div className="p-4 flex-grow">
                  <div className="flex items-center justify-center h-full px-4 py-16 text-gray-400 text-3xl font-semibold bg-gray-100 border-2 border-gray-200 border-dashed rounded-md">
                    <p>
                      Consulta marcada hoje{" "}
                      {(consultaHoje?.agenda?.dataConsulta).replaceAll(
                        "-",
                        "/"
                      )}{" "}
                      com a(o) Psicólogo: {consultaHoje?.psicologo?.nome} às{" "}
                      {(consultaHoje?.agenda?.horaConsulta).replaceAll(
                        "-",
                        ":"
                      )}
                      . <br />
                      {consultaHoje?.agenda?.linkDoMeet !=
                      "Aguardando link do meet do psicologo" ? (
                        <p>
                          Acesse o link para começar a consulta.{" "}
                          {(consultaHoje?.psicologo?.nome).split(" ")[0]} está
                          te esperando 👋
                          <a
                            href={consultaHoje?.agenda?.linkDoMeet}
                            target="_blank"
                          >
                            <input
                              type="submit"
                              value="Acessar"
                              onclick="redireciona()"
                              className=" cursor-pointer mt-5 border-blue-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-7 bg-purple-300 hover:bg-purple-400 "
                            ></input>
                          </a>
                        </p>
                      ) : (
                        <p>
                          Acesse o link:
                          <input
                            disabled
                            value="Indisponível no momento, aguarde o psicologo enviar o link"
                            onclick="redireciona()"
                            className=" cursor-pointer mt-5 text-center border-blue-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-7 bg-purple-300 hover:bg-purple-400 "
                          ></input>
                        </p>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col md:col-span-2 md:row-span-2 bg-white shadow rounded-lg">
                <div className="px-6 py-5 font-semibold border-b border-gray-100">
                  Você não tem consultas marcadas para hoje.
                </div>

                <div className="p-4 flex-grow">
                  <div className="flex items-center justify-center h-full px-4 py-16 text-gray-400 text-3xl font-semibold bg-gray-100 border-2 border-gray-200 border-dashed rounded-md">
                    <p>
                      Está tudo bem 😊 <br />
                      Você não tem consultas marcadas para hoje. Você pode
                      agendar a qualquer hora.
                    </p>
                  </div>
                </div>
              </div>
            )}
            <div className="flex items-center p-8 bg-white shadow rounded-lg">
              <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-yellow-600 bg-yellow-100 rounded-full mr-6">
                <svg
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="M24 2v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2zm1 11.729l.855-.791c1 .484 1.635.852 2.76 1.654 2.113-2.399 3.511-3.616 6.106-5.231l.279.64c-2.141 1.869-3.709 3.949-5.967 7.999-1.393-1.64-2.322-2.686-4.033-4.271z"
                  />
                </svg>
              </div>
              <div>
                <span className="block text-2xl font-bold">
                  {othersInfo.numerosDeConsultas}
                </span>
                <span className="block text-gray-500">
                  Consultas realizadas
                </span>
              </div>
            </div>
            <div className="flex items-center p-8 bg-white shadow rounded-lg">
              <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-teal-600 bg-teal-100 rounded-full mr-6">
                <svg
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6 animate-spin"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <span className="block text-2xl font-bold">
                  {othersInfo.numerosDeConsultas} hora(s).
                </span>
                <span className="block text-gray-500">Tempo em consultas</span>
              </div>
            </div>
            <div className="row-span-3 bg-gray-200 shadow rounded-lg opacity-70">
              <div className="flex items-center justify-between px-6 py-5 font-semibold border-b border-gray-100">
                <span>Psicólogos com as melhores avaliações (em breve) </span>
                <button
                  type="button"
                  className="inline-flex justify-center rounded-md px-1 -mr-1 bg-gray-200 opacity-70 text-sm leading-5 font-medium text-gray-500 hover:text-gray-600"
                  id="options-menu"
                  aria-haspopup="true"
                  aria-expanded="true"
                >
                  <svg
                    className="-mr-1 ml-1 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              <div
                className="overflow-y-auto"
                style={{ maxHeight: 50 + "rem" }}
              >
                <ul className="p-6 space-y-6">
                  <li className="flex items-center">
                    <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                      <img
                        src="/no-photo.jpg"
                        alt="Annette Watson profile picture"
                      />
                    </div>
                    <span className="text-gray-600">Annette Watson</span>
                    <span className="ml-auto font-semibold">⭐</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                      <img
                        src="/no-photo.jpg"
                        alt="Calvin Steward profile picture"
                      />
                    </div>
                    <span className="text-gray-600">Calvin Steward</span>
                    <span className="ml-auto font-semibold">⭐</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                      <img
                        src="/no-photo.jpg"
                        alt="Ralph Richards profile picture"
                      />
                    </div>
                    <span className="text-gray-600">Ralph Richards</span>
                    <span className="ml-auto font-semibold">⭐</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                      <img
                        src="/no-photo.jpg"
                        alt="Bernard Murphy profile picture"
                      />
                    </div>
                    <span className="text-gray-600">Bernard Murphy</span>
                    <span className="ml-auto font-semibold">⭐</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                      <img
                        src="/no-photo.jpg"
                        alt="Arlene Robertson profile picture"
                      />
                    </div>
                    <span className="text-gray-600">Arlene Robertson</span>
                    <span className="ml-auto font-semibold">⭐</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                      <img
                        src="/no-photo.jpg"
                        alt="Jane Lane profile picture"
                      />
                    </div>
                    <span className="text-gray-600">Jane Lane</span>
                    <span className="ml-auto font-semibold">⭐</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                      <img
                        src="/no-photo.jpg"
                        alt="Pat Mckinney profile picture"
                      />
                    </div>
                    <span className="text-gray-600">Pat Mckinney</span>
                    <span className="ml-auto font-semibold">⭐</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                      <img
                        src="/no-photo.jpg"
                        alt="Norman Walters profile picture"
                      />
                    </div>
                    <span className="text-gray-600">Norman Walters</span>
                    <span className="ml-auto font-semibold">⭐</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col row-span-3 bg-white shadow rounded-lg">
              <div className="px-6 py-5 font-semibold border-b border-gray-100">
                Como você está se sentindo hoje?
              </div>
              <div className="p-4 flex-grow">
                <CommentForm
                  tipoUsuario="pacienteBeneficiado"
                  idUsuario={localStorage.getItem("idPacienteBeneficiado")}
                />
                <div className="mt-5 w-full max-w-sm p-4 bg-gray-100 border rounded-lg shadow-md sm:p-6 ">
                  <h5 className="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-gray-900">
                    Último Sentimento
                  </h5>
                  <p className="text-sm font-normal text-gray-500 dark:text-gray-900">
                    Encontre seu último sentimento logo abaixo.
                  </p>
                  <ul className="my-4 space-y-3 text-gray-900">
                    <li>
                      <span className=" flex-1 ml-3 whitespace-nowrap">
                        {user?.sentimentoPaciente}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section className="text-right font-semibold text-gray-500">
            <a className="text-purple-600 hover:underline">
              © Copyright 2022 ajude.me Inc.{" "}
            </a>
            <a className="text-teal-400 hover:underline">
              Todos os direitos reservados.
            </a>
          </section>
        </main>
      </div>
    </body>
  );
}
