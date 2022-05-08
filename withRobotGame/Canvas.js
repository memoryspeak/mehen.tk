export default class Canvas {
	constructor(width, height, viewBoxMinX, viewBoxMinY, viewBoxWidth, viewBoxHeight, color, controlArrows, Plot){
		this.width = width;
		this.height = height;
		this.viewBoxMinX = viewBoxMinX;
		this.viewBoxMinY = viewBoxMinY;
		this.viewBoxWidth = viewBoxWidth;
		this.viewBoxHeight = viewBoxHeight;
		this.color = color;
		this.controlArrows = controlArrows;
		this.Plot = Plot;
	}

	getHtml() {
		return ''+
		'<svg id="svg-content" '+
		'version="1.1" '+
		'width='+this.width+' '+
		'height='+this.height+' '+
		'viewBox = "'+this.viewBoxMinX+' '+this.viewBoxMinY+' '+this.viewBoxWidth+' '+this.viewBoxHeight+'" '+
		'style="background-color: '+this.color+';">'+
			this.controlArrows+
		'</svg>';
	}
}
