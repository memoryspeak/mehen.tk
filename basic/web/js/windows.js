import Canvas from './Canvas.js';
import ControlArrows from './ControlArrows.js';
import TimeLines from './TimeLines.js';

var date = new Date();

var svg_container = document.getElementById("svg-container");

var slider = document.getElementById("slider");
slider.addEventListener('change', function() { showCanvas(10 - this.value); });

showCanvas(10 - slider.value);

window.addEventListener('resize', function() { showCanvas(10 - slider.value); });

function showCanvas(scale){
	let timeLines = new TimeLines(
		svg_container.offsetWidth, //width
		document.documentElement.clientHeight, //height
		date, //date
		scale, //scale, from 0 to 10
		"#008000", //strokeColor
		"1", //strokeWidth
		"10", //fontSize
		"5"); //utc
	let controlArrows = new ControlArrows(
		svg_container.offsetWidth, //width
		document.documentElement.clientHeight, //height
		"transparent", //strokeColor
		"1", //strokeWidth
		"transparent"); //fillColor
	let canvas = new Canvas(
		svg_container.offsetWidth, //width
		document.documentElement.clientHeight, //height
		"0", //viewBoxMinX
		"0", //viewBoxMinY
		svg_container.offsetWidth, //viewBoxWidth
		document.documentElement.clientHeight, //viewBoxHeight
		"#0dcaf0", //color
		controlArrows.getHtml(), //controlArrows
		timeLines.getHtml(), //timeLines
		""); //Plot
	svg_container.innerHTML = canvas.getHtml();

	//function controlArrowAddEventListener
	["top", "bottom", "left", "right"].forEach((position) => {
		var positionControlArrow = document.getElementById(position + "ControlArrow");
		positionControlArrow.addEventListener("mouseover", function(){
			this.style.fill = "lightgreen";
			this.style.stroke = "lightgreen";
		});
		positionControlArrow.addEventListener("mouseout", function(){
			this.style.fill = "transparent";
			this.style.stroke = "transparent";
		});
		switch(position){
			case 'top':
				positionControlArrow.addEventListener('click', function(){
					// ...
				});
				break;
			case 'bottom':
				positionControlArrow.addEventListener('click', function(){
					// ...
				});
				break;
			case 'left':
				positionControlArrow.addEventListener('click', function(){
					date.setSeconds(date.getSeconds() - 3600);
					showCanvas(10 - slider.value);
				});
				break;
			case 'right':
				positionControlArrow.addEventListener('click', function(){
					date.setSeconds(date.getSeconds() + 3600);
					showCanvas(10 - slider.value);
				});
				break;
		};
	});
};
