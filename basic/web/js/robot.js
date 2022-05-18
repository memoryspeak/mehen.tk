import MehenBoard from './MehenBoard.js';
import Piece from './Piece.js';
import DiceRoll from './DiceRoll.js';

function showMehenBoard(){
	let mehenBoard = new MehenBoard(
		getMehenBoardSize()["width"], //width
		getMehenBoardSize()["height"], //height
		"0", //viewBoxMinX
		"0", //viewBoxMinY
		getMehenBoardSize()["width"], //viewBoxWidth
		getMehenBoardSize()["height"], //viewBoxHeight
		"#0dcaf0", //background-color
		pieceList, //list of piece
		whiteDiceRoll, //whiteDiceRoll
		blackDiceRoll, //blackDiceRoll
		memoryWhite, //memoryWhite
		memoryBlack); //memoryBlack
	mehen_board_container.innerHTML = mehenBoard.getHtml();
	
	pieceList.forEach((item) => {
		var itemPiece = document.getElementById(item.id);
		itemPiece.addEventListener("click", function(){
			console.log(this.id + "-click")
		});
	});
	
	var itemWhiteDiceRoll = document.getElementById('whiteDiceRoll');
	itemWhiteDiceRoll.addEventListener("click", function(){
		console.log("whiteDiceRoll-click");
	});
	var itemBlackDiceRoll = document.getElementById('blackDiceRoll');
	itemBlackDiceRoll.addEventListener("click", function(){
		console.log("blackDiceRoll-click");
	});
};

function getMehenBoardSize() {
	var h = document.documentElement.clientHeight - 2*document.getElementById('w0').clientHeight; //w0 - header, navbar
	var w = 8*h/12;
	if (w >= mehen_board_container.clientWidth) {
		w = mehen_board_container.clientWidth;
		h = 12*w/8;
	};
	return {"width": w, "height": h}
};

function restart() {
	pieceList = [];
	pieceList.push(piece_white_0);
	pieceList.push(piece_white_1);
	pieceList.push(piece_white_2);
	pieceList.push(piece_white_3);
	pieceList.push(piece_white_4);
	pieceList.push(piece_white_5);
	pieceList.push(piece_black_0);
	pieceList.push(piece_black_1);
	pieceList.push(piece_black_2);
	pieceList.push(piece_black_3);
	pieceList.push(piece_black_4);
	pieceList.push(piece_black_5);
	
	whiteDiceRoll = whiteDiceRoll_1;
	blackDiceRoll = blackDiceRoll_1;
	
	showMehenBoard();
};

var mehen_board_container = document.getElementById("mehen_board_container");

var restart_button = document.getElementById("restart_button");
restart_button.addEventListener("click", function() {
	restart();
	console.log("restart_button")
});

let pieceList = [];

var whiteDiceRoll;
var blackDiceRoll;

var memoryWhite = 0;
var memoryBlack = 0;

//init Pieces
let piece_white_0 = new Piece(
		"white", //player
		"walker", //mehenman
		"0", //col
		"-1", //row
		"piece_white_0", //id
		""); //radius
let piece_white_1 = new Piece(
		"white", //player
		"walker", //mehenman
		"1", //col
		"-1", //row
		"piece_white_1", //id
		""); //radius
let piece_white_2 = new Piece(
		"white", //player
		"walker", //mehenman
		"2", //col
		"-1", //row
		"piece_white_2", //id
		""); //radius
let piece_white_3 = new Piece(
		"white", //player
		"walker", //mehenman
		"3", //col
		"-1", //row
		"piece_white_3", //id
		""); //radius
let piece_white_4 = new Piece(
		"white", //player
		"walker", //mehenman
		"4", //col
		"-1", //row
		"piece_white_4", //id
		""); //radius
let piece_white_5 = new Piece(
		"white", //player
		"walker", //mehenman
		"5", //col
		"-1", //row
		"piece_white_5", //id
		""); //radius
let piece_black_0 = new Piece(
		"black", //player
		"walker", //mehenman
		"0", //col
		"8", //row
		"piece_black_0", //id
		""); //radius
let piece_black_1 = new Piece(
		"black", //player
		"walker", //mehenman
		"1", //col
		"8", //row
		"piece_black_1", //id
		""); //radius
let piece_black_2 = new Piece(
		"black", //player
		"walker", //mehenman
		"2", //col
		"8", //row
		"piece_black_2", //id
		""); //radius
let piece_black_3 = new Piece(
		"black", //player
		"walker", //mehenman
		"3", //col
		"8", //row
		"piece_black_3", //id
		""); //radius
let piece_black_4 = new Piece(
		"black", //player
		"walker", //mehenman
		"4", //col
		"8", //row
		"piece_black_4", //id
		""); //radius
let piece_black_5 = new Piece(
		"black", //player
		"walker", //mehenman
		"5", //col
		"8", //row
		"piece_black_5", //id
		""); //radius

//init dice rolls
let whiteDiceRoll_1 = new DiceRoll(
	"white", //white or black diceRoll
	"1", //diceRollValue
	"", //diceRoll width
	"whiteDiceRoll"); //id
let whiteDiceRoll_2 = new DiceRoll(
	"white", //white or black diceRoll
	"2", //diceRollValue
	"", //diceRoll width
	"whiteDiceRoll"); //id
let whiteDiceRoll_3 = new DiceRoll(
	"white", //white or black diceRoll
	"3", //diceRollValue
	"", //diceRoll width
	"whiteDiceRoll"); //id
let whiteDiceRoll_4 = new DiceRoll(
	"white", //white or black diceRoll
	"4", //diceRollValue
	"", //diceRoll width
	"whiteDiceRoll"); //id
let whiteDiceRoll_5 = new DiceRoll(
	"white", //white or black diceRoll
	"5", //diceRollValue
	"", //diceRoll width
	"whiteDiceRoll"); //id
let whiteDiceRoll_6 = new DiceRoll(
	"white", //white or black diceRoll
	"6", //diceRollValue
	"", //diceRoll width
	"whiteDiceRoll"); //id
let blackDiceRoll_1 = new DiceRoll(
	"black", //white or black diceRoll
	"1", //diceRollValue
	"", //diceRoll width
	"blackDiceRoll"); //id
let blackDiceRoll_2 = new DiceRoll(
	"black", //white or black diceRoll
	"2", //diceRollValue
	"", //diceRoll width
	"blackDiceRoll"); //id
let blackDiceRoll_3 = new DiceRoll(
	"black", //white or black diceRoll
	"3", //diceRollValue
	"", //diceRoll width
	"blackDiceRoll"); //id
let blackDiceRoll_4 = new DiceRoll(
	"black", //white or black diceRoll
	"4", //diceRollValue
	"", //diceRoll width
	"blackDiceRoll"); //id
let blackDiceRoll_5 = new DiceRoll(
	"black", //white or black diceRoll
	"5", //diceRollValue
	"", //diceRoll width
	"blackDiceRoll"); //id
let blackDiceRoll_6 = new DiceRoll(
	"black", //white or black diceRoll
	"6", //diceRollValue
	"", //diceRoll width
	"blackDiceRoll"); //id

restart();

window.addEventListener('resize', function() { showMehenBoard(); });
