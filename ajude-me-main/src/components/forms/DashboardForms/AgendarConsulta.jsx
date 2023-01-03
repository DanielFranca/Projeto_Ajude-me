import * as Dialog from "@radix-ui/react-dialog";
import FormAgendaConsulta from "./FormAgendaConsulta";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function AgendarConsulta({
  bottonText,
  styleBotton,
  userBeneficiado,
}) {
  return (
    <Dialog.Root>
      <Dialog.Trigger className={styleBotton}>
        <svg
          aria-hidden="true"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="flex-shrink-0 h-6 w-6 text-white -ml-1 mr-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
        {bottonText}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25">
          <Dialog.Title className="text-3xl font-black">
            Marque uma Consulta
          </Dialog.Title>
          <FormAgendaConsulta userBeneficiado={userBeneficiado} />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
