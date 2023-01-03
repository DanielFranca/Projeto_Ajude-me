import { useState, useEffect } from "react";
import * as Dialog from "@radix-ui/react-dialog";

import FormVencimentoBeneficio from "./FormVencimentoBeneficio";
import FormBeneficioRenovado from "./FormBeneficioRenovado";

// import RegisterForBeneficiario from "./RegisterForBeneficiario";
// import RegisterForPsicologos from "./RegisterForPsicologos";

export default function VencimentoBeneficio({
  bottonText,
  styleBotton,
  dataVencimentoBeneficio,
}) {
  return (
    <Dialog.Root>
      <Dialog.Trigger className={styleBotton}>
        <span className="block text-gray-500"></span>
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
            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
          />
        </svg>
        {bottonText}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
        <Dialog.Content className="fixed py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-4/5">
          <Dialog.Title></Dialog.Title>
          <FormVencimentoBeneficio
            dataVencimentoBeneficio={dataVencimentoBeneficio}
          />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
