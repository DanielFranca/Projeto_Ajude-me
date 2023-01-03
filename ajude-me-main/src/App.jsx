import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./components/pages/Home";

import "./styles/main.css";
import Container from "./components/layout/Container";
import DashboardPaciente from "./components/pages/DashboardPaciente";
import ImpactoSocial from "./components/pages/ImpactoSocial";
import FazerBem from "./components/pages/FazerBem";
import DashboardPacienteBeneficiado from "./components/pages/DashboardPacienteBeneficiado";
import DashboardPsicologo from "./components/pages/DashboardPsicologo";
import SobreNos from "./components/pages/SobreNos";
import Singularidade from "./components/pages/Singularidade";
import PrecisoDeAjuda from "./components/pages/PrecisoDeAjuda";
import FormPagamento from "./components/pages/pay/FormPagamento";
import TermosDeUso from "./components/pages/TermosDeUso";

function App() {
  return (
    <Router>
      <Container className="min-h-[75%]">
        <Routes>
          <Route
            exact
            path="/"
            element={<Home />}
          ></Route>
          <Route
            exact
            path="/dashboardPaciente"
            element={<DashboardPaciente />}
          ></Route>
          <Route
            exact
            path="/dashboardPacienteBeneficiado"
            element={<DashboardPacienteBeneficiado />}
          ></Route>
          <Route
            exact
            path="/dashboardPsicologo"
            element={<DashboardPsicologo />}
          ></Route>
          <Route
            exact
            path="/sobreNos"
            element={<SobreNos />}
          ></Route>
          <Route
            exact
            path="/impactoSocial"
            element={<ImpactoSocial />}
          ></Route>
          <Route
            exact
            path="/fazerBem"
            element={<FazerBem />}
          ></Route>
          <Route
            exact
            path="/singularidade"
            element={<Singularidade />}
          ></Route>
          <Route
            exact
            path="/PrecisoDeAjuda"
            element={<PrecisoDeAjuda />}
          ></Route>
          <Route
            exact
            path="/pagamentoConsulta"
            element={<FormPagamento />}
          ></Route>
          <Route
            exact
            path="/TermosDeUso"
            element={<TermosDeUso />}
          ></Route>
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
