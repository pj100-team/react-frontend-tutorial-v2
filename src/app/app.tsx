import React from "react";
import { Routes, Route } from "react-router-dom";
import { MenuBar } from "./components/common/menuBar/MenuBar";
import { AddressSearchPage } from "./pages/AddressSearchPage";
import { CalendarPage } from "./pages/CalendarPage";
import Home from "./pages/home";
import { PhoneNumberPage } from "./pages/PhoneNumberPage";
import { StopWatchPage } from "./pages/StopWatchPage";
import { TodoListPage } from "./pages/TodoListPage";

const App: React.FC = () => (
  <>
    <MenuBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calendar" element={<CalendarPage />} />
      <Route path="/AddressSearch" element={<AddressSearchPage />} />
      <Route path="/PhoneNumber" element={<PhoneNumberPage />} />
      <Route path="/StopWatch" element={<StopWatchPage />} />
      <Route path="/TodoList" element={<TodoListPage />} />
    </Routes>
  </>
);

export default App;
