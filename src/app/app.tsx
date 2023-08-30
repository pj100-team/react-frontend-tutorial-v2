import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import CalendarPage from "./components/common/menu_bar/calendar_page";
import AddressSearchPage from "./components/common/menu_bar/addresssearch_page";
import NotFoundPage from "./components/common/menu_bar/notfound_page";
import "/Users/lika/Desktop/stuff/Chapter3/react-frontend-tutorial-v2/src/app/components/common/menu_bar/menu_bar.css"

const App: React.FC = () => (
  <>
    <ul>
        <li className="menubar">
          <Link to="/">Home</Link>
          <Link to="/calendar">Calendar</Link>
          <Link to="/addresssearch">AddressSearch</Link>
        </li>
    </ul>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calendar" element={<CalendarPage />} />
      <Route path="/addresssearch" element={<AddressSearchPage />} />
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  </>
);

export default App;
