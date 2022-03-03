/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Routes, Route, Link } from "react-router-dom";
import AddressSearchPage from "./pages/addressSearchPage";
import CalendarPage from "./pages/calendarPage";
import Home from "./pages/home";
import { Pallet } from "./view/helper/colorHelper";

const queryClient = new QueryClient()

const App: React.FC = () => (
  <>
  <QueryClientProvider client={queryClient}>
  <div>
    <ul>
      <li css={css`
      background-color: ${Pallet.Gray};
      height: 50px;
      align-items: center;
    text-align: center;
    display: flex;
	flex-wrap: nowrap;
  justify-content: space-around;
  `}>
        <Link to="/">Home</Link>
        <Link to="/Calendar">Calendar</Link>
        <Link to="/AddressSearch">AddressSearch</Link>
      </li>
    </ul>
  </div>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Calendar' element={<CalendarPage />}/>
      <Route path='/AddressSearch' element={<AddressSearchPage />}/>
    </Routes>
    </QueryClientProvider>
  </>
);

export default App;
