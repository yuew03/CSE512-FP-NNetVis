//current question:
//0. biger dataset
//1. click and highlight the links from layer 1 to layer 5;
// 2. static marks in the page;
// 3. tooltips when hover;
// 4. display how many 0 weights


// svg
var margin = {
    top: 20,
    right: 10,
    bottom: 10,
    left: 10
  },

  width = 1160 - margin.left - margin.right,
  height = 650 - margin.top - margin.bottom,
  nodeSize = 12;

var cntCurDense1Links = 0,
    cntCurDense2Links = 0,
    cntCurDense3Links = 0,
    cntCurDense4Links = 0,
    cntCurDense5Links = 0;// inumber will be changed when slider bar moved

var cntCurDense1CLinks = 0,
    cntCurDense1CLinks = 0,
    cntCurDense1CLinks = 0,
    cntCurDense1CLinks = 0,
    cntCurDense1CLinks = 0; // number will be changed when click on a node and bar moved


url = "https://gist.githubusercontent.com/yuew03/9e9ddebc0a45fc70401102c9da1b999a/raw/715877d1524caf4a4753c4a0f0f58ae7e07d9f30/nnet_outputNodeFeature.json";

var myColor = d3.scaleLinear()
  .domain([1, 6])
  .range(["#accca5", "#9dc395", "#8eba84", "#7fb174", "#70a864", "#639b57"]);

var x = d3.scaleLinear()
  .domain([0, 5])
  .range([0, width]);

var y = d3.scaleLinear()
  .domain([0, 520])
  .range([height - 5, 0]);

var curSliderMin = 0,
    curSliderMax = 0

