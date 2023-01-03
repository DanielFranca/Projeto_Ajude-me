import { useState, useEffect } from "react";
import * as Dialog from "@radix-ui/react-dialog";

import FormHistoricoConsulta from "./FormHistoricoConsulta";

// import RegisterForBeneficiario from "./RegisterForBeneficiario";
// import RegisterForPsicologos from "./RegisterForPsicologos";

export default function HistoricoConsulta({
  bottonText,
  styleBotton,
  userBeneficiado,
}) {
  return (
    <Dialog.Root>
      <Dialog.Trigger className={styleBotton}>
        <span className="block text-gray-500"></span>
        {bottonText}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
        <Dialog.Content className="fixed py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-4/5">
          <Dialog.Title></Dialog.Title>
          <FormHistoricoConsulta userBeneficiado={userBeneficiado} />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
