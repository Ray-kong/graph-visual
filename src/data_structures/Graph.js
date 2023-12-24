import cytoscape from "cytoscape";

class Graph {
  constructor(nodes, edges) {
    this.nodes = nodes;
    this.edges = edges;
    this.cy = null;
  }

  init(directed, root) {
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
    });
    this.initNodes();
    this.initEdges();
    this.initLayout(directed, root);
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

  initLayout(directed, root) {
    this.cy
      .layout({
        name: "breadthfirst",
        directed: directed,
        root: root,
        padding: 100,
      })
      .run();
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
