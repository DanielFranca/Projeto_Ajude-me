import { Link } from "react-scroll";
import * as Dialog from "@radix-ui/react-dialog";
import FormRegister from "../../forms/Register/Register";
import FormLogin from "../../forms/Login/Login";
import Home from "../../pages/Home";
export default function NavPrecisoDeAjuda() {
  return (
    <nav className="flex justify-around py-4 mx-auto bg-gray-900 mr-36">
      <div className="flex justify-start flex-col items-center"></div>
      <div className="items-center ">
        <h3 className=" font-halimum text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-fuchsia-400 to-blue-400 text-3xl">
          ajude.me
        </h3>
      </div>

      {/* <!-- left header section --> */}
      <div className="items-center hidden space-x-8 lg:flex font-semibold hover:cursor-pointer">
        <a
          href="/"
          className="hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-fuchsia-400 to-blue-400 transition duration-300 ease-in-out hover:font-bold text-white"
        >
          Pagina Inicial
        </a>
        <a
          href="/#consultas-voluntarias:~:text=Entenda-,Consultas%20volunt%C3%A1rias,-N%C3%B3s%20da%20ajude"
          className="hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-fuchsia-400 to-blue-400 transition duration-300 ease-in-out hover:font-bold text-white"
        >
          Consultas Voluntárias
        </a>
        <a
          href="/fazerBem"
          className="hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-fuchsia-400 to-blue-400 transition duration-300 ease-in-out hover:font-bold text-white"
        >
          Sobre fazer o bem
        </a>
      </div>
      {/* <!-- right header section --> */}
      <div className="flex items-center space-x-2">
        <FormLogin
          bottonText="Entrar"
          styleBotton="px-4 py-2 text-white bg-[#00AF7D] rounded-[64px] hover:bg-[#009269] transition duration-300 ease-in-out"
        />
        <FormRegister
          bottonText="Faça parte"
          styleBotton="px-4 py-2 text-gray-200 bg-gray-400 rounded-[64px] hover:bg-gray-500 transition duration-300 ease-in-out"
        />
      </div>
    </nav>
  );
}
