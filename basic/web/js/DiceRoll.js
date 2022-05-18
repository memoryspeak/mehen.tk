export default class DiceRoll {
	constructor(player, diceRollValue, width, id){
		this.player = player; //white or black
		this.diceRollValue = diceRollValue; //diceRollValue
		this.width = width;
		this.id = id;
		this.diceRollSize = 0.85;
		this.#setStrokeWidth();
		this.#setDiceRollParameters();
	}
	
	getHtml() {
		var rectHtmlString = "";
		var diceRollValueHtmlString = "";
		
		switch(this.player) {
			case 'white': 
				rectHtmlString += '<rect '+
							'x="'+this.whiteX+'" '+
							'y="'+this.whiteY+'" '+
							'rx="'+this.rx+'" '+
							'ry="'+this.ry+'" '+
							'width="'+this.width*this.diceRollSize+'" '+
							'height="'+this.width*this.diceRollSize+'" '+
							'style="fill:'+this.player+';stroke:black;stroke-width:'+this.strokeWidth+'" />';
							
				switch(this.diceRollValue) {
					case '1': 
						diceRollValueHtmlString += '<circle cx="'+this.width*15/2+'" cy="'+this.width*3/2+'" r="'+this.radius+'" stroke="black" fill="black" />';
						break;
					case '2': 
						diceRollValueHtmlString += '<circle cx="'+this.width*(15/2+1/4.5)+'" cy="'+this.width*(3/2-1/4.5)+'" r="'+this.radius+'" stroke="black" fill="black" />';
						diceRollValueHtmlString += '<circle cx="'+this.width*(15/2-1/4.5)+'" cy="'+this.width*(3/2+1/4.5)+'" r="'+this.radius+'" stroke="black" fill="black" />';
						break;
					case '3': 
						diceRollValueHtmlString += '<circle cx="'+this.width*(15/2-1/4.5)+'" cy="'+this.width*(3/2-1/4.5)+'" r="'+this.radius+'" stroke="black" fill="black" />';
						diceRollValueHtmlString += '<circle cx="'+this.width*15/2+'" cy="'+this.width*3/2+'" r="'+this.radius+'" stroke="black" fill="black" />';
						diceRollValueHtmlString += '<circle cx="'+this.width*(15/2+1/4.5)+'" cy="'+this.width*(3/2+1/4.5)+'" r="'+this.radius+'" stroke="black" fill="black" />';
						break;
					case '4': 
						diceRollValueHtmlString += '<circle cx="'+this.width*(15/2+1/4.5)+'" cy="'+this.width*(3/2-1/4.5)+'" r="'+this.radius+'" stroke="black" fill="black" />';
						diceRollValueHtmlString += '<circle cx="'+this.width*(15/2-1/4.5)+'" cy="'+this.width*(3/2+1/4.5)+'" r="'+this.radius+'" stroke="black" fill="black" />';
						diceRollValueHtmlString += '<circle cx="'+this.width*(15/2-1/4.5)+'" cy="'+this.width*(3/2-1/4.5)+'" r="'+this.radius+'" stroke="black" fill="black" />';
						diceRollValueHtmlString += '<circle cx="'+this.width*(15/2+1/4.5)+'" cy="'+this.width*(3/2+1/4.5)+'" r="'+this.radius+'" stroke="black" fill="black" />';
						break;
					case '5': 
						diceRollValueHtmlString += '<circle cx="'+this.width*(15/2+1/4.5)+'" cy="'+this.width*(3/2-1/4.5)+'" r="'+this.radius+'" stroke="black" fill="black" />';
						diceRollValueHtmlString += '<circle cx="'+this.width*(15/2-1/4.5)+'" cy="'+this.width*(3/2+1/4.5)+'" r="'+this.radius+'" stroke="black" fill="black" />';
						diceRollValueHtmlString += '<circle cx="'+this.width*15/2+'" cy="'+this.width*3/2+'" r="'+this.radius+'" stroke="black" fill="black" />';
						diceRollValueHtmlString += '<circle cx="'+this.width*(15/2-1/4.5)+'" cy="'+this.width*(3/2-1/4.5)+'" r="'+this.radius+'" stroke="black" fill="black" />';
						diceRollValueHtmlString += '<circle cx="'+this.width*(15/2+1/4.5)+'" cy="'+this.width*(3/2+1/4.5)+'" r="'+this.radius+'" stroke="black" fill="black" />';
						break;
					case '6': 
						diceRollValueHtmlString += '<circle cx="'+this.width*(15/2+1/4.5)+'" cy="'+this.width*(3/2-1/4.5)+'" r="'+this.radius+'" stroke="black" fill="black" />';
						diceRollValueHtmlString += '<circle cx="'+this.width*(15/2-1/4.5)+'" cy="'+this.width*(3/2+1/4.5)+'" r="'+this.radius+'" stroke="black" fill="black" />';
						diceRollValueHtmlString += '<circle cx="'+this.width*(15/2+1/4.5)+'" cy="'+this.width*3/2+'" r="'+this.radius+'" stroke="black" fill="black" />';
						diceRollValueHtmlString += '<circle cx="'+this.width*(15/2-1/4.5)+'" cy="'+this.width*3/2+'" r="'+this.radius+'" stroke="black" fill="black" />';
						diceRollValueHtmlString += '<circle cx="'+this.width*(15/2-1/4.5)+'" cy="'+this.width*(3/2-1/4.5)+'" r="'+this.radius+'" stroke="black" fill="black" />';
						diceRollValueHtmlString += '<circle cx="'+this.width*(15/2+1/4.5)+'" cy="'+this.width*(3/2+1/4.5)+'" r="'+this.radius+'" stroke="black" fill="black" />';
						break;
				};
				break;
			case 'black': 
				rectHtmlString += '<rect '+
							'x="'+this.blackX+'" '+
							'y="'+this.blackY+'" '+
							'rx="'+this.rx+'" '+
							'ry="'+this.ry+'" '+
							'width="'+this.width*this.diceRollSize+'" '+
							'height="'+this.width*this.diceRollSize+'" '+
							'style="fill:'+this.player+';stroke:black;stroke-width:'+this.strokeWidth+'" />';
							
				switch(this.diceRollValue) {
					case '1': 
						diceRollValueHtmlString += '<circle cx="'+this.width*15/2+'" cy="'+this.width*21/2+'" r="'+this.radius+'" stroke="white" fill="white" />';
						break;
					case '2': 
						diceRollValueHtmlString += '<circle cx="'+this.width*(15/2+1/4.5)+'" cy="'+this.width*(21/2-1/4.5)+'" r="'+this.radius+'" stroke="white" fill="white" />';
						diceRollValueHtmlString += '<circle cx="'+this.width*(15/2-1/4.5)+'" cy="'+this.width*(21/2+1/4.5)+'" r="'+this.radius+'" stroke="white" fill="white" />';
						break;
					case '3': 
						diceRollValueHtmlString += '<circle cx="'+this.width*(15/2-1/4.5)+'" cy="'+this.width*(21/2-1/4.5)+'" r="'+this.radius+'" stroke="white" fill="white" />';
						diceRollValueHtmlString += '<circle cx="'+this.width*15/2+'" cy="'+this.width*21/2+'" r="'+this.radius+'" stroke="white" fill="white" />';
						diceRollValueHtmlString += '<circle cx="'+this.width*(15/2+1/4.5)+'" cy="'+this.width*(21/2+1/4.5)+'" r="'+this.radius+'" stroke="white" fill="white" />';
						break;
					case '4': 
						diceRollValueHtmlString += '<circle cx="'+this.width*(15/2+1/4.5)+'" cy="'+this.width*(21/2-1/4.5)+'" r="'+this.radius+'" stroke="white" fill="white" />';
						diceRollValueHtmlString += '<circle cx="'+this.width*(15/2-1/4.5)+'" cy="'+this.width*(21/2+1/4.5)+'" r="'+this.radius+'" stroke="white" fill="white" />';
						diceRollValueHtmlString += '<circle cx="'+this.width*(15/2-1/4.5)+'" cy="'+this.width*(21/2-1/4.5)+'" r="'+this.radius+'" stroke="white" fill="white" />';
						diceRollValueHtmlString += '<circle cx="'+this.width*(15/2+1/4.5)+'" cy="'+this.width*(21/2+1/4.5)+'" r="'+this.radius+'" stroke="white" fill="white" />';
						break;
					case '5': 
						diceRollValueHtmlString += '<circle cx="'+this.width*(15/2+1/4.5)+'" cy="'+this.width*(21/2-1/4.5)+'" r="'+this.radius+'" stroke="white" fill="white" />';
						diceRollValueHtmlString += '<circle cx="'+this.width*(15/2-1/4.5)+'" cy="'+this.width*(21/2+1/4.5)+'" r="'+this.radius+'" stroke="white" fill="white" />';
						diceRollValueHtmlString += '<circle cx="'+this.width*15/2+'" cy="'+this.width*21/2+'" r="'+this.radius+'" stroke="white" fill="white" />';
						diceRollValueHtmlString += '<circle cx="'+this.width*(15/2-1/4.5)+'" cy="'+this.width*(21/2-1/4.5)+'" r="'+this.radius+'" stroke="white" fill="white" />';
						diceRollValueHtmlString += '<circle cx="'+this.width*(15/2+1/4.5)+'" cy="'+this.width*(21/2+1/4.5)+'" r="'+this.radius+'" stroke="white" fill="white" />';
						break;
					case '6': 
						diceRollValueHtmlString += '<circle cx="'+this.width*(15/2+1/4.5)+'" cy="'+this.width*(21/2-1/4.5)+'" r="'+this.radius+'" stroke="white" fill="white" />';
						diceRollValueHtmlString += '<circle cx="'+this.width*(15/2-1/4.5)+'" cy="'+this.width*(21/2+1/4.5)+'" r="'+this.radius+'" stroke="white" fill="white" />';
						diceRollValueHtmlString += '<circle cx="'+this.width*(15/2+1/4.5)+'" cy="'+this.width*21/2+'" r="'+this.radius+'" stroke="white" fill="white" />';
						diceRollValueHtmlString += '<circle cx="'+this.width*(15/2-1/4.5)+'" cy="'+this.width*21/2+'" r="'+this.radius+'" stroke="white" fill="white" />';
						diceRollValueHtmlString += '<circle cx="'+this.width*(15/2-1/4.5)+'" cy="'+this.width*(21/2-1/4.5)+'" r="'+this.radius+'" stroke="white" fill="white" />';
						diceRollValueHtmlString += '<circle cx="'+this.width*(15/2+1/4.5)+'" cy="'+this.width*(21/2+1/4.5)+'" r="'+this.radius+'" stroke="white" fill="white" />';
						break;
				};
				break;
		};
		
		return '<g id="'+this.id+'">'+
				rectHtmlString+
				diceRollValueHtmlString+
			'</g>';
	}
	
	setWidth(w) {
		this.width = w;
		this.#setStrokeWidth();
		this.#setDiceRollParameters();
	}
	
	#setStrokeWidth() {
		this.strokeWidth = this.width/20;;
	}
	
	#setDiceRollParameters() {
		this.whiteX = this.width*7 + this.width*(1 - this.diceRollSize)/2;
		this.whiteY = this.width + this.width*(1 - this.diceRollSize)/2;
		this.blackX = this.width*7 + this.width*(1 - this.diceRollSize)/2;
		this.blackY = this.width*10 + this.width*(1 - this.diceRollSize)/2;
		this.rx = this.width/4;
		this.ry = this.width/4;
		this.radius = this.width/10;
	};
}
