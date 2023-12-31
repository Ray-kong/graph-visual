import { nodes, edges } from "./DFSGraph";
import Stack from "../../data_structures/Stack";
import Algorithm from "../Algorithm";

const Stages = ["checkCurrentNode", "checkOutEdges"];

class DFSAlgorithm extends Algorithm {
  constructor() {
    super(nodes, edges, "4");
    this.stage = Stages[0];
    this.stack = new Stack();
    this.currentNode = null;
    this.discovered = [];
    this.graph.init(false, "#a", false);
    this.stack.push("a");
  }

  next() {
    switch (this.stage) {
      case Stages[0]:
        this.checkCurrentNode();
        break;
      case Stages[1]:
        this.checkOutEdges();
        break;
    }
  }

  checkCurrentNode() {
    if (!this.stack.isEmpty()) {
      this.currentNode = this.stack.pop();
      this.discovered.push(this.currentNode);
      this.graph.setCurrent(this.currentNode);
      this.stage = Stages[1];
      this.highlightLine = "5";
    }
  }

  checkOutEdges() {
    let newEdges = [];
    edges.forEach((edge) => {
      if (edge.start === this.currentNode) {
        this.graph.highlightEdge(edge.start + edge.end);
        newEdges.push(edge.end);
      }
    });
    newEdges.sort().reverse();
    newEdges.forEach((edge) => {
      this.stack.push(edge);
    });
    this.stage = Stages[0];
    this.graph.removeCurrent();
    this.highlightLine = "8";
  }

  finished() {
    return (
      this.nodes.length == this.discovered.length && this.stage == Stages[0]
    );
  }
}

export default DFSAlgorithm;
