import cytoscape from "cytoscape";

class Graph {
  constructor(nodes, edges) {
    this.nodes = nodes;
    this.edges = edges;
    this.cy = null;
  }

  init(directed, root, weighted) {
    this.cy = cytoscape({
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
          "text-valign": "center",
          "text-halign": "center",
        })
        .selector("edge")
        .style({
          width: 2,
          "line-color": "#ddd",
        })
        .selector(".weighted")
        .style({
          label: "data(weight)",
        })
        .selector(".directed")
        .style({
          "target-arrow-color": "#000000",
          "target-arrow-shape": "triangle",
          "curve-style": "bezier",
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
    });
    this.initNodes();
    this.initEdges();
    this.initLayout(directed, root, weighted);
    this.cy.viewport({ zoom: 0.7 });
    this.cy.center();
  }

  initNodes() {
    let formattedNodes = [];
    this.nodes.forEach((node) => {
      formattedNodes.push({
        group: "nodes",
        data: { id: node.label },
        grabbable: false,
      });
    });
    this.cy.add(formattedNodes);
  }

  initEdges() {
    this.edges.forEach((edge) => {
      let id = edge.start + edge.end;
      this.cy.add({
        group: "edges",
        data: {
          id: id,
          source: edge.start,
          target: edge.end,
          weight: edge.weight,
        },
      });
    });
  }

  initLayout(directed, root, weighted) {
    if (weighted) {
      this.addWeights();
    }
    if (directed) {
      this.addArrows();
    }
    this.cy
      .layout({
        name: "breadthfirst",
        directed: true,
        root: root,
        padding: 100,
      })
      .run();
  }

  addWeights() {
    this.cy.edges().addClass("weighted");
  }

  addArrows() {
    this.cy.edges().addClass("directed");
  }

  removeCurrent() {
    this.cy.nodes().removeClass("current");
  }

  setCurrent(nodeId) {
    this.removeCurrent();
    this.cy.getElementById(nodeId).addClass("highlighted").addClass("current");
  }

  highlightEdge(edgeId) {
    this.cy.getElementById(edgeId).addClass("highlighted");
  }
}

export default Graph;
