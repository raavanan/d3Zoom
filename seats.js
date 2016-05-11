$(document).ready(function(){
  console.log($("#seats").height());
  var rectDemo = d3.select("#seats").
   append("svg:svg").
   attr("width", $("#seats").width()).
   attr("height", $("#seats").height());
   

});
