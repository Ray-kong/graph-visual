import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Error from "./pages/Error";
import Home from "./pages/Home";
import DFS from "./pages/DFS";
import BFS from "./pages/BFS";
import Djikstra from "./pages/Djikstra";
import Prims from "./pages/Prims";
import Kruskals from "./pages/Kruskals";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Home />} />
        <Route path="/dfs" element={<DFS />} />
        <Route path="/bfs" element={<BFS />} />
        <Route path="/djikstras" element={<Djikstra />} />
        <Route path="/prims" element={<Prims />} />
        <Route path="/kruskals" element={<Kruskals />} />
      </Routes>
    </>
  );
}

export default App;
