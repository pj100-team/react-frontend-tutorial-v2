import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";

const queryClient = new QueryClient()

const App: React.FC = () => (
  <>
  <QueryClientProvider client={queryClient}>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    </QueryClientProvider>
  </>
);

export default App;
