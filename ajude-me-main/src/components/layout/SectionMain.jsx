import { Link } from "react-scroll";
export default function Section() {
  return (
    <section className="bg-gray-900 -mt-12">
      <div className="grid max-w-screen-xl px-4 py-6 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 mb-16">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="mt-0 mb-2 pt-8 align-baseline text-6xl font-bold xl:text-5xl leading-[1.2] font-[Manrope,_sans-serif] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-fuchsia-400 to-blue-400">
            Psicólogos e terapia <br />
            online para todos
          </h1>
          <div className="txt">
            <p className="mt-0 mb-5 align-baseline text-2xl font-medium leading-normal text-white font-[Manrope,_sans-serif]">
              A inteligência é o único meio <br />
              que possuímos para dominar os
              <br />
              nossos instintos. <br />O pensamento é o ensaio da ação.
            </p>
            <Link
              activeclassName="active"
              to="preciso-de-ajuda"
              spy={true}
              smooth={true}
              // offset={-70}
              duration={900}
            >
              <button className="px-4 py-2 text-gray-200 bg-gray-400 rounded-[64px] w-48 h-16 font-bold text-center text-2xl bg-gradient-to-r from-purple-500 via-fuchsia-400 to-blue-400 hover:from-purple-600 hover:via-fuchsia-600 hover:to-blue-600">
                Entenda
              </button>
            </Link>
          </div>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img
            // className="mx-[100px] mt-2 rounded-[80px] shadow-2xl"
            src="/terapiaPrincipal.gif"
            alt="gif"
            title="gif"
          />
        </div>
      </div>
    </section>
  );
}
