$(document).ready(function(){
 var alphi = "_ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 console.log(row)
  function getRandomColor() {
      var letters = '0123456789ABCDEF'.split('');
      var color = '#';
      for (var i = 0; i < 6; i++ ) {
          color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
  }


  var zoom = d3.behavior.zoom()
   .scaleExtent([1, 2])
   .on("zoom", zoomed);

  var width = $("#seats").width(),
  height = $("#seats").height();

  var mainSvg = d3.select("#seats").
   append("svg:svg")
   .attr("width", width)
   .attr("height", height);

   $("#rows").css("height", height);
   var rowSvg = d3.select("#rows")
                  .append("svg:svg")
                  .attr("width", "30px")
                  .attr("height", height);

  var rowGrp = rowSvg.append("svg:g");
   var rGap = 0, cGap = 0;
  var mainGrp = mainSvg.append("svg:g").attr("id", "main-grp").call(zoom);
  var rect = mainGrp.append("rect")
    .attr("width", width)
    .attr("height", height)
    .style("fill", "none")
    .style("pointer-events", "all");
   var rows = 26, cols = 50;
   for (var i = 1; i <= rows; i++) {
     var color = getRandomColor();
     //console.info(alphi[2]);
     rowGrp.append("svg:text").attr("x",10).attr("y", 20*i).text(alphi[i]);
     var row = mainGrp.append("svg:g");
     rGap = (i%10 === 0) ?  50 : 0;
     for (var j = 1; j <= cols; j++) {
       cGap = (j%30 === 0) ? 50 : 0;
       row.append("svg:circle")
              .attr("cx", (20 * j))
              .attr("cy", (20 * i))
              .attr("r", 5)
              .attr("fill", color);
     }
   }

   var grpWidth = mainGrp.node().getBBox().width;
   var grpHeight = mainGrp.node().getBBox().height;
   //console.log(width/grpWidth, height/grpHeight, width, height);
  //mainGrp.attr("transform", "scale("+d3.min([width/grpWidth])+")");

   function zoomed() {
     //sconsole.info(1/d3.event.scale)
     mainGrp.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
     rowGrp.attr("transform", "translate(0," + (d3.event.translate[1]) + ")scale(" + d3.event.scale + ")");

     rowGrp.selectAll("text").attr("x", 10 * ((1/d3.event.scale === 1) ? 1 : 1/d3.event.scale - 0.3));
   }

});
