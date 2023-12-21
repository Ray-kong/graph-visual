import cytoscape from "cytoscape";

var DFSGraph = () => {
  cytoscape({
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
        { data: { id: "de", source: "d", target: "e" } },
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
  })
    .viewport({ zoom: 0.7 })
    .center();
};

export default DFSGraph;
