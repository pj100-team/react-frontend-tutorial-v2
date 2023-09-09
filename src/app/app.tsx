/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import CalendarPage from "./pages/calendar_page";
import AddressSearchPage from "./pages/addresssearch_page";
import NotFoundPage from "./pages/notfound_page";
import PhoneNumberPage from "./pages/phonenumber_page";
import StopWatchPage from "./pages/stopwatch_page";
import ToDoListPage from "./pages/todolist_page";

const App: React.FC = () => (
  <>
    <ul>
        <li css={css`
          background-color: #dfebeb;
          height: 40px;
          align-items: center;
          display: flex;
          justify-content: space-around;`
        }>
          <Link to="/">Home</Link>
          <Link to="/calendar">Calendar</Link>
          <Link to="/addresssearch">AddressSearch</Link>
          <Link to="/phonenumber">PhoneNumber</Link>
          <Link to="/stopwatch">StopWatch</Link>
          <Link to="/todolist">ToDoList</Link>
        </li>
    </ul>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calendar" element={<CalendarPage />} />
      <Route path="/addresssearch" element={<AddressSearchPage />} />
      <Route path="/phonenumber" element={<PhoneNumberPage />} />
      <Route path="/stopwatch" element={<StopWatchPage />} />
      <Route path="/todolist" element={<ToDoListPage />} />
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  </>
);

export default App;
