import Algorithm from "./../Algorithm";
import { nodes, edges } from "./PrimsGraph";

class PrimsAlgorithm extends Algorithm {
  constructor() {
    super(nodes, edges, "4");
    this.stage = null;
    this.graph.init(false, "#a", true);
  }
}

export default PrimsAlgorithm;
