(function() {
  "use strict";

  function generateRandomEdges(nNodes,output, nEdges, weighted) {
    var edges = new Array(nEdges),
        adjacencyMatrix,
        index1,
        index2,
        i, j;

    // Utility funciton to check whether the edge already exists
    function isEligibleEdge(startIndex, endIndex) {
      if ( 
          (adjacencyMatrix[startIndex][endIndex] === 1) ||
          (adjacencyMatrix[endIndex][startIndex] === 1)) {
        return false;
      }
      return true;
    }

    //Create the adjacencyMatrix
    adjacencyMatrix = new Array(nNodes);
    for (i = 0; i < nNodes; i++) {
      adjacencyMatrix[i] = new Array(output);
    }
    //Initialize the adjacency matrix
    for (i = 0; i < nNodes; i++) {
      for (j = 0; j < output; j++) {
        adjacencyMatrix[i][j] = 1;
      }
    }
   var i=0,k,j;
    for (j = 0; j < nNodes; j++){
    for (k = 0; k < output; k++)
   {
   if(i < nEdges){
      edges[i] = {
        startIndex: j,
        endIndex: k
      };
      if (weighted) {
        edges[i].weight =  (Math.random() * (1 - 0) + 0).toFixed(2);
      }
      // add the edge to the matrix
      adjacencyMatrix[j][k] = 1;
      // adjacencyMatrix[index2][index1] = 1;
      i++;
    }}}
	//document.write(nEdges);
    return edges;
  }
function generateRandomEdges1(nNodes,output,hidden,layers,nEdges,weighted) {
    var edges = new Array(nEdges),
        adjacencyMatrix,
        adjacencyMatrix1,
        adjacencyMatrix_big,
        index1,
        index2,
        i, j,n,m;

    // Utility funciton to check whether the edge already exists
    function isEligibleEdge(startIndex, endIndex) {
      if ( 
          (adjacencyMatrix[startIndex][endIndex] === 1) ||
          (adjacencyMatrix[endIndex][startIndex] === 1)) {
        return false;
      }
      return true;
    }

    //Create the adjacencyMatrix
    adjacencyMatrix = new Array(nNodes);
    for (i = 0; i < nNodes; i++) {
      adjacencyMatrix[i] = new Array(layers[0]);
    }
    //Initialize the adjacency matrix
    for (i = 0; i < nNodes; i++) {
      for (j = 0; j < layers[0]; j++) {
        adjacencyMatrix[i][j] = 1;
      }
    }
    adjacencyMatrix1 = new Array(layers[layers.length-1]);
    for (i = 0; i < layers[layers.length-1]; i++) {
      adjacencyMatrix1[i] = new Array(output);
    }
    //Initialize the adjacency matrix
    for (i = 0; i < layers[layers.length-1]; i++) {
      for (j = 0; j < output; j++) {
        adjacencyMatrix1[i][j] = 1;
      }
    }
    if(layers.length>0){
    adjacencyMatrix_big=new Array(layers.length-1);
   
    for(i=0;i<layers.length-1;i++)
    {
    var adjacencyMatrix_hidden=new Array(layers[i]);
    for(j=0;j<layers[i];j++)
    {
      adjacencyMatrix_hidden[j]=new Array(layers[i+1]);
    
    }
    for(n=0;n<layers[i];n++){
     for(m=0;m<layers[i+1];m++)
     {
     	adjacencyMatrix_hidden[n][m]=1;
     }
     }
     adjacencyMatrix_big[i]=adjacencyMatrix_hidden;
    }
   var i=0,k,j;
   
    for (j = 0; j < nNodes; j++){
    for (k = 0; k < layers[0]; k++)
   {
   if(i < nEdges){
      edges[i] = {
        startIndex: j,
        endIndex: k+nNodes
      };
      if (weighted) {
        edges[i].weight = (Math.random() * (1 - 0) + 0).toFixed(2);
      }
      // add the edge to the matrix
      adjacencyMatrix[j][k] = 1;
      // adjacencyMatrix[index2][index1] = 1;
      i++;
    }}}
    var j2,k2,x,y,y1;
    for(x=0;x<layers.length-1;x++){
    for (j2 = 0; j2 < layers[x]; j2++){
    for (k2 = 0; k2 < layers[x+1]; k2++)
   {var count=0;
   for(y=0;y<x;y++)
   {
    for(y1=0;y1<layers[x-1];y1++)
   	{count++;}
   }
   
      edges[i] = {
        startIndex: j2+nNodes+count,
        endIndex: k2+layers[x]+nNodes+count
      };
      
      if (weighted) {
        edges[i].weight = (Math.random() * (1 - 0) + 0).toFixed(2);
      }
      // add the edge to the matrix
      
      adjacencyMatrix_big[x][j2][k2] = 1;
      // adjacencyMatrix[index2][index1] = 1;
      i++;
    }}}    
    var j1,k1,h1,h2;
    for (j1 = 0; j1 < output; j1++){
    for (k1 = 0; k1 <layers[layers.length-1] ; k1++)
   {var count=0;
   for(h1=0;h1<layers.length-1;h1++)
   {
   	for(h2=0;h2<layers[h1];h2++)
   	{
   		count++;
   	}
   }
   if(i < nEdges){
      edges[i] = {
        startIndex: k1+nNodes+count,
        endIndex: j1+layers[layers.length-1]+nNodes+count
      };
      if (weighted) {
        edges[i].weight = (Math.random() * (1 - 0) + 0).toFixed(2);
      }
      // add the edge to the matrix
      adjacencyMatrix1[k1][j1] = 1;
      // adjacencyMatrix[index2][index1] = 1;
      i++;
    }}}}
	//document.write(nEdges);
    return edges;
  }
  /*
   * Generates a graph to an empty JSAV graph instance (graph).
   *
   * Arguments:
   *    - graph:    an empty JSAV graph instance
   *
   * Options:
   *    - nodes:    number of nodes, default is 7
   *    - edges:    number of edges, default is 10
   *    - weighted: should the graph be weighted, default is false
   */
  function generateGraph(graph, options) {
    var defaultOptions = {
      weighted: false,
      nodes: 4,
      output: 2,
      hidden:0,        // number of nodes
      edges: 8,
      layers:new Array(0)         // number of edges
    };
    var opts = $.extend(defaultOptions, options),
        weighted = opts.weighted,
        nNodes = opts.nodes,
        output=opts.output,
        hidden=opts.hidden,
        nEdges = opts.edges,
        nodes = new Array(nNodes),
        outnodes=new Array(output),
        hiddennodes=new Array(hidden),
        edges,
        edges1,
        i,
        j,
        k=0,
        layers=opts.layers;

    // Generate the node values
    for (i = 0; i < nNodes; i++) {
      nodes[i] = i+1;
    }
    for (i = 0; i < output; i++) {
      outnodes[i] = i+1;
    }
    for (i = 0; i < layers.length; i++) {
     for(j=0;j<layers[i];j++)
     {
      hiddennodes[k++] = j+1;
      }
    }
    // Generate edges
    edges1 = generateRandomEdges1(nNodes,output,hidden,layers,nEdges, weighted);
    edges = generateRandomEdges(nNodes,output, nEdges, weighted);
    // Add the nodes to the graph
    for (i = 0; i < nNodes; i++) {
      graph.addNode(nodes[i]);
    }
    if(hidden>0){
    for (i = 0; i < hidden; i++) {
      graph.addNode(hiddennodes[i]);
    }
    
    }
    
    for (i = 0; i < output; i++) {
      graph.addNode(outnodes[i]);
    }
    if(hidden>0){
        for (i = 0; i < nEdges; i++) {
      var gNodes  = graph.nodes(),
          start   = gNodes[edges1[i].startIndex],
          end     = gNodes[edges1[i].endIndex],
                          
          eOpts   = edges1[i].weight ? {weight: edges1[i].weight} : {};

      graph.addEdge(start, end, eOpts);
    }
    }
    else{
    // Add the edges to the graph

    for (i = 0; i < nEdges; i++) {
      var gNodes  = graph.nodes(),
          start   = gNodes[edges[i].startIndex],
          end     = gNodes[edges[i].endIndex+nNodes],
                          
          eOpts   = edges[i].weight ? {weight: edges[i].weight} : {};

      graph.addEdge(start, end, eOpts);
    }
    }


  }

  function copyGraph(source, destination, options) {
    var sourceNodes = source.nodes(),
        sourceEdges = source.edges(),
        opts = options || {weights: false};
    // copy nodes from graph
    sourceNodes.forEach(function(node) {
      destination.addNode(node.value());
    });

    // copy source node positions
    var destinationNodes = destination.nodes();
    destinationNodes.forEach(function(node, i) {
      var pos = sourceNodes[i].position();
      node.moveTo(pos.left, pos.top);
    });

    // copy edges from graph
    sourceEdges.forEach(function(edge) {
      var startIndex = sourceNodes.indexOf(edge.start()),
          endIndex   = sourceNodes.indexOf(edge.end()),
          startNode  = destinationNodes[startIndex],
          endNode    = destinationNodes[endIndex],
          eOpts      = opts.weights ? {weight: edge.weight()} : {};
      destination.addEdge(startNode, endNode, eOpts);
    });

    // call the layout function for each edge
    var destinationEdges = destination.edges();
    destinationEdges.forEach(function(edge) {
      edge.layout();
    });

    return destination;
  }

  function generateTree(graph, options) {
    var defaultOptions = {
      weighted: false,
      nodes: 5,          // number of nodes
      edges: 4         // number of edges
    };
    var opts = $.extend(defaultOptions, options),
        weighted = opts.weighted,
        nNodes = opts.nodes,
        nEdges = opts.edges,
        nodes = new Array(nNodes),
        edges,
        i;

    // Generate the node values
    for (i = 0; i < nNodes; i++) {
      nodes[i] = String.fromCharCode(i + 65);
    }
    // Generate edges
    edges = generateRandomEdges(nNodes,output, nEdges, weighted);
    // Add the nodes to the graph
    for (i = 0; i < nNodes; i++) {
      graph.addNode(nodes[i]);
    }
    // Add the edges to the graph
    for (i = 0; i < nEdges; i++) {
      var gNodes  = graph.nodes(),
          start   = gNodes[edges[i].startIndex],
          end     = gNodes[edges[i].endIndex],
          eOpts   = edges[i].weight ? {weight: edges[i].weight} : {};

      graph.addEdge(start, end, eOpts);
    }
  }

  window.graphUtils = {
    generate: generateGraph,
    copy: copyGraph,
    generateTree: generateTree
  };

})();
