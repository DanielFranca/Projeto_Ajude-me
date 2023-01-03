import FormRegister from "../forms/Register/Register";

export default function SectionComoSeTornarVoluntario() {
  return (
    <div className="py-16">
      <div className="container m-auto px-6 rounded-lg shadow-2xl">
        <div className="lg:flex justify-between items-center">
          <div className="lg:w-6/12 lg:p-0 p-7">
            <h1 className=" -mt-5 text-5xl font-bold leading-tight mb-5 capitalize text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-300 to-red-600">
              {" "}
              Como se tornar um voluntário?{" "}
            </h1>
            <p className="text-1xl text-white font-bold ">
              {" "}
              Ajude.me nasceu com a forte intenção de viabilizar que as pessoas
              de baixa renda possam ter assistência psicológica, o que vem
              crescendo ao longo do tempo. A causa, necessita de PSICÓLOGOS em
              formação ou até mesmo aquele que já tenham concluído a graduação,
              caso você tenha o interesse em se voluntariar e ajudar está causa
              nome, deixe seus dados à seguir.{" "}
            </p>
            <div className="py-5">
              <FormRegister
                bottonText="Seja um voluntário"
                styleBotton="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
              />
            </div>
          </div>
          <div className="lg:w-5/12 order-2">
            <img
              src="/src/assets/world-childrens-day-animate.svg"
              style={{
                transform:
                  "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
              }}
              alt=""
              className="rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
