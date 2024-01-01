import Algorithm from "./../Algorithm";
import { nodes, edges } from "./KruskalsGraph";

class KruskalsAlgorithm extends Algorithm {
  constructor() {
    super(nodes, edges, "4");
    this.stage = null;
    this.graph.init(false, "#a", true);
  }
}

export default KruskalsAlgorithm;
