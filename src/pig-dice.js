// Business Logic -----

export function diceRoll() {
    return Math.floor(Math.random() * 6) + 1;   
}

export function Player() {
    this.points = 0,
    this.roundPoints = 0,
    this.currentNumber = 0
}

Player.prototype.pointLogic = function(roll) {
    if (roll != 1) {
        this.currentNumber = roll;
        this.roundPoints += roll;
    } else {
        alert(`You have rolled a ${roll}!`);
        this.roundPoints = 0;
        $("#playerTwo").show();
        $("#playerOne").hide();
    }
}

Player.prototype.pointLogic2 = function(roll) {
    if (roll != 1) {
        this.currentNumber = roll;
        this.roundPoints += roll;
    } else {
        alert(`You have rolled a ${roll}!`);
        this.roundPoints = 0;
        $("#playerTwo").hide();
        $("#playerOne").show();
    }
}

Player.prototype.addToPoints = function() {
    this.points += this.roundPoints;
    $("#playerTwo").show();
    $("#playerOne").hide();
}

Player.prototype.addToPoints2 = function() {
    this.points += this.roundPoints;
    $("#playerTwo").hide();
    $("#playerOne").show();
}


// UI Logic -----


