import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Error from "./pages/Error";
import Home from "./pages/Home";
import DFS from "./pages/DFS";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Home />} />
        <Route path="/dfs" element={<DFS />} />
      </Routes>
    </>
  );
}

export default App;
