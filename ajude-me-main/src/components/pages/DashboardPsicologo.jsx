import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Profile from "../forms/DashboardForms/Profile";
import HistoricoConsulta from "../forms/DashboardForms/HistoricoConsultaPsi";
import HistoricoDePagamento from "../forms/DashboardForms/HistoricoDePagamentoPsi";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function DashboardPsicologo() {
  const [psicologo, setPsicologo] = useState();
  const [othersInfo, setOthersInfo] = useState({
    numeroPacientes: "carregando...",
    numerosDeConsultas: "carregando...",
  });

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

  async function carregarOutrasInformacoes() {
    const idPsicologo = localStorage.getItem("idPsicologo");
    let urlNumerosDeConsultas = `http://localhost:5000/api/v1/users/psicologo/totalConsultas/${idPsicologo}`;
    let urlNumeroPacientes = `http://localhost:5000/api/v1/users/others/contador/allPacientes`;

    const reqNumerosDeConsulta = axios.get(urlNumerosDeConsultas);
    const reqNumeroPacientes = axios.get(urlNumeroPacientes);

    axios
      .all([reqNumerosDeConsulta, reqNumeroPacientes])
      .then(
        axios.spread((...responses) => {
          const resNumerosDeConsulta = responses[0];
          const resNumeroPacientes = responses[1];

          // resultados das requisições
          // console.log(resNumerosDeConsulta.data, resNumeroPacientes.data);
          setOthersInfo({
            numeroPacientes: resNumeroPacientes.data,
            numerosDeConsultas: resNumerosDeConsulta.data,
          });
        })
      )
      .catch((errors) => {
        // react on errors.
        // console.error(errors);
      });
  }

  const [consultaHoje, setConsultaHoje] = useState({
    agenda: {
      id: "carregando...",
      dataConsulta: "carregando...",
      horaConsulta: "carregando...",
      status: "carregando...",
      Paciente: {
        id: "carregando...",
        nome: "Nenhum 😭",
        sentimentoPaciente: "carregando...",
        tipo: "carregando...",
      },
    },
  });

  const [consultaHojeRender, setConsultaHojeRender] = useState(false);
  useEffect(() => {
    // console.log("O psicologo tem consulta hoje? ", consultaHojeRender);
  }, [consultaHojeRender]);

  async function carregarConsultaDeHoje() {
    const idPsicologo = localStorage.getItem("idPsicologo");
    try {
      await axios
        .get(
          `http://localhost:5000/api/v1/users/psicologo/consultarAgenda/${idPsicologo}`
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
  // console.log("consultaHoje");
  // console.log(consultaHoje);

  function handleUpdateLinkMeeting(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    // console.log("LINK DA REUNIÃO ENVIADO:");
    // console.log(data);
    // console.log("ID DA CONSULTA:");
    // console.log(consultaHoje?.agenda?.id);
    axios
      .put(
        `http://localhost:5000/api/v1/users/psicologo/alterarLinkMeet/${consultaHoje?.id}`,
        data
      )
      .then((response) => {
        // console.log(response);
        toast.success("O link da reunião foi alterado com sucesso."),
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          };
      })
      .catch((error) => {
        // console.log(error.response.data.message);
        toast.error(error.response.data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      });
  }

  const [proximasConsultas, setProximasConsultas] = useState("");
  useEffect(() => {
    const idPsicologos = localStorage.getItem("idPsicologo");
    axios
      .get(
        `http://localhost:5000/api/v1/users/psicologo/proximasConsultas/${idPsicologos}`
      )
      .then((response) => {
        // console.log(response.data);
        setProximasConsultas(response.data);
        // console.log("historico");
      })
      .catch((error) => {
        // console.log(error);
      });
  }, []);

  // console.log("Proximas consultas");
  // console.log(proximasConsultas);
  const navigate = useNavigate();
  const loggedInUserPsicologo = localStorage.getItem("userPsicologo");
  const loggedUndefined = localStorage.getItem("userPsicologo") === "undefined";

  useEffect(() => {
    if (!loggedInUserPsicologo || loggedUndefined) {
      navigate(`/`);
      // console.log("Não logado");
    } else {
      // console.log("Logado");
      carregarPsicologo();
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
          <div className="relative w-full max-w-md sm:-ml-2">
            <div className="items-center ">
              <h3 className=" font-halimum text-transparent bg-clip-text bg-gradient-to-r from-purple-900 via-fuchsia-800 to-fuchsia-800 text-3xl">
                ajude.me
              </h3>
            </div>
          </div>
          <div className="flex flex-shrink-0 items-center ml-auto">
            <button className="inline-flex items-center p-2 hover:bg-gray-100 focus:bg-gray-100 rounded-lg">
              <span className="sr-only">User Menu</span>
              <div className="hidden md:flex md:flex-col md:items-end md:leading-tight">
                <span className="font-semibold">{psicologo?.nome}</span>
                <Profile
                  bottonText="Perfil"
                  styleBotton="text-sm text-gray-600"
                  nome={psicologo?.nome}
                  tipo="Psicólogo(a)"
                  stats="Ativo"
                  moreInformation={true}
                  input1={`CRP: ${psicologo?.crp}`}
                  input2={`CPF: ${psicologo?.cpf}`}
                  input3={`Consulta: R$ ${psicologo?.valorPorConsulta}`}
                ></Profile>
              </div>
              <span className="h-12 w-12 ml-2 sm:ml-3 mr-2 bg-gray-100 rounded-full overflow-hidden">
                <img
                  src="/no-photo.jpg"
                  alt="user profile photo"
                  className="h-full w-full object-cover"
                />
              </span>
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
                className="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full "
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
              <h1 className="text-4xl font-semibold mb-2">
                Área do Psicólogo(a)
              </h1>
              <h2 className="text-gray-600 ml-0.5">Você faz a diferença!</h2>
            </div>
            <div className="flex flex-wrap items-start justify-end -mb-3">
              <HistoricoDePagamento
                bottonText="Extrato de Pagamento"
                styleBotton="inline-flex px-5 py-3 text-white bg-green-400 hover:bg-green-500 rounded-md ml-6 mb-3"
              ></HistoricoDePagamento>
              {/* <CancelarConsulta
                bottonText="Cancelar Consulta"
                styleBotton="inline-flex px-5 py-3 text-red-600 hover:text-red-700 focus:text-red-700 hover:bg-red-100 focus:bg-red-100 border border-red-600 rounded-md ml-6 mb-3"
              ></CancelarConsulta> */}
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
                  {othersInfo?.numeroPacientes}
                </span>
                <span className="block text-gray-500">
                  Total de Pacientes na Plataforma
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
                <span className="block text-2xl font-bold">
                  {psicologo?.notaUltimaConsulta}
                </span>
                <span className="block text-gray-500">
                  Sua avaliação <br />
                  (em breve)
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
                  Próximo Paciente
                </span>
                <span className="inline-block text-xl text-gray-500 font-semibold"></span>
                <span className="block text-gray-500">
                  {consultaHoje?.Paciente?.nome === undefined
                    ? "Nenhum paciente"
                    : consultaHoje?.Paciente?.nome}
                </span>
              </div>
            </div>
            <div className="flex items-center p-8 bg-white shadow rounded-lg hover:ring-offset-2 hover:ring hover:ring-purple-300 hover:shadow-xl transition ease-in duration-150">
              <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-blue-600 bg-blue-100 rounded-full mr-6">
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
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>

              <HistoricoConsulta
                bottonText="Histórico de Consultas"
                styleBotton="block text-gray-500"
              ></HistoricoConsulta>
            </div>
          </section>
          <section className="grid md:grid-cols-2 xl:grid-cols-4 xl:grid-rows-3 xl:grid-flow-col gap-6">
            {consultaHojeRender ? (
              <div className="flex flex-col md:col-span-2 md:row-span-2 bg-white shadow rounded-lg">
                <div className="px-6 py-5 font-semibold border-b border-gray-100">
                  Que legal! Você tem uma consulta marcada para hoje
                </div>
                <div className="p-4 flex-grow">
                  <div className="flex items-center justify-center h-120 px-4 py-10 text-gray-400 text-2xl font-semibold bg-gray-100 border-2 border-gray-200 border-dashed rounded-md mb-7">
                    <p>
                      Consulta marcada hoje{" "}
                      {(consultaHoje?.dataConsulta).replaceAll("-", "/")} com
                      a(o) Paciente: {consultaHoje?.Paciente?.nome} às{" "}
                      {(consultaHoje?.horaConsulta).replaceAll("-", ":")}.{" "}
                      <br />
                      Adicione o link da reunião online no espaço abaixo e
                      envie-o. <br />
                      <br />
                      <form onSubmit={handleUpdateLinkMeeting}>
                        <input
                          id="linkMeeting"
                          name="linkMeeting"
                          className="bg-blue-200 border border-blue-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-7  "
                          placeholder={
                            consultaHoje?.linkDoMeet ===
                            "Aguardando link do meet do psicologo"
                              ? "O paciente está aguardando o link da reunião..."
                              : `Link da reunião atual: ${consultaHoje?.linkDoMeet}`
                          }
                          required
                          onInvalid={(e) =>
                            e.target.setCustomValidity(
                              "Adicione o link para o paciente"
                            )
                          }
                          onInput={(e) => e.target.setCustomValidity("")}
                        ></input>{" "}
                        <button
                          type="submit"
                          className="text-white flex justify-content text-align-center bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                        >
                          Enviar
                        </button>
                      </form>
                      <br />
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
                      Você não tem consultas hoje. <br />
                      Logo um paciente agendará uma consulta com você.
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
                    fill="#fff"
                    d="M12 14l9-5-9-5-9 5 9 5z"
                  />
                  <path
                    fill="#fff"
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  />
                </svg>
              </div>
              <div>
                <span className="block text-2xl font-bold">
                  {String(othersInfo?.numerosDeConsultas)}
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
            <div className="row-span-3 bg-white shadow rounded-lg">
              <div className="flex items-center justify-between px-6 py-5 font-semibold border-b border-gray-100">
                <span>Próximas Consultas</span>
                <button
                  type="button"
                  className="inline-flex justify-center rounded-md px-1 -mr-1 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-600"
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
                  {/* esperar proximasConsultas carregar */}
                  {proximasConsultas.length > 0 ? (
                    proximasConsultas?.map((consulta) => {
                      return (
                        <li className="flex items-center">
                          <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                            <img
                              src="/no-photo.jpg"
                              alt="Norman Walters profile picture"
                            />
                          </div>
                          <span className="text-gray-600">
                            {consulta.Paciente.nome}
                          </span>
                          <span className="ml-auto font-semibold text-sm">
                            {consulta.dataConsulta.replaceAll("-", "/")}
                          </span>
                        </li>
                      );
                    })
                  ) : (
                    <div className="h-auto w-auto mr-3 bg-gray-100 overflow-hidden">
                      Nenhuma consulta marcada para os próximos dias.
                      <img
                        src="/loading.gif"
                        alt="Norman Walters profile picture"
                      />
                    </div>
                  )}
                </ul>
              </div>
            </div>
            {consultaHojeRender ? (
              <div className=" w-full max-w-sm p-4 bg-white border rounded-lg shadow-md sm:p-6 dark:bg-white dark:border-white">
                <h5 className="mb-3 text-base font-semibold text-gray-900 md:text-xl ">
                  Último Sentimento definido pelo paciente{" "}
                  {consultaHoje?.Paciente?.nome}
                </h5>

                <ul className="my-4 space-y-3 text-gray-400">
                  <li>
                    <span className="flex-1 ml-3 whitespace-nowrap">
                      {consultaHoje?.Paciente?.sentimentoPaciente}
                    </span>
                  </li>
                </ul>
              </div>
            ) : (
              <div className=" w-full max-w-sm p-4 bg-white border rounded-lg shadow-md sm:p-6 dark:bg-white dark:border-white">
                <h5 className="mb-3 text-base font-semibold text-gray-900 md:text-xl ">
                  Último Sentimento definido pelo paciente
                </h5>

                <ul className="my-4 space-y-3 text-gray-400">
                  <li>
                    <span className="flex-1 ml-3 whitespace-nowrap">
                      Não há consultas hoje
                    </span>
                  </li>
                </ul>
              </div>
            )}
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
