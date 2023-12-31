import Algorithm from "../Algorithm";
import { nodes, edges } from "./DjikstraGraph";

class DjikstraAlgorithm extends Algorithm {
  constructor() {
    super(nodes, edges, "4");
    this.stage = null;
    this.graph.init(true, "#s", true);
  }
}

export default DjikstraAlgorithm;
