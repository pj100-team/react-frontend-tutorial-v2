import React from "react";
import { Routes, Route } from "react-router-dom";
import { MenuBar } from "./components/common/menuBar/MenuBar";
import { AddressSearchPage } from "./pages/AddressSearchPage";
import { CalendarPage } from "./pages/CalendarPage";
import Home from "./pages/home";

const App: React.FC = () => (
  <>
    <MenuBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calendar" element={<CalendarPage />} />
      <Route path="/AddressSearch" element={<AddressSearchPage />} />
    </Routes>
  </>
);

export default App;
