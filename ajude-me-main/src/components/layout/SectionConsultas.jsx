import Carousel from "./Carousel";
import { SliderData } from "../layout/SliderData";

export default function ConsultasVoluntarias() {
  return (
    <section className="min-h-screen bg-gray-900 pb-10">
      <h4
        id="consultas-voluntarias"
        className="  mt-0 flex justify-center mb-2 pt-24 align-baseline text-left text-6xl font-bold xl:text-5xl leading-[1.2] font-[Manrope,_sans-serif] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-fuchsia-400 to-blue-400"
      >
        Consultas voluntárias
      </h4>
      <div className="txt">
        <p className=" rounded-[80px] shadow-3xl mt-10 mb-5 mx-52 align-baseline text-left font-medium leading-normal text-white font-[Manrope,_sans-serif]">
          Nós da ajude.me contamos com a atuação de psicologos voluntários, que
          dão apoio, conforto e orientação a pacientes de baixa renda atendidos
          nas diferentes áreas da psicologia. Seguindo as normas legislativas
          que são impostas aos mesmos relacionadas a esse tipo de serviço. É
          necessario ressaltar que não há impedimento na legislação profissional
          em prestar serviços psicológicos de forma voluntária/gratuita.
          Contudo, não deverá haver referências a valores na divulgação do
          serviço. Caso se trate de uma gratuidade, esta informação deverá ser
          disponibilizada individualmente. Ressalta-se, ainda, que as(os)
          profissionais devem ter uma proposta de trabalho com início, meio e
          fim, ou que garanta a gratuidade por todo o período da prestação do
          serviço. Salienta-se que deve haver o compromisso profissional
          estabelecido, com direitos e obrigações, como em qualquer outra
          situação de sua prática.
        </p>
        <p className="mt-10 mb-5 mx-52 align-baseline text-left font-medium leading-normal text-white font-[Manrope,_sans-serif]">
          Portanto, é necessário atentar aos preceitos do Código de Ética
          Profissional do Psicólogo e demais normativas do Sistema Conselhos de
          Psicologia do Brasil, destacando-se:
        </p>
        <Carousel slides={SliderData} />
      </div>
    </section>
  );
}
