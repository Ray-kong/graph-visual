import React from "react";
import Algorithm from "./Algorithm";
import BFSPsuedo from "../algorithms/bfs/BFSPsuedo";

function BFS() {
  document.title = "BFS | Graph Algorithm Visualizer";

  return (
    <Algorithm
      name="Breadth-First Search"
      algorithm="bfs"
      code={BFSPsuedo}
    ></Algorithm>
  );
}

export default BFS;
