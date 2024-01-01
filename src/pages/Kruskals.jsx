import React from "react";
import Algorithm from "./Algorithm";

function Kruskals() {
  document.title = "Kruskal's | Graph Algorithm Visualizer";

  return (
    <>
      <Algorithm
        name="Kruskal's Algorithm"
        algorithm="kruskals"
        code={""}
        runtime={"O(mlogn)"}
        description={
          "Kruskal's algorithm is a fundamental method in graph theory used to find the minimum spanning tree (MST) of a connected, undirected graph with weighted edges. Unlike Prim's algorithm, Kruskal's approach focuses on iteratively selecting the smallest edge from the graph that connects two different components, gradually merging these components until they form a single spanning tree encompassing all vertices. It begins by sorting all the edges in ascending order based on their weights and then iterates through these edges, greedily selecting the smallest one at each step. The algorithm ensures that the selected edges do not create cycles in the current set of chosen edges, maintaining a forest of trees until all vertices belong to a single tree, which represents the minimum spanning tree of the original graph. Kruskal's algorithm is efficient and finds applications in various fields such as network design, circuit wiring, and infrastructure planning where minimizing total connection costs is crucial."
        }
      ></Algorithm>
    </>
  );
}

export default Kruskals;
