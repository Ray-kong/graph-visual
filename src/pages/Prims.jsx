import React from "react";
import Algorithm from "./Algorithm";

function Prims() {
  document.title = "Prim's | Graph Algorithm Visualizer";

  return (
    <>
      <Algorithm
        name="Prim's Algorithm"
        algorithm="prims"
        code={""}
        runtime={"O(mlogn)"}
        description={
          "Prim's algorithm is a fundamental approach in graph theory used for finding the minimum spanning tree (MST) of a connected, undirected graph with weighted edges. It starts by arbitrarily selecting a node as the initial vertex and then continuously grows the MST by adding the minimum-weight edge that connects the current MST to a new vertex. This process iterates until all vertices are included in the MST. Prim's algorithm maintains a set of vertices that belong to the MST and a set of vertices that are not yet included. It repeatedly selects the edge with the smallest weight that connects a vertex in the MST to a vertex outside it, effectively expanding the MST while ensuring it remains connected with the least total edge weight possible. This method efficiently constructs optimal spanning trees and finds applications in network design, clustering, and optimizing various resource allocation scenarios where minimizing total connection costs is essential."
        }
      ></Algorithm>
    </>
  );
}

export default Prims;
