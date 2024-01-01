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

edges.push(new Edge("a", "b", 6));
edges.push(new Edge("b", "d", 5));
edges.push(new Edge("c", "d", 9));
edges.push(new Edge("d", "g", 3));
edges.push(new Edge("b", "e", 14));
edges.push(new Edge("f", "g", 15));
edges.push(new Edge("h", "g", 10));
edges.push(new Edge("c", "h", 2));
edges.push(new Edge("c", "a", 4));
edges.push(new Edge("e", "g", 8));
