/* ROW, COL
0,0 0,1 0,2
1,0 1,1 1,2
2,0 2,1 2,2

. . .
. X .
. . .
O to play.

...

X . O
. X .
O . X
X has won.

*/
class TTT {
    constructor() {
        this.board = [
            ["O", "O", "O"],
            [".", ".", "."],
            [".", ".", "."]
        ];
    }
    move(row, col, symbol) {
        this.board[row][col] = symbol
    }
    status() {
        return this.board.map(r => r.join(" ")).join("\n") + "\n" + this.winner();
    }
    winner() {
        //three in a row any of 3 row
        //three in a stack in any of three stack
        //three TL->BR TR->BL
        //8 conditions could be a win
        const symbols = ["X", "O"];
        for (const symbol of symbols) {
            if (this.board[0][0] === symbol && this.board[0][1] === symbol && this.board[0][2] === symbol) {
                return symbol + ' is a winner!!!';
            }
        }
        return "playing";
    }
}
//TESTS
const game = new TTT();
game.move(1, 1, "X")
console.log(game.status());

game.move(1, 1, "X")
