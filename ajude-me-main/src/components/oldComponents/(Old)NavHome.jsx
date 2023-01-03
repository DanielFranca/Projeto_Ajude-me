import { Link } from "react-router-dom";
import * as Dialog from "@radix-ui/react-dialog";
export default function NavHome() {
  return (
    // <nav>
    //   <ul classNameName="flex justify-between space-x-4">
    //     <li>Consultas Voluntárias</li>
    //     <li>Sobre fazer o bem</li>
    //     <li>+Açoes</li>
    //   </ul>
    // </nav>

    <nav className="flex justify-around py-4 mx-auto bg-white">
      <div className="flex justify-start flex-col items-center">
        <img
          src="/LogoSemFundoRoxa.png"
          align="left"
        />
      </div>
      {/* <!-- left header section --> */}
      <div className="items-center hidden space-x-8 lg:flex font-semibold">
        <Link to="/">Pagina Inicial</Link>
        <Link to="/consultasVoluntarias">Consultas Voluntárias</Link>
        <Link to="/fazBem">Sobre fazer o bem</Link>
        <Link to="/acoes">+Ações</Link>
      </div>
      {/* <!-- right header section --> */}
      <div className="flex items-center space-x-2">
        <Link
          className="px-4 py-2 text-white bg-[#00AF7D] rounded-[64px]"
          to="/enter"
        >
          Entrar
        </Link>

        <Link
          className="px-4 py-2 text-gray-200 bg-gray-400 rounded-[64px]"
          to="/register"
        >
          Faça parte
        </Link>
      </div>
    </nav>
  );
}
