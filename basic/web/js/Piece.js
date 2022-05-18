export default class Piece {
	constructor(player, mehenman, col, row, id, radius){
		this.player = player; //color - black or white
		this.mehenman = mehenman;
		this.col = parseInt(col);
		this.row = parseInt(row);
		this.id = id;
		this.radius = radius;
		this.#setCxCy();
		this.pieceSize = 0.85;
	}
	
	getHtml() {
		return '<circle id="'+this.id+'" cx="'+this.cx+'" cy="'+this.cy+'" r="'+this.radius*this.pieceSize+'" stroke="black" stroke-width="'+this.radius/10+'" fill="'+this.player+'" />';
	}
	
	setRadius(r) {
		this.radius = r;
		this.#setCxCy();
	}
	
	#setCxCy() {
		this.cx = 2*this.radius*this.col+this.radius;
		this.cy = this.radius + 2*this.radius*(2+this.row);
	}
}
