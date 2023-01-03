import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import DateTimePicker from "react-datetime-picker/dist/entry.nostyle";
import * as Dialog from "@radix-ui/react-dialog";
// import "react-calendar/dist/Calendar.css";
import "./CSS/DateTimePicker.css";
import "./CSS/Calendar.css";
import "./CSS/Clock.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function FormAgendaConsulta({ userBeneficiado }) {
  const [value, onChange] = useState(new Date());
  const navigate = useNavigate();

  const [termos, setTermos] = useState(false);
  useEffect(() => {
    // console.log("O termo foi aceito? ", termos);
  }, [termos]);

  const beneficado = userBeneficiado;
  // console.log("O beneficiado é: ", beneficado);

  const [psicologos, setPsicologos] = useState("");
  useEffect(() => {
    axios("http://localhost:5000/api/v1/users/psicologos").then((response) => {
      setPsicologos(response.data);
      // console.log(response.data);
      // console.log(psicologos);
    });
  }, []);

  function handleMarcarConsultaSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const idPsicologo = data.psicologoID;
    const dataConsulta = data.day + "-" + data.month + "-" + data.year;
    const horaConsulta = data.hour24 + "-" + "00";
    // console.log("CONSULTA MARCADA");
    // console.log(idPsicologo);
    // console.log(dataConsulta);
    // console.log(horaConsulta);
    localStorage.setItem("idPsicologo", idPsicologo);
    localStorage.setItem("dataConsulta", dataConsulta);
    localStorage.setItem("horaConsulta", horaConsulta);

    axios
      .get(
        `http://localhost:5000/api/v1/users/psicologo/agenda/${idPsicologo}/${dataConsulta}/${horaConsulta}/`
      )
      .then((response) => {
        toast.success(
          "O psicólogo(a) escolhido(a) está com o horario disponivel 😊",
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
        // console.log(response);

        {
          userBeneficiado
            ? axios
                .post(
                  "http://localhost:5000/api/v1/users/pacienteBeneficiado/agendarConsulta",
                  {
                    idPsicologo: localStorage.getItem("idPsicologo"),
                    idPacienteBeneficiado: localStorage.getItem(
                      "idPacienteBeneficiado"
                    ),
                    dataConsulta: localStorage.getItem("dataConsulta"),
                    horaConsulta: localStorage.getItem("horaConsulta"),
                  }
                )
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
                    document.location.reload();
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
                })
            : setTimeout(() => {
                navigate("/pagamentoConsulta");
              }, 5000);
        }
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
    <form
      onSubmit={handleMarcarConsultaSubmit}
      className="mt-8 flex flex-col gap-4"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="horario">Horário</label>
        <DateTimePicker
          id="consultaDataHorario"
          name="consultaDataHorario"
          onChange={onChange}
          value={value}
          className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500 appearance-none"
          //limitar para ele poder escolher uma data a partir de hoje
          minDate={new Date()}
          disableClock={true}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="psicologoConsulta"
          className="font-semibold"
        >
          Psicólogo(a)s
        </label>
        <select
          name="psicologoID"
          id="psicologoID"
          className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500 appearance-none"
          defaultValue=""
          required
        >
          <option
            disabled
            value=""
          >
            escolha o Psicólogo(a) que deseja marcar a consulta
          </option>
          {/* //  {games.map(game => {
                  return <option key={game.id} value={game.id}>{game.title}</option>
                })} 
                usar para fazer o map dos psicologos
                */}
          {psicologos?.psicologos?.map((psicologo) => {
            return (
              <option
                key={psicologo.id}
                value={psicologo.id}
              >
                {psicologo.nome} | Valor da consulta: R$
                {psicologo.valorPorConsulta}
              </option>
            );
          })}
        </select>
      </div>

      <div className="mt-2 flex gap-2 text-xs">
        <input
          type="checkbox"
          onClick={() => setTermos(!termos)}
        />
        Aceito os termos de uso e política de privacidade ao realizar o
        agendamento.
      </div>

      <footer className="mt-4 flex justify-end gap-4">
        <Dialog.Close
          type="button"
          className="bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600"
        >
          Cancelar
        </Dialog.Close>

        {termos ? (
          <button
            className="bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600"
            type="submit"
          >
            Marcar consulta
          </button>
        ) : (
          <button
            className="bg-red-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-red-600"
            type="submit"
            disabled
          >
            Marcar consulta
          </button>
        )}
      </footer>
    </form>
  );
}
