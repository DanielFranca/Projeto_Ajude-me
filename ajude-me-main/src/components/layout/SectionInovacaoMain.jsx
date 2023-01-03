export default function SectionInovacaoMain() {
  return (
    <section>
      <div className="2xl:max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24 2xl:px-12 px-4 py-12 mx-auto ">
        <div className="2xl:max-w-7xl flex flex-wrap items-center mx-auto rounded-4xl shadow-4xl ">
          <div className="lg:flex-grow lg:w-1/2 lg:pr-24 md:mb-0 flex flex-col items-start mb-16 text-left ">
            <h1 className=" text-yellow-400 md:text-7xl lg:text-5xl mb-8 text-5xl font-bold leading-none tracking-tighter">
              De que forma inovamos?
            </h1>

            <div className="mt-10 mb-8 text-base leading-relaxed text-left text-white">
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}>
                  A ajude.me inova em experiência do usuário, com recursos
                  totalmente diferenciados para o usuário ter uma experiência
                  totalemnte inovadora. Além disso, a ajude.me está em constante
                  desenvolvimento, procurando se aperfoiçoar em cada detalhe da
                  plataforma. A ajude.me é diferente, ajude.me nasceu para
                  inovar e transformar. Fique ligado nas próximas atualizações
                  por aqui e faça um bom proveito!
                </font>
              </font>
            </div>
          </div>
          <div className="lg:w-5/6 lg:max-w-lg rounded-xl xl:mt-0 w-full mt-12">
            <div>
              <div className="relative w-full max-w-lg">
                <div className="bg-violet-300 -left-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob absolute top-0 rounded-full" />
                <div className="bg-fuchsia-300 -bottom-24 right-20 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 absolute rounded-full" />
                <div className="relative">
                  <img
                    className="imagemSolidariedade"
                    alt=""
                    src="/src/assets/Virtual reality-amico.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
