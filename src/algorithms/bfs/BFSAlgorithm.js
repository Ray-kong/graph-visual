import Algorithm from "../Algorithm";
import Queue from "../../data_structures/Queue";
import { nodes, edges } from "./BFSGraph";

const Stages = ["checkCurrentNode", "checkOutEdges"];

class BFSAlgorithm extends Algorithm {
  constructor() {
    super(nodes, edges, "6");
    this.stage = Stages[0];
    this.queue = new Queue();
    this.currentNode = null;
    this.discovered = [];
    this.graph.init(true, "#a");
    this.queue.enqueue("a");
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
    if (!this.queue.isEmpty()) {
      this.currentNode = this.queue.dequeue();
      this.discovered.push(this.currentNode);
      this.graph.setCurrent(this.currentNode);
      this.stage = Stages[1];
      this.highlightLine = "7";
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
    newEdges.sort();
    newEdges.forEach((edge) => {
      this.queue.enqueue(edge);
    });
    this.stage = Stages[0];
    this.graph.removeCurrent();
    this.highlightLine = "11";
  }

  finished() {
    return (
      this.nodes.length == this.discovered.length && this.stage == Stages[0]
    );
  }
}

export default BFSAlgorithm;
