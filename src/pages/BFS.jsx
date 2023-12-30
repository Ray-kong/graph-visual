import React from "react";
import Algorithm from "./Algorithm";
import BFSPsuedo from "../algorithms/bfs/BFSPsuedo";

function BFS() {
  document.title = "BFS | Graph Algorithm Visualizer";

  return (
    <>
      <Algorithm
        name="Breadth-First Search"
        algorithm="bfs"
        code={BFSPsuedo}
        runtime={"O(n + m)"}
        description={
          "Breadth-first search (BFS) is a graph traversal algorithm that systematically explores a graph level by level, starting from a designated node. It examines all the neighbor nodes at the present level before moving on to the nodes at the next level. Utilizing a queue data structure, BFS visits all adjacent nodes of the starting node first, then the nodes that are at a distance of two edges away, and so on, ensuring that it explores the graph in a breadthward fashion. This algorithm is particularly useful for finding the shortest path in unweighted graphs, as it guarantees the shortest path to any node is discovered first due to its level-wise exploration strategy. BFS is commonly applied in network analysis, social network algorithms, and shortest path finding in unweighted graphs, providing a methodical approach for comprehensively traversing and analyzing graph structures."
        }
      ></Algorithm>
    </>
  );
}

export default BFS;
