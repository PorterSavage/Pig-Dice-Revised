import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

import { Player, diceRoll } from './pig-dice';

$(document).ready(function() {
    var player1 = new Player("Player 1");
    var player2 = new Player("Player 2");

    $("form#playerOneForm").submit(function(event) {
        event.preventDefault();
        var num = diceRoll();
        player1.pointLogic(num);
        $(".rollOutput").text(player1.currentNumber);
        $(".roundPointOutput").text(player1.roundPoints)
       // console.log(player1.roundPoints);
    });

    $("#playerOneHold").click(function(event) {
        event.preventDefault();
        player1.addToPoints();
      //  console.log(player1.points);
    });

    $("form#playerTwoForm").submit(function(event) {
        event.preventDefault();
        var num = diceRoll();
        player2.pointLogic2(num);
        $(".rollOutput").text(player2.currentNumber);
        $(".roundPointOutput").text(player2.roundPoints);
       // console.log(player2.roundPoints);
    });

    $("#playerTwoHold").click(function(event) {
        event.preventDefault();
        player2.addToPoints2();
       // console.log(player2.points);
    });

});
