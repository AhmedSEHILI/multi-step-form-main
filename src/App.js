import { BrowserRouter, Route, Routes } from "react-router-dom";
import CardPlan from "./Comps/CardPlan";
import Layout from "./Comps/Layout";
import Infos from "./Pages/Infos";
import Plan from "./Pages/Plan";
import AddOns from "./Pages/AddOns";
import React, { createContext, useState } from 'react';

export const MyContext = createContext();


function App() {
  const [value, setValue] = useState(1);

  return (
    <MyContext.Provider value={{value, setValue}}>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />} >
              <Route index element={<Infos />}/>
              <Route path="plan" element={<Plan />}/>
              <Route path="addons" element={<AddOns />}/>
            </Route>
        </Routes>
      </BrowserRouter>
    </MyContext.Provider>

  );
}

export default App;
