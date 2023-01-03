import { useState, useEffect } from "react";
import * as Dialog from "@radix-ui/react-dialog";

import FormCancelarConsulta from "./FormCancelarConsulta";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import RegisterForBeneficiario from "./RegisterForBeneficiario";
// import RegisterForPsicologos from "./RegisterForPsicologos";

export default function CancelarConsulta({
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
          className="flex-shrink-0 h-5 w-5 -ml-1 mt-0.5 mr-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z"
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
        <Dialog.Content className="fixed py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-4/5">
          <Dialog.Title></Dialog.Title>
          <FormCancelarConsulta userBeneficiado={userBeneficiado} />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
