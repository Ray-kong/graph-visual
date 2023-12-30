import React from "react";
import Algorithm from "./Algorithm.jsx";
import DFSPsuedo from "../algorithms/dfs/DFSPsuedo.js";

function DFS() {
  document.title = "DFS | Graph Algorithm Visualizer";

  return (
    <>
      <Algorithm
        name="Depth-First Search"
        algorithm="dfs"
        code={DFSPsuedo}
        runtime={"O(n + m)"}
        description={
          "Depth-first search (DFS) is a graph traversal algorithm that explores as far as possible along each branch before backtracking. Starting at an initial node, DFS systematically moves deeper into the graph, visiting adjacent nodes until it reaches a dead-end. It then backtracks to the most recent node with unexplored branches and continues the process until all nodes have been visited. This approach employs a stack or recursive function calls to manage the traversal sequence, making it relatively memory efficient compared to breadth-first search. DFS is commonly used in maze solving, topological sorting, and analyzing connected components in graphs, providing a fundamental framework for exploring and analyzing graph structures."
        }
      ></Algorithm>
    </>
  );
}

export default DFS;
