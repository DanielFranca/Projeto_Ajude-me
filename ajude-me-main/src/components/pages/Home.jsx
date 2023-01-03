import Footer from "../layout/Footer";
import NavHome from "../layout/nav/NavHome";
import Section from "../layout/SectionMain";
import SectionPrecisoDeAjudaMain from "../layout/SectionPrecisoDeAjudaMain";
import ConsultasVoluntarias from "./ConsultasVoluntarias";
import SectionSingularidadeMain from "../layout/SectionSingularidadeMain";
import SectionImpactoSocialMain from "../layout/SectionImpactoSocialMain";
import SectionFazerBemMain from "../layout/SectionFazerBemMain";
import SectionComoSeTornarVoluntario from "../layout/SectionComoSeTornarVoluntario";
import SectionInovacaoMain from "../layout/SectionInovacaoMain";

export default function Home() {
  return (
    <div>
      <NavHome />
      <Section />
      <SectionPrecisoDeAjudaMain />
      <SectionSingularidadeMain />
      <SectionImpactoSocialMain />
      <ConsultasVoluntarias />
      <SectionFazerBemMain />
      <SectionComoSeTornarVoluntario />
      <SectionInovacaoMain />
      <Footer />
    </div>
  );
}
