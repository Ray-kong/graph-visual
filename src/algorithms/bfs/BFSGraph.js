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
nodes.push(new Node("j"));
nodes.push(new Node("k"));
nodes.push(new Node("l"));
nodes.push(new Node("m"));

edges.push(new Edge("a", "b", 0));
edges.push(new Edge("a", "c", 0));
edges.push(new Edge("b", "d", 0));
edges.push(new Edge("b", "f", 0));
edges.push(new Edge("c", "e", 0));
edges.push(new Edge("c", "g", 0));
edges.push(new Edge("d", "h", 0));
edges.push(new Edge("d", "i", 0));
edges.push(new Edge("i", "j", 0));
edges.push(new Edge("g", "k", 0));
edges.push(new Edge("k", "l", 0));
edges.push(new Edge("l", "m", 0));
