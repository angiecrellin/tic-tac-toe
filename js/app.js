//disable after click
//it's a tie over and over again



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

    var startGame = function() {
        $('.cell').text('');
    }

    startGame();

    /*function cellClick(cell) {
    if (cell.innerHTML === "X" || cell.innerHTML === "O") {
        return;
    }
}*/


    //taking turns 
    $('.gameBoard').find('.cell').on('click', function() {

        if (turn % 2 === 0) {
            $(this).text('X');


        } else if (turn % 2 !== 0) {
            $(this).text('O');

        }

        eachTurn();

        turn++

    })

    /*$('.cell').one('click', function(){
        alert('That space is already taken')
    })*/

    /*$('.cell').bind('click', function() {
       $(this).unbind('click');
       alert('That space is already taken!');
    });*/

    /*$('.gameBoard').find('cell').on('click', function() {
        if ('.cell' === 'X' || '.cell' === 'O') {
            alert('That space is already taken');
        }
    })*/

    $('.gameBoard').find('this').on('click', function() {
        if ('this' === 'X' || 'this' === 'O') {
            alert('That space is already taken');
        }
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
                break;
            } else if (cellAnswer === 'OOO') {
                alert('O Wins!')
                break;
            } else if ($('.cell').text().length >= 9) {
                alert('It\'s a Tie!');
            }

        }
    };


    //new game

    var newGame = function() {
        $('.cell').text('');
    }


    $('.button').click(newGame);



});
