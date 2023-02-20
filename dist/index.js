"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicTacToe = void 0;
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
class TicTacToe {
    constructor() {
        (this.playerX = "X"),
            (this.playerO = "O"),
            (this.currentPlayer = this.playerX),
            (this.winner = ""),
            (this.validMove = false),
            (this.board = [
                ["-", "-", "-"],
                ["-", "-", "-"],
                ["-", "-", "-"],
            ]);
    }
    displayeBoard() {
        for (let i = 0; i < this.board.length; i++) {
            console.log(`${this.board[i][0]} ${this.board[i][1]} ${this.board[i][2]}`);
        }
        console.log("\n");
    }
    makeMove(row, column, symbol) {
        if (row < 0 || row > 2 || column < 0 || column > 2) {
            console.log("Position out of the board. Try again.");
            return;
        }
        if (this.board[row][column] != "-") {
            console.log(`${this.board[row][column]} has already claimed this spot. Try again.`);
            return;
        }
        if (symbol != "X" && symbol != "O") {
            console.log("Not a valid symbol. Try again.");
            return;
        }
        this.board[row][column] = symbol;
        this.validMove = true;
    }
    endGame() {
        for (let i = 0; i < this.board.length; i++) {
            if (this.board[i][0] != "-" && this.board[i][0] == this.board[i][1] && this.board[i][0] == this.board[i][2]) {
                return this.board[i][0];
            }
        }
        for (let i = 0; i < this.board.length; i++) {
            if (this.board[0][i] != "-" && this.board[0][i] == this.board[1][i] && this.board[0][i] == this.board[2][i]) {
                return this.board[0][i];
            }
        }
        if (this.board[0][0] != "-" && this.board[0][0] == this.board[1][1] && this.board[0][0] == this.board[2][2]) {
            return this.board[0][0];
        }
        if (this.board[0][2] != "-" && this.board[0][2] == this.board[1][1] && this.board[0][2] == this.board[2][0]) {
            return this.board[0][2];
        }
        let count = 0;
        for (let i = 0; i < this.board.length; i++) {
            for (let j = 0; j < this.board[i].length; j++) {
                if (this.board[i][j] != "-") {
                    count += 1;
                }
            }
        }
        if (count == 9) {
            return "Tie";
        }
        return "";
    }
}
exports.TicTacToe = TicTacToe;
const game = new TicTacToe();
while (game.winner == "") {
    game.validMove = false;
    game.displayeBoard();
    while (game.validMove == false) {
        let row = Number(prompt("Choose a row: "));
        let column = Number(prompt("Choose a column: "));
        game.makeMove(row, column, game.currentPlayer);
    }
    game.displayeBoard();
    game.currentPlayer = game.currentPlayer == game.playerX ? game.playerO : game.playerX;
    game.winner = game.endGame();
    if (game.winner == "Tie") {
        console.log("It's a tie.");
        break;
    }
    if (game.winner != "") {
        console.log(`The winner is: ${game.winner}`);
        break;
    }
}
