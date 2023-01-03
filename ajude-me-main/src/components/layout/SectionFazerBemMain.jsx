export default function SectionImpactoSocial() {
  return (
    <section>
      <div className="2xl:max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24 2xl:px-12 px-4 py-12 mx-auto ">
        <div className="2xl:max-w-7xl flex flex-wrap items-center mx-auto rounded-xl shadow-2xl ">
          <div className="lg:flex-grow lg:w-1/2 lg:pr-24 md:mb-0 flex flex-col items-start mb-16 text-left ">
            <h1>
              <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-green-400 to-blue-400  md:text-7xl lg:text-5xl mb-8 text-4xl font-bold leading-none tracking-tighter">
                De que forma fazemos o bem?
              </h1>
            </h1>
            <p className="mb-8 text-base leading-relaxed text-left text-white">
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}>
                  Como já vimos anteriormente, a ajude.me está determinada e
                  compromisada a inovar, transformar, ser singular, e também
                  está pronta para fazer o bem. A ajude.me tem como meta, poder
                  cultivar a cultura de ajudar o próximo, quando um Psicólogo se
                  torna um voluntário, a ajude.me chegou 0.0001% mais próxima do
                  seu objetivo. Fazer um bem irá se tornar um valor cultural em
                  nossa socidade, a ajude.me vai ajudar a sementear o bem do
                  amanhã!
                </font>
              </font>
            </p>
            <div className="mt-3 rounded-lg sm:mt-0">
              <a
                href="/fazerBem"
                className="bg-gradient-to-r from-green-300 via-green-400 to-blue-400 hover:green-200 items-center block px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Entenda e plante sua semente do bem!
              </a>
            </div>
            <div className="sm:max-w-lg sm:flex">
              <p className="mt-3 text-xs text-gray-500">
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}>
                    Ao clicar no botão você concorda em
                  </font>
                </font>
                <a
                  target="_blank"
                  href="https://www.getrevue.co/terms"
                >
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>
                      {" "}
                      fazer o bem.
                    </font>
                  </font>
                </a>
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}> </font>
                </font>
                <a
                  target="_blank"
                  href="https://www.getrevue.co/privacy"
                >
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>
                      Clique e veja mais.
                    </font>
                  </font>
                </a>
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}> Ajude.me</font>
                </font>
              </p>
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
                    src="/src/assets/Solidarity-bro.svg"
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
