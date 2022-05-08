export default class ControlArrows {
        constructor(width, height, strokeColor, strokeWidth, fillColor){
                this.width = width;
                this.height = height;
		this.strokeColor = strokeColor;
		this.strokeWidth = strokeWidth;
		this.fillColor = fillColor;
        }

        getHtml() {
                return '<path id="topControlArrow"'+
			'stroke='+this.strokeColor+' '+
			'stroke-width='+this.strokeWidth+' '+
			'fill='+this.fillColor+' '+
			'd="'+
				'M '+this.width/3+' '+this.height/20+' '+
				'L '+this.width/2+' '+this.height/50+' '+
				'L '+2*this.width/3+' '+this.height/20+' '+
				'z" />'+
			'<path id="bottomControlArrow"'+
			'stroke='+this.strokeColor+' '+
			'stroke-width='+this.strokeWidth+' '+
			'fill='+this.fillColor+' '+
			'd="'+
				'M '+this.width/3+' '+this.height*19/20+' '+
				'L '+this.width/2+' '+this.height*49/50+' '+
				'L '+2*this.width/3+' '+this.height*19/20+' '+
				'z" />'+
			'<path id="leftControlArrow"'+
			'stroke='+this.strokeColor+' '+
			'stroke-width='+this.strokeWidth+' '+
			'fill='+this.fillColor+' '+
			'd="'+
				'M '+this.width/20+' '+this.height/3+' '+
				'L '+this.width/50+' '+this.height/2+' '+
				'L '+this.width/20+' '+2*this.height/3+' '+
				'z" />'+
			'<path id="rightControlArrow"'+
			'stroke='+this.strokeColor+' '+
			'stroke-width='+this.strokeWidth+' '+
			'fill='+this.fillColor+' '+
			'd="'+
				'M '+this.width*19/20+' '+this.height/3+' '+
				'L '+this.width*49/50+' '+this.height/2+' '+
				'L '+this.width*19/20+' '+2*this.height/3+' '+
				'z" />'
		}
}
