var mehen_board = document.getElementById("mehen_board");
var ctxMB = mehen_board.getContext("2d");
var widthMB = mehen_board.width;
var square_lenght = widthMB/8;
mehen_board.height = 5*widthMB/4;
var heightMB = mehen_board.height;

var pieces = [];

function drawMehenBoard() {
    ctxMB.lineWidth = 1;
    ctxMB.strokeStyle = "#000000";
    mehen_square_color_list.forEach(function(item, index, array){
        ctxMB.fillStyle = item[2];
        ctxMB.fillRect(square_lenght*item[1], square_lenght*item[0], square_lenght, square_lenght);
        if (item[0] != 0 && item[0] != 9){
            ctxMB.strokeRect(square_lenght*item[1], square_lenght*item[0], square_lenght, square_lenght);
        };
    });
    ctxMB.lineWidth = 4;
    ctxMB.beginPath();
    ctxMB.moveTo(square_lenght*16/2, square_lenght*2/2);
    ctxMB.lineTo(square_lenght*1/2, square_lenght*2/2);
    ctxMB.arc(square_lenght*1/2, square_lenght*3/2, square_lenght/2, 3/2*Math.PI, 1*Math.PI, true);
    ctxMB.lineTo(square_lenght*0/2, square_lenght*17/2);
    ctxMB.arc(square_lenght*1/2, square_lenght*17/2, square_lenght*1/2, 2/2*Math.PI, 1/2*Math.PI, true);
    ctxMB.lineTo(square_lenght*15/2, square_lenght*18/2);
    ctxMB.arc(square_lenght*15/2, square_lenght*17/2, square_lenght*1/2, 1/2*Math.PI, 0*Math.PI, true);
    ctxMB.lineTo(square_lenght*16/2, square_lenght*5/2);
    ctxMB.arc(square_lenght*15/2, square_lenght*5/2, square_lenght*1/2, 0*Math.PI, -1/2*Math.PI, true);
    ctxMB.moveTo(square_lenght*16/2, square_lenght*4/2);
    ctxMB.lineTo(square_lenght*3/2, square_lenght*4/2);
    ctxMB.arc(square_lenght*3/2, square_lenght*5/2, square_lenght*1/2, 3/2*Math.PI, 2/2*Math.PI, true);
    ctxMB.lineTo(square_lenght*2/2, square_lenght*15/2);
    ctxMB.arc(square_lenght*3/2, square_lenght*15/2, square_lenght*1/2, 2/2*Math.PI, 1/2*Math.PI, true);
    ctxMB.lineTo(square_lenght*13/2, square_lenght*16/2);
    ctxMB.arc(square_lenght*13/2, square_lenght*15/2, square_lenght*1/2, 1/2*Math.PI, 0/2*Math.PI, true);
    ctxMB.lineTo(square_lenght*14/2, square_lenght*7/2);
    ctxMB.arc(square_lenght*13/2, square_lenght*7/2, square_lenght*1/2, 0*Math.PI, -1/2*Math.PI, true);
    ctxMB.lineTo(square_lenght*5/2, square_lenght*6/2);
    ctxMB.arc(square_lenght*5/2, square_lenght*7/2, square_lenght*1/2, 3/2*Math.PI, 2/2*Math.PI, true);
    ctxMB.lineTo(square_lenght*4/2, square_lenght*13/2);
    ctxMB.arc(square_lenght*5/2, square_lenght*13/2, square_lenght*1/2, 2/2*Math.PI, 1/2*Math.PI, true);
    ctxMB.lineTo(square_lenght*11/2, square_lenght*14/2);
    ctxMB.arc(square_lenght*11/2, square_lenght*13/2, square_lenght*1/2, 1/2*Math.PI, 0/2*Math.PI, true);
    ctxMB.lineTo(square_lenght*12/2, square_lenght*9/2);
    ctxMB.arc(square_lenght*11/2, square_lenght*9/2, square_lenght*1/2, 0/2*Math.PI, -1/2*Math.PI, true);
    ctxMB.lineTo(square_lenght*7/2, square_lenght*8/2);
    ctxMB.arc(square_lenght*7/2, square_lenght*9/2, square_lenght*1/2, 3/2*Math.PI, 2/2*Math.PI, true);
    ctxMB.lineTo(square_lenght*6/2, square_lenght*11/2);
    ctxMB.arc(square_lenght*7/2, square_lenght*11/2, square_lenght*1/2, 2/2*Math.PI, 1/2*Math.PI, true);
    ctxMB.lineTo(square_lenght*9/2, square_lenght*12/2);
    ctxMB.arc(square_lenght*9/2, square_lenght*11/2, square_lenght*1/2, 1/2*Math.PI, -1/2*Math.PI, true);
    ctxMB.lineTo(square_lenght*8/2, square_lenght*10/2);
    ctxMB.stroke();
};

function Piece(x, y, color, type){
    this.x = x;
    this.y = y;
    this.color = color;
    this.type = type;
    this.isSelected = false;
};

function drawPieces(){
    ctxMB.clearRect(0, 0, mehen_board.width, mehen_board.height);
    drawMehenBoard();
    for (var i = 0; i < pieces.length; i++) {
        var piece = pieces[i];

        ctxMB.fillStroke = "black";
        ctxMB.lineWidth = 4;

        ctxMB.fillStyle = piece.color;

        ctxMB.beginPath();
        ctxMB.arc(piece.x, piece.y, square_lenght/2*0.8, 0, 2*Math.PI, false);
        ctxMB.stroke();
        ctxMB.fill();

        if (piece.type == "lion") {
            if (piece.color == "white") { ctxMB.fillStyle = "black"; ctxMB.fillStroke = "black"; };
            if (piece.color == "black") { ctxMB.fillStyle = "white"; ctxMB.fillStroke = "white"; };
            ctxMB.beginPath();
            ctxMB.arc(piece.x, piece.y, square_lenght/2*0.2, 0, 2*Math.PI, false);
            ctxMB.stroke();
            ctxMB.fill();
        };
    };
};

function clearMehenBoard() {
    pieces = [];
    drawPieces();
};

function addPiece(x, y, color, type) {
    var piece = new Piece(x, y, color, type);
    pieces.push(piece);
};

function deletePiece(x, y, color, type) {
    var piece = new Piece(x, y, color, type);
    var indexPiece = pieces.indexOf(piece);
    if (indexPiece != -1) {
        pieces.splice(indexPiece, 1);
    };
};

function startGame(type) {
    if (type == "oppositeEachOver") {
        clearMehenBoard();
        for (var i = 0; i < 6; i++) {
            addPiece((2*i+1)*square_lenght/2, square_lenght/2, "white", "goose");
            addPiece((2*i+1)*square_lenght/2, square_lenght*19/2, "black", "goose");
        };
        drawMehenBoard();
        drawPieces();
    };

    if (type == "withRobot") {};

    if (type == "networkGame") {};
};
