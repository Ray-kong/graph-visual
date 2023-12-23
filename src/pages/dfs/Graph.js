import Node from "../../data_structures/Node.js";
import Edge from "../../data_structures/Edge.js";

export const nodes = [];
export const edges = [];

nodes.push(new Node("a"));
nodes.push(new Node("b"));
nodes.push(new Node("c"));
nodes.push(new Node("d"));
nodes.push(new Node("e"));
nodes.push(new Node("f"));
nodes.push(new Node("g"));
nodes.push(new Node("h"));
nodes.push(new Node("i"));

edges.push(new Edge("a", "e", 0));
edges.push(new Edge("a", "b", 0));
edges.push(new Edge("b", "c", 0));
edges.push(new Edge("e", "d", 0));
edges.push(new Edge("e", "f", 0));
edges.push(new Edge("d", "g", 0));
edges.push(new Edge("c", "h", 0));
edges.push(new Edge("c", "i", 0));
