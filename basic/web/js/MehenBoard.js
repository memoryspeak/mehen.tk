import Piece from './Piece.js';
import DiceRoll from './DiceRoll.js';

export default class MehenBoard {
	constructor(width, height, viewBoxMinX, viewBoxMinY, viewBoxWidth, viewBoxHeight, color, pieceList, whiteDiceRoll, blackDiceRoll, memoryWhite, memoryBlack){
		this.width = width;
		this.height = height;
		this.viewBoxMinX = viewBoxMinX;
		this.viewBoxMinY = viewBoxMinY;
		this.viewBoxWidth = viewBoxWidth;
		this.viewBoxHeight = viewBoxHeight;
		this.color = color;
		this.squareWidth = this.width/8;
		this.squareHeight = this.height/12;
		this.lineWidth = this.squareWidth/15;
		this.pieceList = pieceList;
		this.strokeWidth = 0.2;
		this.whiteDiceRoll = whiteDiceRoll;
		this.blackDiceRoll = blackDiceRoll;
		this.memoryWhite = memoryWhite;
		this.memoryBlack = memoryBlack;
		this.memorySize = 0.85;
	}

	getHtml() {
		return ''+
		'<svg id="mehen_board-content" '+
		'version="1.1" '+
		'width='+this.width+' '+
		'height='+this.height+' '+
		'viewBox = "'+this.viewBoxMinX+' '+this.viewBoxMinY+' '+this.viewBoxWidth+' '+this.viewBoxHeight+'" '+
		'style="background-color: '+this.color+';">'+
			this.#getRectString()+
			this.#getLineString()+
			this.#getPieceListString()+
			this.#getWhiteDiceRollString()+
			this.#getBlackDiceRollString()+
			this.#getMemoryWhiteString()+
			this.#getMemoryBlackString()+
		'</svg>';
	}
	
