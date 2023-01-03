import * as Dialog from "@radix-ui/react-dialog";
import { ToastContainer, toast } from "react-toastify";

import axios from "axios";

//import toast.css
import "react-toastify/dist/ReactToastify.css";

export default function RegisterForBeneficiario({
  handleBottonClickMain,
  handleBottonClickPsicologo,
}) {
  function handleSubmitBeneficiario(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    // console.log("DADOS DO FORMULARIO BENEFICIARIO");
    // console.log(data);

    try {
      axios
        .post("http://localhost:5000/api/v1/auth/registerPacienteBeneficiado", {
          email: data.email,
          password: data.password,
          nome: data.nome,
          cpf: data.cpf,
          nis: data.nis,
          // {
          //   "email": "email@gmail.com",
          //   "password": "ajudeme@",
          //   "nome": "Giovanni Souza",
          //   "cpf": "445.108.545-47",
          //   "nis": "47515"
          // }
        })
        .then((response) => {
          toast.success("O seu cadastro foi realizado com sucesso 😊", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          // console.log(response);
        })
        .catch((error) => {
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
          // console.log(error.response);
          // console.log(error.response.data.message);
        });
    } catch (error) {
      toast.warn(
        "O nosso sistema está em manutenção, tente novamento mais tarde!",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        }
      );
      // console.log(error);
    }
  }
  return (
    <form onSubmit={handleSubmitBeneficiario}>
      <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden">
        <div className="md:flex w-full">
          <div className="hidden md:block w-1/2 bg-[#8D358E] py-10 px-10 items-center justify-center">
            <figure>
              <img
                src="/registroPrincipal.gif"
                alt="gif"
                title="gif"
              />
            </figure>
          </div>
          <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
            <Dialog.Close
              onClick={handleBottonClickMain}
              className="float-right bg-gray-100 cursor-pointer -mt-7 -mr-6 rounded-full w-7 h-7 flex items-center justify-center text-gray-500 hover:bg-gray-200"
            >
              X
            </Dialog.Close>
            <div className="text-center mb-10">
              <h1 className="font-bold text-3xl text-gray-900">
                Faça parte como paciente beneficiado
              </h1>
              <p className="mt-3 lg:hidden max-[1023px]:hidden sm:block">
                Cadastre-se como:
              </p>
            </div>
            <div className="grid gap-4 grid-cols-2 lg:hidden max-[1023px]:hidden sm:grid">
              <button
                type="button"
                onClick={handleBottonClickPsicologo}
                className="w-auto px-4 py-2 text-white bg-gray-400 rounded-lg h-auto font-semibold text-center text-sm bg-gradient-to-r from-purple-500 via-fuchsia-400 to-blue-400 hover:from-purple-600 hover:via-fuchsia-600 hover:to-blue-600"
              >
                PSICÓLOGOS
              </button>
              <button
                type="button"
                onClick={handleBottonClickMain}
                className="w-full px-4 py-1 text-white bg-gray-400 rounded-lg h-auto font-semibold text-center text-sm bg-gradient-to-r from-purple-500 via-fuchsia-400 to-blue-400 hover:from-purple-600 hover:via-fuchsia-600 hover:to-blue-500"
              >
                PACIENTE
              </button>
            </div>
            <div>
              <div className="-mx-3">
                <div className="w-full px-3 mb-3">
                  <label
                    htmlFor="name"
                    className="text-xs font-semibold px-1"
                  >
                    Nome
                  </label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                    </div>
                    <input
                      type="text"
                      name="nome"
                      id="nome"
                      className="w-full -ml-10 pl-2 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="Nome completo"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="flex -mx-3">
                <div className="w-1/2 px-3 mb-3">
                  <label className="text-xs font-semibold px-1">CPF</label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                    </div>
                    <input
                      type="text"
                      name="cpf"
                      pattern="(\d{3}\.?\d{3}\.?\d{3}-?\d{2})|(\d{2}\.?\d{3}\.?\d{3}/?\d{4}-?\d{2})"
                      className="w-full -ml-10 pl-2 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="informe seu CPF"
                      required
                    />
                  </div>
                </div>
                <div className="w-1/2 px-3 mb-3">
                  <label className="text-xs font-semibold px-1">NIS</label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                    </div>
                    <input
                      type="number"
                      name="nis"
                      className="w-full -ml-10 pl-2 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="informe seu NIS"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="flex -mx-3">
                <div className="w-full px-3 mb-3">
                  <label
                    htmlFor="email"
                    className="text-xs font-semibold px-1"
                  >
                    Email
                  </label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
                    </div>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="w-full -ml-10 pl-2 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="ajudeme@exemplo.com"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="flex -mx-3">
                <div className="w-full px-3 mb-4">
                  <label
                    htmlFor="password"
                    className="text-xs font-semibold px-1"
                  >
                    Senha
                  </label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                    </div>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="new-password"
                      className="w-full -ml-10 pl-2 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="************"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="flex -mx-3">
                <div className="w-full px-3 mb-3">
                  <button
                    type="submit"
                    className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
                  >
                    REGISTRAR
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
