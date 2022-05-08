export default class TimeLines {
        constructor(width, height, date, scale, strokeColor, strokeWidth, fontSize, utc){
                this.width = width;
                this.height = height;
		this.date = date,
		this.scale = parseInt(scale), //scale: from 0 to 10
                this.strokeColor = strokeColor;
                this.strokeWidth = strokeWidth;
		this.fontSize = fontSize;
		this.utc = utc;
        }

	#formatDate(date) {
		return date.toLocaleString("ru", {year: 'numeric', month: 'long', day: 'numeric'})
	}

        getHtml() {
		var lineListHtmlString = '<line x1="'+this.width/2+'" y1="0" x2="'+this.width/2+'" y2="'+this.height+'" />';
		if (this.date.getHours() == "0") {
			var timeListHtmlString = '<text x="'+this.width/2+'" y="'+this.fontSize+'" font-size="'+this.fontSize+'">'+this.#formatDate(this.date)+'</text>';
		} else {
			var timeListHtmlString = '<text x="'+this.width/2+'" y="'+this.fontSize+'" font-size="'+this.fontSize+'">'+this.date.getHours()+'</text>';
		};
		for (var i=0; i<=this.scale; i++) {
			var w = this.width/2+(i+1)*this.width/(2+this.scale);
			this.date.setSeconds(this.date.getSeconds() + 3600*(i+1));
			lineListHtmlString += '<line x1="'+w+'" y1="0" x2="'+w+'" y2="'+this.height+'" />';
			if (this.date.getHours() == "0") {
				timeListHtmlString += '<text x="'+w+'" y="'+this.fontSize+'" font-size="'+this.fontSize+'">'+this.#formatDate(this.date)+'</text>';
			} else {
				timeListHtmlString += '<text x="'+w+'" y="'+this.fontSize+'" font-size="'+this.fontSize+'">'+this.date.getHours()+'</text>';
			};
			this.date.setSeconds(this.date.getSeconds() - 3600*(i+1));
			this.date.setSeconds(this.date.getSeconds() - 3600*(i+1));
			var w = this.width/2-(i+1)*this.width/(2+this.scale);
			lineListHtmlString += '<line x1="'+w+'" y1="0" x2="'+w+'" y2="'+this.height+'" />';
			if (this.date.getHours() == "0") {
				timeListHtmlString += '<text x="'+w+'" y="'+this.fontSize+'" font-size="'+this.fontSize+'">'+this.#formatDate(this.date)+'</text>';
			} else {
				timeListHtmlString += '<text x="'+w+'" y="'+this.fontSize+'" font-size="'+this.fontSize+'">'+this.date.getHours()+'</text>';
			};
			this.date.setSeconds(this.date.getSeconds() + 3600*(i+1));
		};
                return ''+
		'<g style="stroke: '+this.strokeColor+'; stroke-width: '+this.strokeWidth+';">'+
			lineListHtmlString+
		'</g>'+
		timeListHtmlString
	}
}
