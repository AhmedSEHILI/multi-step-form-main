import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Comps/Layout";
import Infos from "./Pages/Infos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Infos />}/>
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
