import { BrowserRouter, Route, Routes } from "react-router-dom";
import CardPlan from "./Comps/CardPlan";
import Layout from "./Comps/Layout";
import Infos from "./Pages/Infos";
import Plan from "./Pages/Plan";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Infos />}/>
            <Route path="plan" element={<Plan />}/>
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
