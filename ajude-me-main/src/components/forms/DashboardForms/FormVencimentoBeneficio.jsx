import RegisterForm from "../Register/Register";
import RegisterForBeneficiario from "../Register/RegisterForBeneficiario";
import FormBeneficioRenovado from "./FormBeneficioRenovado";

export default function FormVencimentoBeneficio({ dataVencimentoBeneficio }) {
  return (
    <div className="p-4 w-full max-w-sm bg-white rounded-lg border shadow-md sm:p-6 dark:bg-gray-800 dark:border-gray-700">
      <h5 className="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
        Benefício com Vencimento em{" "}
        {dataVencimentoBeneficio.replaceAll("-", "/")}.
      </h5>
      <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
        Você pode renovar seu benefício quando vencer. Mas pode se tornar um
        cliente, a qualquer momento.
      </p>

      <FormBeneficioRenovado
        bottonText="Renovar Benefício."
        styleBotton="flex items-center p-3 text-base font-bold  bg-gray-50 rounded-lg  group hover:shadow dark:bg-gray-600 hover:bg-yellow-400 text-white mb-2 mt-2 w-[100%]"
      />

      <RegisterForm
        bottonText="Você já pode se tornar um cliente. É só fazer login como paciente não beneficiário."
        styleBotton="flex items-center p-3 text-base font-bold  bg-gray-50 rounded-lg  group hover:shadow dark:bg-gray-600 hover:bg-green-400 text-white "
      />

      <div>
        <a
          href="/precisoDeAjuda"
          className="inline-flex items-center text-xs font-normal text-gray-500 hover:underline dark:text-gray-400"
        >
          Atenção: qualquer tentativa de renovação fraudalenta, a conta será
          cancelada imediatamente. Leia as diretrizes.
        </a>
      </div>
    </div>
  );
}
