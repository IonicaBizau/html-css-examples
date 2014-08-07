$(document).ready(function () {

    // Cytoscape style
    var cStyle = cytoscape.stylesheet()
        .selector("node").css({
            "content": "data(label)"
        }).selector("edge").css({
            "target-arrow-shape": "triangle"
          , "width": 2
          , "line-color": "#ddd"
          , "target-arrow-color": "#ddd"
        });

    // Initialize Cytoscape
    $("#cy").cytoscape({
        style: cStyle,
        elements: {
            nodes: [
                { data: { id: "a", label: "Node 1" } }
              , { data: { id: "b", label: "Node 2" } }
            ]
          , edges: [
                { data: { id: "ab", weight: 3, source: "a", target: "b" } }
              , { data: { id: "ba", weight: 3, source: "b", target: "a" } }
              , { data: { id: "baa", weight: 3, source: "b", target: "a" } }
            ]
        }
      , layout: {
            name: "breadthfirst"
          , directed: true
          , roots: "#a"
          , padding: 10
        }
    });
}); // on dom ready
