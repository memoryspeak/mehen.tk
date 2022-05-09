import MehenBoard from './MehenBoard.js';

var mehen_board_container = document.getElementById("mehen_board_container");

showMehenBoard();

window.addEventListener('resize', function() { showMehenBoard(); });

function showMehenBoard(){
	let mehenBoard = new MehenBoard(
		getMehenBoardSize()["width"], //width
		getMehenBoardSize()["height"], //height
		"0", //viewBoxMinX
		"0", //viewBoxMinY
		getMehenBoardSize()["width"], //viewBoxWidth
		getMehenBoardSize()["height"], //viewBoxHeight
		"#0dcaf0"); //color
	mehen_board_container.innerHTML = mehenBoard.getHtml();
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
