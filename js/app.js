


$(document).ready(function() {

    var turn = 0;
    var answers = [
        [0, 1, 2, ],
        [3, 4, 5, ],
        [6, 7, 8, ],
        [0, 3, 6, ],
        [1, 4, 7, ],
        [2, 5, 8, ],
        [0, 4, 8, ],
        [2, 4, 6, ]
    ];
    var gameOver = false

    var startGame = function() {
        $('.cell').text('');
    }

    startGame();


    //taking turns 
    $('.gameBoard').find('.cell').on('click', function() {
        if (gameOver === true) {
            return;
        }
        if ($(this).text() !== '') {
            alert('This space is already taken')
            return;
        }

        if (turn % 2 === 0) {
            $(this).text('X');


        } else if (turn % 2 !== 0) {
            $(this).text('O');

        }

        eachTurn();

        turn++

    })




    function getCellValue(cellNumber) {
        return $('.cell').eq(cellNumber).text();

    }

    getCellValue();


    //checking for winner

    function eachTurn() {
        for (var i = 0; i < answers.length; i++) {
            var answerCells = answers[i];
            var cellAnswer = '';
            for (var c = 0; c < answerCells.length; c++) {
                cellAnswer += getCellValue(answerCells[c]);
            }
            if (cellAnswer === 'XXX') {
                alert('X Wins!')
                gameOver = true
                break;
            } else if (cellAnswer === 'OOO') {
                alert('O Wins!')
                gameOver = true
                break;
            } else if ($('.cell').text().length >= 9) {
                alert('It\'s a Tie!');
                gameOver = true
                break;
            }


        }
    };


    //new game


    function newGame() {
        $('.cell').text('');
        gameOver = false
    }



    $('.button').click(newGame)



});
