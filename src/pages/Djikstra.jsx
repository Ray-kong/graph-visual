import React from "react";
import Algorithm from "./Algorithm";

function Djikstra() {
  document.title = "Djikstra's | Graph Algorithm Visualizer";

  return (
    <>
      <Algorithm
        name="Djikstra's Algorithm"
        algorithm="djikstra"
        code={""}
        runtime={"O(mlogn)"}
        description={
          "Dijkstra's algorithm is a fundamental method used in graph theory for finding the shortest path from a designated starting node to all other nodes in a weighted graph. It begins by assigning a tentative distance value to every node, marking the starting node's distance as 0 and all others as infinity. Iteratively, it selects the node with the smallest tentative distance, explores its neighboring nodes, and updates their tentative distances if a shorter path is found. This process continues until all nodes have been visited. Dijkstra's algorithm ensures that the shortest path to each node is progressively determined, making it optimal for finding shortest paths in graphs with non-negative edge weights. The algorithm's efficiency depends on its use of a priority queue or a min-priority queue to manage node selections, enabling it to efficiently compute shortest paths in various applications like network routing, GPS systems, and transportation networks."
        }
      ></Algorithm>
    </>
  );
}

export default Djikstra;
