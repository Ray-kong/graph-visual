import cytoscape from "cytoscape";
import Node from "../data_structures/Node.js";
import Edge from "../data_structures/Edge.js";

var cy;

function init() {
  cy = cytoscape({
    container: document.getElementById("GraphContainer"),
    userZoomingEnabled: false,
    boxSelectionEnabled: false,
    autounselectify: true,
    userPanningEnabled: false,

    style: cytoscape
      .stylesheet()
      .selector("node")
      .style({
        content: "data(id)",
      })
      .selector("edge")
      .style({
        width: 2,
        "line-color": "#ddd",
      })
      .selector(".highlighted")
      .style({
        "background-color": "#61bffc",
        "line-color": "#61bffc",
        "transition-property":
          "background-color, line-color, target-arrow-color",
        "transition-duration": "0.5s",
      })
      .selector(".current")
      .style({
        "background-color": "#193052",
        "line-color": "#61bffc",
        "transition-property":
          "background-color, line-color, target-arrow-color",
        "transition-duration": "0.5s",
      }),

    elements: {
      nodes: [
        { data: { id: "a" }, grabbable: false },
        { data: { id: "b" }, grabbable: false },
        { data: { id: "c" }, grabbable: false },
        { data: { id: "d" }, grabbable: false },
        { data: { id: "e" }, grabbable: false },
        { data: { id: "f" }, grabbable: false },
        { data: { id: "g" }, grabbable: false },
        { data: { id: "h" }, grabbable: false },
        { data: { id: "i" }, grabbable: false },
      ],

      edges: [
        { data: { id: "ae", source: "a", target: "e" } },
        { data: { id: "ab", source: "a", target: "b" } },
        { data: { id: "bc", source: "b", target: "c" } },
        { data: { id: "ed", source: "d", target: "e" } },
        { data: { id: "ef", source: "e", target: "f" } },
        { data: { id: "dg", source: "d", target: "g" } },
        { data: { id: "ch", source: "c", target: "h" } },
        { data: { id: "ci", source: "c", target: "i" } },
      ],
    },

    layout: {
      name: "breadthfirst",
      directed: false,
      roots: "#a",
      padding: 100,
    },
  });
}

//TODO: move to update class

export function highlightNode(nodeId) {
  cy.nodes().removeClass("highlighted").removeClass("current");
  cy.getElementById(nodeId).addClass("current");
}

export function highlightEdge(edgeId) {
  cy.edges().removeClass("highlighted").removeClass("current");
  cy.getElementById(edgeId).addClass("current");
}

export function ListNodes() {
  let nodes = cy.nodes();
  let arr = [];
  nodes.forEach((node) => {
    let n = new Node(node.id());
    arr.push(n);
  });
  return arr;
}

export function ListEdges() {
  let edges = cy.edges();
  let arr = [];
  edges.forEach((edge) => {
    let e = new Edge(edge.id().charAt(0), edge.id().charAt(1), 0);
    arr.push(e);
  });
  return arr;
}

var DFSGraph = () => {
  init();
  return cy.viewport({ zoom: 0.7 }).center();
};

export default DFSGraph;
