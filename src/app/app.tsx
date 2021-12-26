import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";

const App: React.FC = () => (
  <>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </>
);

export default App;
