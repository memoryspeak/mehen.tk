import Canvas from './Canvas.js';
//import ControlArrows from './ControlArrows.js';

var svg_container = document.getElementById("svg-container");

showCanvas();
window.addEventListener('resize', showCanvas);

//var topControlArrow = document.getElementById("topControlArrow");
/*topControlArrow.onmouseover = function(event){
        alert("over");
};
topControlArrow.onmouseout = function(event){
        alert("out");
};*/

function showCanvas(){
        //let controlArrows = new ControlArrows(svg_container.offsetWidth, document.documentElement.clientHeight, "lightgreen", "1", "lightgreen");
        let canvas = new Canvas(
svg_container.offsetWidth,
document.documentElement.clientHeight,
"0",
"0",
svg_container.offsetWidth,
document.documentElement.clientHeight,
"#0dcaf0",
//controlArrows.getHtml(),
"",
"",
);
        svg_container.innerHTML = canvas.getHtml();
};

