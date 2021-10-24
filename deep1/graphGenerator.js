/*global alert: true, ODSA, graphUtils */
(function ($) {
  "use strict";
  var jsav = new JSAV($('.avcontainer'));
  var graph;
   var nNodes = parseInt($('#nodeCount').find(":selected").text(), 10);
    //var nEdges = parseInt($('#edgeCount').find(":selected").text(), 10);
    var output = parseInt($('#edgeCount').find(":selected").text(), 10);
    var step=0,l=1,n=0,edges=0;
    var layers=new Array(l);
    var temp=new Array(l);
      layers[l-1]=1;
  temp=layers;
    function addlayer(x)
    {
    	return (x%3==0);
    }
  function nextstep() {
  
   step++;
   n++;
     temp=layers;
     var i;
     //alert(addlayer(layers[l-1]));
     if(addlayer(layers[l-1]))
     {
     
     l++;
     n=1;
     }
     
     layers=new Array(l);
     
     for(i=0;i<l-1;i++)
     {
     	layers[i]=temp[i];
     	
     }
     
     layers[l-1]=n;
     edges=layers[0]*nNodes;
    for(i=0;i<layers.length-1;i++)
     {
     	edges+=layers[i]*layers[i+1];
     }
    edges+=layers[layers.length-1]*output;
    //alert(edges);
    if (graph) {
      graph.clear();
    }
    graph = jsav.ds.graph({
      width: 400,
      height: 800,
      layout: "layered",
      directed: false
    });
graphUtils.generate(graph, {
      nodes: nNodes,
      output:output,
      edges: edges,
      hidden:step,
      weighted: true,
      layers:layers
    });
    graph.layout();
  }
  function handler() {
  step=0,l=1;
    nNodes = parseInt($('#nodeCount').find(":selected").text(), 10);
    //var nEdges = parseInt($('#edgeCount').find(":selected").text(), 10);
     output = parseInt($('#edgeCount').find(":selected").text(), 10);
    if (graph) {
      graph.clear();
    }
    graph = jsav.ds.graph({
      width: 400,
      height: 800,
      layout: "layered",
      directed: false
    });
    graphUtils.generate(graph, {
      nodes: nNodes,
      output:output,
      edges: nNodes*output,
      weighted: true
    });
    graph.layout();
  }

  function about() {
    var mystring = "Graph Generator Tool\nWritten by Mohammed Fawzi and Cliff Shaffer\nCreated as part of the OpenDSA hypertextbook project.\nFor more information, see http://opendsa.org.\nWritten during Spring, 2013\nLast update: March, 2013\nJSAV library version " + JSAV.version();
    alert(mystring);
  }
  // Connect action callbacks to the HTML entities
  $('#about').click(about);
  $('#generate').click(handler);
  $('#next1').click(nextstep);
  $('#reset').click(ODSA.AV.reset);
}(jQuery));