	#getMemoryWhiteString() {
		return '<circle cx="'+this.squareWidth*13/2+'" cy="'+this.squareWidth*3/2+'" r="'+this.memorySize*this.squareWidth/2+'" stroke="black" fill="black" />';
	};
	
	#getMemoryBlackString() {
		return '<circle cx="'+this.squareWidth*13/2+'" cy="'+this.squareWidth*21/2+'" r="'+this.memorySize*this.squareWidth/2+'" stroke="black" fill="black" />';
	};

	#getWhiteDiceRollString() {
		var whiteDiceRollString = "";
		this.whiteDiceRoll.setWidth(this.squareWidth);
		whiteDiceRollString += this.whiteDiceRoll.getHtml();
		return whiteDiceRollString;
	};
	
	#getBlackDiceRollString() {
		var blackDiceRollString = "";
		this.blackDiceRoll.setWidth(this.squareWidth);
		blackDiceRollString += this.blackDiceRoll.getHtml();
		return blackDiceRollString;
	};

	#getPieceListString() {	
		var piecesString = '';
		this.pieceList.forEach((piece) => {
			piece.setRadius(this.squareWidth/2);
			piecesString += piece.getHtml();
		});
		return piecesString;
	}

	#getRectString() {
		var rectString = '';
		for (var col = 0; col<=7; col++) {
			for (var row = 0; row<=7; row++) {
				var id = col.toString() + row.toString();
				var x = col*this.width/8;
				var y = 2*this.height/12 + row*this.height/12;
				var width = this.width/8;
				var height = this.height/12;
				var squareColor = 'transparent';
				switch(id) {
					case '20':
						squareColor = 'green';
						break;
					case '40':
						squareColor = 'red';
						break;
					case '11':
						squareColor = 'green';
						break;
					case '71':
						squareColor = 'green';
						break;
					case '22':
						squareColor = 'green';
						break;
					case '62':
						squareColor = 'green';
						break;
					case '13':
						squareColor = 'green';
						break;
					case '33':
						squareColor = 'green';
						break;
					case '53':
						squareColor = 'green';
						break;
					case '04':
						squareColor = 'green';
						break;
					case '24':
						squareColor = 'green';
						break;
					case '44':
						squareColor = 'green';
						break;
					case '64':
						squareColor = 'green';
						break;
					case '55':
						squareColor = 'green';
						break;
					case '75':
						squareColor = 'green';
						break;
					case '46':
						squareColor = 'green';
						break;
					case '37':
						squareColor = 'green';
						break;
					case '77':
						squareColor = 'red';
						break;
					default:
						squareColor = "#FFDEAD";
						break;
				}
				rectString += '<rect id="'+id+'" x="'+x+'" y="'+y+'" width="'+width+'" height="'+height+'" stroke="black" fill="'+squareColor+'" stroke-width="'+this.strokeWidth+'"/>';
			}
		}
		return rectString;
	}

	#getLineString() {
		var lineString = '';
		lineString += '<line x1="'+this.squareHeight/2+'" y1="'+this.squareHeight*2+'" x2="'+this.squareWidth*8+'" y2="'+this.squareHeight*2+'" stroke="black" stroke-width="'+this.lineWidth+'" />';
		lineString += '<path d="M '+this.squareWidth*0/2+' '+this.squareHeight*5/2+' A '+this.squareWidth/2+' '+this.squareHeight/2+' 0 0 1 '+this.squareWidth*1/2+' '+this.squareHeight*4/2+'" stroke="black" fill="transparent" stroke-width="'+this.lineWidth+'"/>';
		lineString += '<line x1="'+this.squareHeight*0/2+'" y1="'+this.squareHeight*5/2+'" x2="'+this.squareWidth*0+'" y2="'+this.squareHeight*19/2+'" stroke="black" stroke-width="'+this.lineWidth+'" />';
		lineString += '<path d="M '+this.squareWidth*1/2+' '+this.squareHeight*20/2+' A '+this.squareWidth/2+' '+this.squareHeight/2+' 0 0 1 '+this.squareWidth*0/2+' '+this.squareHeight*19/2+'" stroke="black" fill="transparent" stroke-width="'+this.lineWidth+'"/>';
		lineString += '<line x1="'+this.squareHeight*1/2+'" y1="'+this.squareHeight*20/2+'" x2="'+this.squareWidth*15/2+'" y2="'+this.squareHeight*20/2+'" stroke="black" stroke-width="'+this.lineWidth+'" />';
		lineString += '<path d="M '+this.squareWidth*16/2+' '+this.squareHeight*19/2+' A '+this.squareWidth/2+' '+this.squareHeight/2+' 0 0 1 '+this.squareWidth*15/2+' '+this.squareHeight*20/2+'" stroke="black" fill="transparent" stroke-width="'+this.lineWidth+'"/>';
		lineString += '<line x1="'+this.squareHeight*16/2+'" y1="'+this.squareHeight*19/2+'" x2="'+this.squareWidth*16/2+'" y2="'+this.squareHeight*7/2+'" stroke="black" stroke-width="'+this.lineWidth+'" />';
		lineString += '<path d="M '+this.squareWidth*15/2+' '+this.squareHeight*6/2+' A '+this.squareWidth/2+' '+this.squareHeight/2+' 0 0 1 '+this.squareWidth*16/2+' '+this.squareHeight*7/2+'" stroke="black" fill="transparent" stroke-width="'+this.lineWidth+'"/>';
		lineString += '<line x1="'+this.squareHeight*16/2+'" y1="'+this.squareHeight*6/2+'" x2="'+this.squareWidth*3/2+'" y2="'+this.squareHeight*6/2+'" stroke="black" stroke-width="'+this.lineWidth+'" />';
		lineString += '<path d="M '+this.squareWidth*2/2+' '+this.squareHeight*7/2+' A '+this.squareWidth/2+' '+this.squareHeight/2+' 0 0 1 '+this.squareWidth*3/2+' '+this.squareHeight*6/2+'" stroke="black" fill="transparent" stroke-width="'+this.lineWidth+'"/>';
		lineString += '<line x1="'+this.squareHeight*2/2+'" y1="'+this.squareHeight*7/2+'" x2="'+this.squareWidth*2/2+'" y2="'+this.squareHeight*17/2+'" stroke="black" stroke-width="'+this.lineWidth+'" />';
		lineString += '<path d="M '+this.squareWidth*3/2+' '+this.squareHeight*18/2+' A '+this.squareWidth/2+' '+this.squareHeight/2+' 0 0 1 '+this.squareWidth*2/2+' '+this.squareHeight*17/2+'" stroke="black" fill="transparent" stroke-width="'+this.lineWidth+'"/>';
		lineString += '<line x1="'+this.squareHeight*3/2+'" y1="'+this.squareHeight*18/2+'" x2="'+this.squareWidth*13/2+'" y2="'+this.squareHeight*18/2+'" stroke="black" stroke-width="'+this.lineWidth+'" />';
		lineString += '<path d="M '+this.squareWidth*14/2+' '+this.squareHeight*17/2+' A '+this.squareWidth/2+' '+this.squareHeight/2+' 0 0 1 '+this.squareWidth*13/2+' '+this.squareHeight*18/2+'" stroke="black" fill="transparent" stroke-width="'+this.lineWidth+'"/>';
		lineString += '<line x1="'+this.squareHeight*14/2+'" y1="'+this.squareHeight*17/2+'" x2="'+this.squareWidth*14/2+'" y2="'+this.squareHeight*9/2+'" stroke="black" stroke-width="'+this.lineWidth+'" />';
		lineString += '<path d="M '+this.squareWidth*13/2+' '+this.squareHeight*8/2+' A '+this.squareWidth/2+' '+this.squareHeight/2+' 0 0 1 '+this.squareWidth*14/2+' '+this.squareHeight*9/2+'" stroke="black" fill="transparent" stroke-width="'+this.lineWidth+'"/>';
		lineString += '<line x1="'+this.squareHeight*13/2+'" y1="'+this.squareHeight*8/2+'" x2="'+this.squareWidth*5/2+'" y2="'+this.squareHeight*8/2+'" stroke="black" stroke-width="'+this.lineWidth+'" />';
		lineString += '<path d="M '+this.squareWidth*4/2+' '+this.squareHeight*9/2+' A '+this.squareWidth/2+' '+this.squareHeight/2+' 0 0 1 '+this.squareWidth*5/2+' '+this.squareHeight*8/2+'" stroke="black" fill="transparent" stroke-width="'+this.lineWidth+'"/>';
		lineString += '<line x1="'+this.squareHeight*4/2+'" y1="'+this.squareHeight*9/2+'" x2="'+this.squareWidth*4/2+'" y2="'+this.squareHeight*15/2+'" stroke="black" stroke-width="'+this.lineWidth+'" />';
		lineString += '<path d="M '+this.squareWidth*5/2+' '+this.squareHeight*16/2+' A '+this.squareWidth/2+' '+this.squareHeight/2+' 0 0 1 '+this.squareWidth*4/2+' '+this.squareHeight*15/2+'" stroke="black" fill="transparent" stroke-width="'+this.lineWidth+'"/>';
		lineString += '<line x1="'+this.squareHeight*5/2+'" y1="'+this.squareHeight*16/2+'" x2="'+this.squareWidth*11/2+'" y2="'+this.squareHeight*16/2+'" stroke="black" stroke-width="'+this.lineWidth+'" />';
		lineString += '<path d="M '+this.squareWidth*12/2+' '+this.squareHeight*15/2+' A '+this.squareWidth/2+' '+this.squareHeight/2+' 0 0 1 '+this.squareWidth*11/2+' '+this.squareHeight*16/2+'" stroke="black" fill="transparent" stroke-width="'+this.lineWidth+'"/>';
		lineString += '<line x1="'+this.squareHeight*12/2+'" y1="'+this.squareHeight*15/2+'" x2="'+this.squareWidth*12/2+'" y2="'+this.squareHeight*11/2+'" stroke="black" stroke-width="'+this.lineWidth+'" />';
		lineString += '<path d="M '+this.squareWidth*11/2+' '+this.squareHeight*10/2+' A '+this.squareWidth/2+' '+this.squareHeight/2+' 0 0 1 '+this.squareWidth*12/2+' '+this.squareHeight*11/2+'" stroke="black" fill="transparent" stroke-width="'+this.lineWidth+'"/>';
		lineString += '<line x1="'+this.squareHeight*11/2+'" y1="'+this.squareHeight*10/2+'" x2="'+this.squareWidth*7/2+'" y2="'+this.squareHeight*10/2+'" stroke="black" stroke-width="'+this.lineWidth+'" />';
		lineString += '<path d="M '+this.squareWidth*6/2+' '+this.squareHeight*11/2+' A '+this.squareWidth/2+' '+this.squareHeight/2+' 0 0 1 '+this.squareWidth*7/2+' '+this.squareHeight*10/2+'" stroke="black" fill="transparent" stroke-width="'+this.lineWidth+'"/>';
		lineString += '<line x1="'+this.squareHeight*6/2+'" y1="'+this.squareHeight*11/2+'" x2="'+this.squareWidth*6/2+'" y2="'+this.squareHeight*13/2+'" stroke="black" stroke-width="'+this.lineWidth+'" />';
		lineString += '<path d="M '+this.squareWidth*7/2+' '+this.squareHeight*14/2+' A '+this.squareWidth/2+' '+this.squareHeight/2+' 0 0 1 '+this.squareWidth*6/2+' '+this.squareHeight*13/2+'" stroke="black" fill="transparent" stroke-width="'+this.lineWidth+'"/>';
		lineString += '<line x1="'+this.squareHeight*7/2+'" y1="'+this.squareHeight*14/2+'" x2="'+this.squareWidth*9/2+'" y2="'+this.squareHeight*14/2+'" stroke="black" stroke-width="'+this.lineWidth+'" />';
		lineString += '<path d="M '+this.squareWidth*9/2+' '+this.squareHeight*12/2+' A '+this.squareWidth/2+' '+this.squareHeight/2+' 0 0 1 '+this.squareWidth*9/2+' '+this.squareHeight*14/2+'" stroke="black" fill="transparent" stroke-width="'+this.lineWidth+'"/>';
		lineString += '<line x1="'+this.squareHeight*9/2+'" y1="'+this.squareHeight*12/2+'" x2="'+this.squareWidth*8/2+'" y2="'+this.squareHeight*12/2+'" stroke="black" stroke-width="'+this.lineWidth+'" />';

		return lineString;
	}
}