d3.json(url, function(error, data) {
  var inputNodesLinks = data.inputNodesLinks,
    outputNodesLinks = data.outputNodesLinks,
    biasNodesLinks = data.biasNodesLinks;

  var maxWeight = d3.max(data.links.map(function(d) {
    return d.weights;
  }));
  var minWeight = d3.min(data.links.map(function(d) {
    return d.weights;
  }));



  function updateInfo(){
    // for dense_1 normal
    var allLinksInDense1 = 430,
        linksIn1Now = d3.selectAll(".keep").filter(".dense1").size();

    var ifbias = d3.selectAll(".bias");
        if (ifbias._groups[0][0] != null){// bias activited
          allLinksInDense1 += 43;
        }
    var res = (linksIn1Now*100/allLinksInDense1);
    document.getElementById('layer1per').ldBar.set(res);
    d3.select('#layer1fig').text(linksIn1Now);
    // for dense_1 selected
    var ifNode = d3.selectAll(".connected");
    if (ifNode._groups[0][0] != null){
      var conLinkDen1 = d3.selectAll(".keep").filter(".dense1").filter(".connected").size(),
          sRes = conLinkDen1 * 100/allLinksInDense1;
          document.getElementById('layer1cper').ldBar.set(sRes);
          d3.select('#layer1cfig').text(conLinkDen1);
    }


    //for dense_2 normal
    var allLinksInDense2 = 5547,
        linksIn2Now = d3.selectAll(".keep").filter(".dense2").size();
    var ifbias = d3.selectAll(".bias");
        if (ifbias._groups[0][0] != null){// bias activited
          allLinksInDense2 += 129;
        };
    var res = (linksIn2Now*100/allLinksInDense2);
    document.getElementById('layer2per').ldBar.set(res);
    d3.select('#layer2fig').text(linksIn2Now);

    // for dense_2 selected
    var ifNode = d3.selectAll(".connected");
    if (ifNode._groups[0][0] != null){
      var conLinkDen2 = d3.selectAll(".keep").filter(".dense2").filter(".connected").size(),
          sRes = conLinkDen2 * 100/allLinksInDense2;
          document.getElementById('layer2cper').ldBar.set(sRes);
          d3.select('#layer2cfig').text(conLinkDen2);
    }


    //for dense_3 normal
    var allLinksInDense3 = 9933,
        linksIn3Now = d3.selectAll(".keep").filter(".dense3").size();
    var ifbias = d3.selectAll(".bias");
        if (ifbias._groups[0][0] != null){// bias activited
          allLinksInDense3 += 77;
        };
    var res = (linksIn3Now*100/allLinksInDense3);
    document.getElementById('layer3per').ldBar.set(res);
    d3.select('#layer3fig').text(linksIn3Now);

    // for dense_3 selected
    var ifNode = d3.selectAll(".connected");
    if (ifNode._groups[0][0] != null){
      var conLinkDen3 = d3.selectAll(".keep").filter(".dense3").filter(".connected").size(),
          sRes = conLinkDen3 * 100/allLinksInDense3;
          document.getElementById('layer3cper').ldBar.set(sRes);
          d3.select('#layer3cfig').text(conLinkDen3);
    }

    //for dense_4 normal
    var allLinksInDense4 = 7854,
        linksIn4Now = d3.selectAll(".keep").filter(".dense4").size();
    var ifbias = d3.selectAll(".bias");
        if (ifbias._groups[0][0] != null){// bias activited
          allLinksInDense4 += 102;
        };
    var res = (linksIn4Now*100/allLinksInDense4);
    document.getElementById('layer4per').ldBar.set(res);
    d3.select('#layer4fig').text(linksIn4Now);
    // for dense_4 selected
    var ifNode = d3.selectAll(".connected");
    if (ifNode._groups[0][0] != null){
      var conLinkDen4 = d3.selectAll(".keep").filter(".dense4").filter(".connected").size(),
          sRes = conLinkDen4 * 100/allLinksInDense4;
          document.getElementById('layer4cper').ldBar.set(sRes);
          d3.select('#layer4cfig').text(conLinkDen4);
    }


    //for dense_5 normal
    var allLinksInDense5 = 714,
        linksIn5Now = d3.selectAll(".keep").filter(".dense5").size();
    var ifbias = d3.selectAll(".bias");
        if (ifbias._groups[0][0] != null){// bias activited
          allLinksInDense5 += 7;
        };
    var res = (linksIn5Now*100/allLinksInDense5);
    document.getElementById('layer5per').ldBar.set(res);
    d3.select('#layer5fig').text(linksIn5Now);
    // for dense_5 selected
    var ifNode = d3.selectAll(".connected");
    if (ifNode._groups[0][0] != null){
      var conLinkDen5 = d3.selectAll(".keep").filter(".dense5").filter(".connected").size(),
          sRes = conLinkDen5 * 100/allLinksInDense5;
          document.getElementById('layer5cper').ldBar.set(sRes);
          d3.select('#layer5cfig').text(conLinkDen5);
    }

  };

  function inputReColorLinks() {

    var oldcntNodeList = new Set(),
      newcntNodeList = new Set();
    //var curClickedNode;

    d3.selectAll(".keep").filter(".dense1").filter(".connected")
      .classed("connected", function(d) {
        newcntNodeList.add(d.target[1]);
        return true;
      })
    // console.log(newcntNodeList);
    oldcntNodeList = newcntNodeList; // can be connected
    newcntNodeList = new Set();

    d3.selectAll(".keep").filter(".dense2")
      .classed("connected", function(d) {
        // console.log(d.source[1]);
        if (oldcntNodeList.has(d.source[1])) {
          newcntNodeList.add(d.target[1]);
          return true;
        } else {
          return false;
        }
      })

    oldcntNodeList = newcntNodeList; // can be connected
    newcntNodeList = new Set();
    d3.selectAll(".keep").filter(".dense3")
      .classed("connected", function(d) {
        if (oldcntNodeList.has(d.source[1])) {
          newcntNodeList.add(d.target[1]);
          return true
        } else {
          return false;
        }
      })

    oldcntNodeList = newcntNodeList; // can be connected
    newcntNodeList = new Set();
    d3.selectAll(".keep").filter(".dense4")
      .classed("connected", function(d) {
        if (oldcntNodeList.has(d.source[1])) {
          newcntNodeList.add(d.target[1]);
          return true
        } else {
          return false;
        }
      })


    oldcntNodeList = newcntNodeList; // can be connected
    newcntNodeList = new Set();
    d3.selectAll(".keep").filter(".dense5")
      .classed("connected", function(d) {
        if (oldcntNodeList.has(d.source[1])) {
          newcntNodeList.add(d.target[1]);
          return true
        } else {
          return false;
        }
      })
  }

  function outputReColorLinks() {

    var oldcntNodeList = new Set(),
      newcntNodeList = new Set();
    //var curClickedNode;

    d3.selectAll(".keep").filter(".dense5").filter(".connected")
      .classed("connected", function(d) {
        newcntNodeList.add(d.source[1]);
        return true;
      })

    //d3.selectAll(".biaslines").filter(".dense5").classed('connected', true);
    // console.log(newcntNodeList);
    oldcntNodeList = newcntNodeList; // can be connected
    newcntNodeList = new Set();

    d3.selectAll(".keep").filter(".dense4")
      .classed("connected", function(d) {
        // console.log(d.source[1]);
        if (oldcntNodeList.has(d.target[1])) {
          newcntNodeList.add(d.source[1]);
          return true;
        } else {
          return false;
        }
      })

    oldcntNodeList = newcntNodeList; // can be connected
    newcntNodeList = new Set();
    d3.selectAll(".keep").filter(".dense3")
      .classed("connected", function(d) {
        if (oldcntNodeList.has(d.target[1])) {
          newcntNodeList.add(d.source[1]);
          return true
        } else {
          return false;
        }
      })

    oldcntNodeList = newcntNodeList; // can be connected
    newcntNodeList = new Set();
    d3.selectAll(".keep").filter(".dense2")
      .classed("connected", function(d) {
        if (oldcntNodeList.has(d.target[1])) {
          newcntNodeList.add(d.source[1]);
          return true
        } else {
          return false;
        }
      })


    oldcntNodeList = newcntNodeList; // can be connected
    newcntNodeList = new Set();
    d3.selectAll(".keep").filter(".dense1")
      .classed("connected", function(d) {
        if (oldcntNodeList.has(d.target[1])) {
          newcntNodeList.add(d.source[1]);
          return true
        } else {
          return false;
        }
      })
  }

  // Range
  var cur_min = 0.0,
    cur_max = 0.0;

  var cur_range = [0.0, 0.0];
  cur_range.forEach((d, i) => {
    return 0
  });

  var sliderRange = d3
    .sliderBottom()
    .min(minWeight)
    .max(maxWeight)
    .width(900)
    .tickFormat(d3.format('.2'))
    .ticks(5)
    .default([0.00, 0.00])
    .fill('#fff')
    .on('onchange', val => {
    curSliderMin = Math.min(curSliderMin, val[0]);
    curSliderMax = Math.max(curSliderMax, val[1]);
      d3.selectAll('.link')
        .style("stroke-width", function(d) {
          var curLinkId = d.id;
          if (d.weight > 0) {
            if (d.weight > val[1]) {
              d3.select("#" + d.id).classed("keep", true)
              return 1;
            } else {
              d3.select("#" + d.id).classed("keep", false);
              return 0;
            }
          } else {
            if (d.weight < val[0]) {
              d3.select("#" + d.id).classed("keep", true);
              return 1;
            } else {
              d3.select("#" + d.id).classed("keep", false);
              return 0;
            }
          }
          return 1;
        });


      if (d3.select('.selected')[0] != null ){
        var curNodeID = d3.select(".selected").attr("id");
        if (curNodeID) {
          if (curNodeID[0] === "i") {
            inputReColorLinks();
          } else {
            outputReColorLinks();
          }
        }
      }


      updateInfo();

      d3.select('p#value-range').text(val.map(d3.format('.2')).join('-'));
    });

  var gRange = d3
    .select('div#slider-range')
    .append('svg')
    .attr('width', 1200)
    .attr('height', 80)
    .append('g')
    .attr('transform', 'translate(30,30)');

  gRange.call(sliderRange);

  // for second

  var sliderRange2 = d3
    .sliderBottom()
    .min(-0.5)
    .max(0.5)
    .width(900)
    .tickFormat(d3.format('.2'))
    .ticks(5)
    .default([0.00, 0.00])
    .fill('#fff')
    .on('onchange', val => {
      d3.selectAll('.link')
        .style("stroke-width", function(d) {
        curSliderMin = Math.min(curSliderMin, val[0]);
        curSliderMax = Math.max(curSliderMax, val[1]);
          var curLinkId = d.id;
          if (d.weight > 0) {
            if (d.weight > val[1]) {
              d3.select("#" + d.id).classed("keep", true)
              return 1;
            } else {
              d3.select("#" + d.id).classed("keep", false);
              return 0;
            }
          } else {
            if (d.weight < val[0]) {
              d3.select("#" + d.id).classed("keep", true);
              return 1;
            } else {
              d3.select("#" + d.id).classed("keep", false);
              return 0;
            }
          }
          return 1;
        });


      if (d3.select('.selected')[0] != null ){
        var curNodeID = d3.select(".selected").attr("id");
        if (curNodeID) {
          if (curNodeID[0] === "i") {
            inputReColorLinks();
          } else {
            outputReColorLinks();
          }
        }
      }

      updateInfo();

      d3.select('p#value-range').text(val.map(d3.format('.2')).join('-'));
    });

  var gRange2 = d3
    .select('div#slider-range2')
    .append('svg')
    .attr('width', 1200)
    .attr('height', 80)
    .append('g')
    .attr('transform', 'translate(30,30)');

  gRange2.call(sliderRange2);

  d3.select('p#value-range').text(
    sliderRange
    .value()
    .map(d3.format('.2'))
    .join('-')
  );

  var svg_nnet = d3.select(".nnetsvg")
    .append("svg")
    .attr("class", "svg_nnet")
    .attr('transform', "translate(20,0)")
    // .attr('position',"absolute")
    .attr("width", width)
    .attr("height", height);

  var tooltip = d3.select(".svg_nnet")
    .append("div")
    .style("opacity", 0)
    .attr("class", "tooltip")
    .style("background-color", "black")
    .style("border-radius", "5px")
    .style("padding", "5px")
    .style("z-index", 10)
    .style("color", "white");

  var showTooltip = function(d) {
    tooltip
      .transition()
      .duration(200)
    tooltip
      .style("opacity", 1)
      .html("Label: " + d.label)
      .style("left", (d3.mouse(this)[0] + 70) + "px")
      .style("top", (d3.mouse(this)[1]) + "px");
  }

  var y_axis = d3.axisLeft().scale(y);

  var hiddenLayer1 = svg_nnet.append("g")
    .attr("transform", "translate(" + width / 5 + ", 0)")
    .attr("class", "axisHiddenLayer")
    .call(y_axis);
  var hiddenLayer2 = svg_nnet.append("g")
    .attr("transform", "translate(" + 2 * width / 5 + ", 0)")
    .attr("class", "axisHiddenLayer")
    .call(y_axis);
  var hiddenLayer3 = svg_nnet.append("g")
    .attr("transform", "translate(" + 3 * width / 5 + ", 0)")
    .attr("class", "axisHiddenLayer")
    .call(y_axis);
  var hiddenLayer4 = svg_nnet.append("g")
    .attr("transform", "translate(" + 4 * width / 5 + ", 0)")
    .attr("class", "axisHiddenLayer")
    .call(y_axis);

  var inputNodes = data.inputNodes.map(function(d) {
    return {
      'x': x(d.x),
      'y': y(d.y),
      'id': "in" + d.nodeId,
    }
  });

  var outputNodes = data.outputNodes.map(function(d) {
    return {
      'x': x(d.x),
      'y': y(d.y),
      'id': "on" + d.nodeId,
    }
  });

  var biasNodes = data.biasNodes.map(function(d) {
    return {
      'x': x(d.x),
      'y': y(d.y),
      'id': d.nodeId,
    }

  });

  var links = data.links.map(function(d) {

    return {
      'source': d.source,
      'target': d.target,
      'weight': d.weights,
      'id': "l" + d.linkId,
    }
  });

  var biaslinks = biasNodesLinks.map(function(d) {

    return {
      'source': d.source,
      'target': d.target,
      'weight': d.weights,
      'id': "l" + d.linkId,
    }
  });

  var lines = svg_nnet.selectAll(".link")
    .data(links)
    .enter()
    .append("line")
    .attr("class", "link");

  lines.attr("x1", function(d) {
      return x(d.source[0]);
    })
    .attr("y1", function(d) {
      return y(d.source[1]);
    })
    .attr("x2", function(d) {
      return x(d.target[0]);
    })
    .attr("y2", function(d) {
      return y(d.target[1]);
    })
    .style("stroke-width", function(d) {
      return 1
    })
    .attr('id', function(d) {
      return d.id
    })
    .classed("keep", true)
    .classed("dense1", function(d) {
      if (Number(d.id.slice(1, )) >= 0 && Number(d.id.slice(1, )) <= 429) {
        return true
      }
    })
    .classed("dense2", function(d) {
      if (Number(d.id.slice(1, )) >= 430 && Number(d.id.slice(1, )) <= 5976) {
        return true
      }
    })
    .classed("dense3", function(d) {
      if (Number(d.id.slice(1, )) >= 5977 && Number(d.id.slice(1, )) <= 15909) {
        return true
      }
    })
    .classed("dense4", function(d) {
      if (Number(d.id.slice(1, )) >= 15910 && Number(d.id.slice(1, )) <= 23763) {
        return true
      }
    })
    .classed("dense5", function(d) {
      if (Number(d.id.slice(1, )) >= 23764 && Number(d.id.slice(1, )) <= 24477) {
        return true
      }
    });

  $(".pushme2").click(function() {
  if ($(this).text() != "Bias Nodes"){
    d3.selectAll('.bias').remove();
    updateInfo();
  }

    if ($(this).text() === "Bias Nodes") {
      // handle the situation that a output node has already been clicked
      if (d3.select('.selected')[0] != null) {
        var ifNode = d3.select('.selected').attr('id');
        outputNodeDfs.call(this, Number(ifNode.slice(2, )));
      }

      svg_nnet.append("g")
        .selectAll("biasNode")
        .data(biasNodes)
        .enter()
        .append("circle")
        .classed("bias", true)
        .attr('id', function(d) {
          return d.id;
        })
        .attr("cx", function(d) {
          return d.x
        })
        .attr("cy", function(d) {
          return d.y;
        })
        .attr("r", 4)
        .attr("fill", "#9dc395");

      var biaslines = svg_nnet.selectAll(".biaslinks")
        .data(biaslinks)
        .enter()
        .append("line")
        .attr("class", "link")
        .classed('bias', true);

      biaslines.attr("x1", function(d) {
          return x(d.source[0]);
        })
        .attr("y1", function(d) {
          return y(d.source[1]);
        })
        .attr("x2", function(d) {
          return x(d.target[0]);
        })
        .attr("y2", function(d) {
          return y(d.target[1]);
        })
        .attr('id', function(d) {
          return d.id
        })
        .style("stroke-width", function(d) {
          if (d.weight > 0) {
            if (d.weight > curSliderMax) {
              d3.select("#" + d.id).classed("keep", true)
              return 1;
            } else {
              d3.select("#" + d.id).classed("keep", false);
              return 0;
            }
          } else {
            if (d.weight < curSliderMin) {
              d3.select("#" + d.id).classed("keep", true);
              return 1;
            } else {
              d3.select("#" + d.id).classed("keep", false);
              return 0;
            }
          }
          return 1;
        })
        .classed("dense1", function(d) {
          if (Number(d.id.slice(1, )) >= 24478 && Number(d.id.slice(1, )) < 24521) {
            return true
          }
        })
        .classed("dense2", function(d) {
          if (Number(d.id.slice(1, )) >= 24521 && Number(d.id.slice(1, )) < 24650) {
            return true
          }
        })
        .classed("dense3", function(d) {
          if (Number(d.id.slice(1, )) >= 24650 && Number(d.id.slice(1, )) < 24727) {
            return true
          }
        })
        .classed("dense4", function(d) {
          if (Number(d.id.slice(1, )) >= 24727 && Number(d.id.slice(1, )) < 24829) {
            return true
          }
        })
        .classed("dense5", function(d) {
          if (Number(d.id.slice(1, )) >= 24829 && Number(d.id.slice(1, )) < 24836) {
            return true
          }
        });

        updateInfo();//update the data because we add bias links in the svg

    }


    // change the text in button
    $(this).text(function(i, v) {
      return v === 'No Bias' ? 'Bias Nodes' : 'No Bias'
    });
  });



var Inputs = svg_nnet.append("g")
    .selectAll("inputNode")
    .data(inputNodes)
    .enter();

Inputs.append("circle")
      .attr("class", "inputNodes")
      .attr('id', function(d) {
      //console.log(d);
        return d.id;
      })
      .attr("cx", function(d) {
        return d.x
      })
      .attr("cy", function(d) {
        return d.y;
      })
      .attr("r", nodeSize)
      .attr("fill", "#accca5")
      .on("mouseover", showTooltip);

Inputs.append("text")
      .attr("class", "tick")
      .attr("dx", function(d){return d.x-10})
      .attr("dy", function(d){return d.y})
      .attr("id", function(d, i){
        return "tick"+String(i)
      });


svg_nnet.append("g")
    .selectAll("outputNode")
    .data(outputNodes)
    .enter()
    .append("circle")
    .attr("class", "outputNodes")
    .attr("cx", function(d) {
      return d.x
    })
    .attr("cy", function(d) {
      return d.y;
    })
    .attr('id', function(d) {
      return d.id;
    })
    .attr("r", nodeSize)
    .attr("fill", "#8eba84")
    .on("mouseover", showTooltip);


  function selectNode() {
    d3.select('.selected')
      .classed('selected', false);

    d3.select(this)
      .classed('selected', true);

  }

  // inputNodeClickAndHight
  function inputNodeDfs(curNodeId) {
    // console.log(curNodeId);
    var curNodeLinksListName = "node" + String(curNodeId) + "links";
    var curNodeLinksList = inputNodesLinks[curNodeLinksListName];
    var curNodeLinksSet = new Set(curNodeLinksList);

    svg_nnet.selectAll(".link")
      .classed("connected", function(d) {
        if (curNodeLinksSet.has(Number(d.id.slice(1, )))) {
          return true;
        } else {
          return false
        }
      })
  }

  d3.selectAll('.inputNodes')
    .on('click', function(d) {
      d3.selectAll('.connected')
        .classed('connected', false);
      selectNode.call(this);
      inputNodeDfs.call(this, Number(d.id.slice(2, )));
      inputReColorLinks.call(this);
      updateInfo.call(this);
    })

  // outputNodesClickAndHighlight
  function outputNodeDfs(curNodeId) {
    var curNodeLinksListName = "node" + String(curNodeId) + "links",
         curNodeLinksList = outputNodesLinks[curNodeLinksListName],
         curNodeLinksSet = new Set(curNodeLinksList);
    svg_nnet.selectAll(".link").filter(".dense5")
      .classed("connected", function(d) {
        if (curNodeLinksSet.has(Number(d.id.slice(1, )))) {
          return true;
        } else {
          return false
        }
      })

  }

  d3.selectAll('.outputNodes')
    .on('click', function(d) {
      d3.selectAll('.connected')
        .classed('connected', false);

      selectNode.call(this);
      outputNodeDfs.call(this, Number(d.id.slice(2, )));
      outputReColorLinks.call(this);
      updateInfo.call(this);
    });

    // document.getElementById("tick0").innerHTML = "\\(\\phi_0\\)";
    // document.getElementById("tick9").innerHTML = "\\(\\phi_0\\)";
 //    setTimeout(() => {
 //
 //   MathJax.Hub.Config({
 //     tex2jax: {
 //       inlineMath: [ ['$','$'], ["\\(","\\)"] ],
 //       processEscapes: true
 //     }
 //   });
 //
 //   MathJax.Hub.Register.StartupHook("End", function() {
 //     setTimeout(() => {
 //           svg_nnet.selectAll('.tick').each(function(){
 //           var self = d3.select(this),
 //               g = self.select('text>span>svg_nnet');
 //           g.remove();
 //           self.append(function(){
 //             return g.node();
 //           });
 //         });
 //       }, 1);
 //     });
 //
 //   MathJax.Hub.Queue(["Typeset", MathJax.Hub, svg_nnet.node()]);
 //
 // }, 1);
})
