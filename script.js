var row_max = data[0].seats.length;
single_circle = 14;

var cx = 100;
var cx_max = row_max * single_circle;

var cy = 100;
var cy_max = 800;

var counter = 0;

var rectDemo = d3.select("#seatss").
 append("svg:svg").
 attr("width", cx_max).
 attr("height", cy_max);

var draw = function(item){
 for( ;cx < cx_max ; cx=cx+12){
   if(counter == row_max){
     counter = 0;
     return;
   }
 var temp = item.seats[counter];
    if(temp.isavail == 'Y'){
    var uniqueId = temp.catcode+"-"+item.rowcode+"-"+temp.seatno;
       rectDemo.append("svg:circle").
         attr("cx", cx).
         attr("cy", cy).
         attr("r", 5).
         attr("fill", "transparent").
         attr("id", uniqueId).
         attr("onclick", "fnSelectSeat("+uniqueId+")").
         attr("stroke-width","1").
         attr("stroke","lightgreen");
     } else if(temp.HwManySeater == 0) {
       rectDemo.append("svg:circle").
         attr("cx", cx).
         attr("cy", cy).
         attr("r", 5).
         attr("fill", "transparent");
     } else {
       rectDemo.append("svg:circle").
         attr("cx", cx).
         attr("cy", cy).
         attr("r", 5).
         attr("fill", "#ccc");
     };
     counter++;
 };
 rectDemo.attr("height",cy+20);
};

data.forEach(function(item, index){
 if(index != 0){
   cx = 100;
   cy += 14;
 };
 draw(item);
});
