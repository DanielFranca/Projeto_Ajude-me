import { useState, useEffect } from "react";
import FormRegister from "../forms/Register/Register";

export default function SectionPrecisoDeAjudaPage() {
  const [opacity, setOpacity] = useState(false);
  function handleOpacity() {
    setOpacity(false);
  }

  useEffect(() => {
    // console.log("Opacidade está: ", opacity);
  }, [opacity]);
  return (
    <section className="min-h-screen dark:bg-gray-900 ">
      <div>
        <h1 className="max-w-2xl pt-12  mb-12 text-4xl ml-32 center font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
          Como funciona o benefício Ajude-me?
        </h1>
      </div>
      <p className=" ml-32 mt-12 dark:text-white w-[40%]">
        Acreditamos que com empatia, podemos ter um papel fundamental para
        ajudar alguém. A procura pelo auxílio de um psicólogo pode se dar pelos
        mais diversos motivos que vão desde problemas emergenciais muito bem
        focalizados, orientações e esclarecimentos, dificuldades existenciais ou
        mesmo pela busca de autoconhecimento. Quanto mais cedo se procura por
        ajuda, mais cedo se diagnostica e se trata o problema. Por isso, criamos
        o modelo de ‘paciente beneficiado’, onde damos a oportunidade de pessoas
        que não tem condições financeiras terem acesso a um atendimento
        psicológico de muita qualidade e 100% gratuito. Nós da AJUDA-ME queremos
        que você domine todos os seus medos e inseguranças com a ajuda de
        profissionais experientes, mesmo que, neste momento, você esteja
        passando por grandes problemas. E aqui você irá poder ser realmente
        feliz, ter uma vida melhor e poder superar os seus desafios de forma
        tranquila.
      </p>
      <div
        className="w-96 "
        style={{ scrollSnapType: "x mandatory" }}
      >
        <div className="">
          <input
            className="sr-only peer"
            type="radio"
            name="carousel"
            id="carousel-1"
            defaultChecked=""
          />

          <div className=" mt-16 w-96 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg transition-all duration-300 opacity-100 peer-checked:opacity-100 peer-checked:z-10 z-0 ml-80">
            <img
              className="rounded-t-lg w-96 h-64"
              src="/src/assets/nis.svg"
              alt=""
            />
            <div className="py-4 px-8">
              <h1 className="hover:cursor-pointer mt-2 text-gray-900 font-bold text-2xl tracking-tight">
                Veja alguns passos do que fazer para solicitar o benefício:
              </h1>
              <p className="hover:cursor-pointer py-3 text-gray-600 leading-6">
                1. Você precisa ter um NIS (Número de Identificação Social) que
                permite identificar se você faz parte de algum programa de
                benefício social federal.
              </p>
            </div>

            <div className="absolute top-1/2 w-full flex justify-between z-20">
              <label
                htmlFor="carousel-3"
                className="inline-block text-red-600 cursor-pointer -translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
              <label
                htmlFor="carousel-2"
                className="inline-block text-red-600 cursor-pointer translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
            </div>
          </div>
        </div>

        <div className="">
          <input
            className="sr-only peer"
            type="radio"
            name="carousel"
            id="carousel-2"
          />

          <div className="w-96 mt-16 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg transition-all duration-300 opacity-0 peer-checked:opacity-100 peer-checked:z-10 z-0 ml-80">
            <img
              className="rounded-t-lg w-96 h-64"
              src="/src/assets/cad2.svg"
              alt=""
            />
            <div className="py-4 px-8">
              <h1 className="hover:cursor-pointer mt-2 text-gray-900 font-bold text-2xl tracking-tight">
                2. Cadastre-se na plataforma como paciente beneficiário.
              </h1>
              <p className="hover:cursor-pointer py-3 text-gray-600 leading-6">
                Cuidado ao se cadastrar, você precisa se cadastrar como cliente
                beneficiário, caso ao contrário você irá pagar normalmente pelas
                consultas.
              </p>
            </div>

            <div className="absolute top-1/2 w-full flex justify-between z-20">
              <label
                htmlFor="carousel-1"
                className="inline-block text-blue-600 cursor-pointer -translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5"
              >
                <svg
                  xmlns=""
                  className="h-10 w-10"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
              <label
                htmlFor="carousel-3"
                className="inline-block text-blue-600 cursor-pointer translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
            </div>
          </div>
        </div>

        <div className="">
          <input
            className="sr-only peer"
            type="radio"
            name="carousel"
            id="carousel-3"
          />

          <div
            className={`mt-16 w-96 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg transition-all duration-300 opacity-0 peer-checked:opacity-100 ${
              opacity ? "peer-checked:z-10" : ""
            } z-0 ml-80`}
          >
            <img
              className="rounded-t-lg w-96 h-64"
              src="/src/assets/card3.svg"
              alt=""
            />
            <div className="py-4 px-8">
              <h1 className="hover:cursor-pointer mt-2 text-gray-900 font-bold text-2xl tracking-tight">
                Pronto!
              </h1>
              <p className="hover:cursor-pointer py-3 text-gray-600 leading-6">
                Depois de se cadastrar é só aproveitar nossa plataforma
                agendando consultas que serão arcadas pela ajude-me durante 1
                ano, até a próxima verificação de benefício que será uma
                renovação de cadastro.
              </p>
              <FormRegister
                bottonText="Cadastre-se"
                styleBotton="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              />
            </div>

            <div className="absolute top-1/2 w-full flex justify-between z-20">
              <label
                htmlFor="carousel-2"
                className="inline-block text-yellow-600 cursor-pointer -translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
              <label
                htmlFor="carousel-1"
                className="inline-block text-yellow-600 cursor-pointer translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
