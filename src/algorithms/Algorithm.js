import Graph from "../data_structures/Graph";

class Algorithm {
  constructor(nodes, edges, highlightLine) {
    this.nodes = nodes;
    this.edges = edges;
    this.graph = new Graph(nodes, edges);
    this.highlightLine = highlightLine;
  }

  finished() {
    throw new Error("Abstract method must be implemented");
  }

  lineToHighlight() {
    return this.highlightLine;
  }
}

export default Algorithm;
