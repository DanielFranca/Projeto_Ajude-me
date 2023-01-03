import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function CommentForm({ tipoUsuario, idUsuario }) {
  function commentFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    // console.log("SENTIMENTO ADICIONADO");
    // console.log(data);

    axios
      .put(
        `http://localhost:5000/api/v1/users/${tipoUsuario}/alterarSentimento/${idUsuario}`,
        data
      )
      .then((response) => {
        // console.log(response);
        toast.success("O seu sentimento foi atualizado."),
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          };
      })
      .catch((error) => {
        // console.log(error.response.data.message);
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
      });
  }
  return (
    <form onSubmit={commentFormSubmit}>
      <textarea
        className="block px-0 w-full text-sm border-0 text-gray-400 font-semibold bg-gray-100 border-gray-200 border-dashed rounded-md caret-purple-500 focus:outline-[#9333ea] focus:ring-0"
        id="sentimentoPaciente"
        name="sentimentoPaciente"
        rows="8"
        placeholder="Estou me sentindo..."
        required
      ></textarea>
      <div className="mt-2 flex flex-col items-center">
        <button
          type="submit"
          className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-[#9333ea] rounded-lg hover:bg-[#7e09ec]"
        >
          Adicionar sentimento
        </button>
      </div>
    </form>
  );
}
