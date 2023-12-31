import Node from "../../data_structures/Node.js";
import Edge from "../../data_structures/Edge.js";

export const nodes = [];
export const edges = [];

nodes.push(new Node("s"));
nodes.push(new Node("b"));
nodes.push(new Node("c"));
nodes.push(new Node("d"));
nodes.push(new Node("e"));

edges.push(new Edge("s", "b", 10));
edges.push(new Edge("s", "c", 3));
edges.push(new Edge("b", "c", 4));
edges.push(new Edge("b", "d", 2));
edges.push(new Edge("c", "e", 2));
edges.push(new Edge("c", "d", 8));
edges.push(new Edge("e", "d", 9));
