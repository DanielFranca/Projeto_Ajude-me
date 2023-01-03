import { useState, useEffect } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import LoginForBeneficiario from "./LoginForBeneficiario";
import LoginForPsicologo from "./LoginForPsicologo";
import LoginMain from "./LoginMain";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import RegisterForBeneficiario from "./RegisterForBeneficiario";
// import RegisterForPsicologos from "./RegisterForPsicologos";

export default function LoginForm({ bottonText, styleBotton }) {
  const [userPsicologo, setUserPsicologo] = useState(false);
  const [userBeneficiario, setUserBeneficiario] = useState(false);
  const [userMain, setUserMain] = useState(true);

  function handleBottonClickPsicologo() {
    setUserPsicologo(true);
    setUserMain(false);
    setUserBeneficiario(false);
  }

  useEffect(() => {
    // console.log("O usuário é psicologo? ", userPsicologo);
  }, [userPsicologo]);

  function handleBottonClickBeneficiario() {
    setUserBeneficiario(true);
    setUserMain(false);
    setUserPsicologo(false);
  }

  useEffect(() => {
    // console.log("O usuário é beneficiario? ", userBeneficiario);
  }, [userBeneficiario]);

  function handleBottonClickMain() {
    setUserMain(true);
    setUserBeneficiario(false);
    setUserPsicologo(false);
  }

  useEffect(() => {
    // console.log("O usuário é paciente? ", userMain);
  }, [userMain]);

  return (
    <Dialog.Root>
      <Dialog.Trigger className={styleBotton}>{bottonText}</Dialog.Trigger>
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
          {userMain && (
            <LoginMain
              handleBottonClickPsicologo={handleBottonClickPsicologo}
              handleBottonClickBeneficiario={handleBottonClickBeneficiario}
            />
          )}
          {userPsicologo && (
            <LoginForPsicologo
              handleBottonClickMain={handleBottonClickMain}
              handleBottonClickBeneficiario={handleBottonClickBeneficiario}
            />
          )}
          {userBeneficiario && (
            <LoginForBeneficiario
              handleBottonClickMain={handleBottonClickMain}
              handleBottonClickPsicologo={handleBottonClickPsicologo}
            />
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
    // abrir o formulario de psicologo se o usuario clicar em psicologo
  );
}
