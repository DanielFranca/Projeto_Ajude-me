export default function SectionImpactoSocialMain() {
  return (
    <section>
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
        <div className="flex flex-wrap items-center mx-auto max-w-7xl">
          <div className="w-full lg:max-w-lg lg:w-1/2 rounded-xl">
            <div>
              <div className="relative w-full max-w-lg">
                <div className="absolute top-0 rounded-full text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-fuchsia-800 to-rose-400 -left-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
                <div className="absolute rounded-full bg-fuchsia-300 -bottom-24 right-20 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
                <div className="relative">
                  <img
                    className="object-cover object-center mx-auto rounded-lg shadow-2xl"
                    alt="hero"
                    src="/src/assets/Group Chat-amico.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0">
            <span className="mb-8 text-xs font-bold tracking-widest text-blue-600 uppercase">
              {" "}
              O impacto social da ajude.me{" "}
            </span>
            <h1 className="mb-8 text-4xl font-bold leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-fuchsia-400 to-blue-400 md:text-7xl lg:text-5xl">
              A ajude.me nasceu para inovar, nasceu para unir, nasceu para
              impactar
            </h1>
            <p className="mb-8 text-base leading-relaxed text-left text-gray-500">
              A ajude.me conta hoje com uma plataforma capaz de ajudar a
              impulsionar o movimento para o cuidado da saúde mental, unir
              pessoas com um só propósito "Um mundo melhor". Entenda como
              impactamos o mundo.
            </p>
            <div className="mt-0 lg:mt-6 max-w-7xl sm:flex">
              <div className="mt-3 rounded-lg sm:mt-0">
                <a
                  href="/impactoSocial"
                  className="hover:bg-gradient-to-r from-purple-500 via-fuchsia-400 to-blue-400 items-center block px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Confira!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
