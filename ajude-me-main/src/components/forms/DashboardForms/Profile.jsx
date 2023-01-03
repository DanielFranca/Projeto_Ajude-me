import { useState, useEffect } from "react";
import * as Dialog from "@radix-ui/react-dialog";

import FormProfile from "./FormProfile";

// import RegisterForBeneficiario from "./RegisterForBeneficiario";
// import RegisterForPsicologos from "./RegisterForPsicologos";

export default function Profile({
  bottonText,
  styleBotton,
  nome,
  stats,
  tipo,
  moreInformation,
  input1,
  input2,
  input3,
}) {
  return (
    <Dialog.Root>
      <Dialog.Trigger className={styleBotton}>{bottonText}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
        <Dialog.Content className="fixed py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-4/5">
          <Dialog.Title></Dialog.Title>
          <FormProfile
            nome={nome}
            stats={stats}
            tipo={tipo}
            moreInformation={moreInformation}
            input1={input1}
            input2={input2}
            input3={input3}
          />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
