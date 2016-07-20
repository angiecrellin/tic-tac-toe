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

  var startGame = function(){
  	$('.cell').text('');
  }

  	startGame();

    //taking turns 
    $('.gameBoard').find('.cell').on('click', function() {
        if (turn % 2 === 0) {
            $(this).text('X');
        } else {
            $(this).text('0');
        }
        turn++;
    })
    

    function getCellValue(cellNumber) {
        return $('.cell').eq(cellNumber).text();

    }
    getCellValue();

    //checking for winner

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
        } else {
            alert('It\'s a Tie!');
        }

    }

    //new game





});
