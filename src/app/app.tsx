import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import MenuBar from "./components/common/menubar";
import CalendarPage from "./pages/CalendarPage";
import CheckListPage from "./pages/ChecklistPage";
import AddressSearchPage from "./pages/AddressSearchPage";

const App: React.FC = () => (
  <>
    <MenuBar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/addressSearch" element={<AddressSearchPage />} />
      <Route path="/calendar" element={<CalendarPage/>} />
      <Route path="/checklist" element={<CheckListPage />} />
    </Routes>
  </>
);

export default App;
