import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import CalendarPage from "./pages/calendarPage";
import CheckListPage from "./pages/checkListPage";
import AddressSearchPage from "./pages/addressSearchPage";
import NotFoundPage from "./pages/notFoundPage";
import PhoneNumberPage from "./pages/phoneNumberPage";

const App: React.FC = () => (
  <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calendar" element={<CalendarPage />} />
      <Route path="/checkList" element={<CheckListPage />} />
      <Route path="/addressSearch" element={<AddressSearchPage />} />
      <Route path="/phoneNumber" element={<PhoneNumberPage />} />
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  </>
);

export default App;
