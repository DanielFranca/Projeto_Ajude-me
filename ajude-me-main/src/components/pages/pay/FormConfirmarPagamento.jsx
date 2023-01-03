import * as Dialog from "@radix-ui/react-dialog";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
export default function FormConfirmarPagamento({ styleBotton, bottonText }) {
  const navigate = useNavigate();
  function handleConfirmarPagamento() {
    axios
      .post("http://localhost:5000/api/v1/users/paciente/agendarConsulta", {
        idPsicologo: localStorage.getItem("idPsicologo"),
        idPaciente: localStorage.getItem("idPaciente"),
        dataConsulta: localStorage.getItem("dataConsulta"),
        horaConsulta: localStorage.getItem("horaConsulta"),
      })
      .then((response) => {
        toast.success("A sua consulta foi marcada com sucesso 😊", {
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
        localStorage.removeItem("idPsicologo");
        localStorage.removeItem("dataConsulta");
        localStorage.removeItem("horaConsulta");
        setTimeout(() => {
          navigate("/dashboardPaciente");
        }, 5000);
      })
      .catch((error) => {
        toast.warning(error.response.data.message, {
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
      });
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger
        type="button"
        onClick={handleConfirmarPagamento}
        className={styleBotton}
      >
        {bottonText}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
        <Dialog.Content className="fixed py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-4/5 ">
          <Dialog.Title></Dialog.Title>
          <div
            className="p-2 bg-indigo-800 items-center text-indigo-100  lg:rounded-full flex -mb-96 "
            role="alert"
          >
            <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3 ">
              New
            </span>
            <span className="font-semibold mr-2 text-left flex-auto">
              Pagamento Efetuado com sucesso!
            </span>
            <a
              href="/dashboardPaciente"
              type="button"
            >
              <svg
                className="fill-current opacity-75 h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
              </svg>
            </a>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
