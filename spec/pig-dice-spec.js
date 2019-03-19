import { Player, diceRoll } from "./../src/pig-dice";

describe('dice Roll', function() {
    it('dice roll', function(){
        var roll = diceRoll();
        console.log(roll);
        expect([1, 2, 3, 4, 5, 6]).toContain(roll);       
    });
});

describe('Player', function() {
    let player;

    beforeEach(function() {
        player = new Player();
    })

    it('should test whether a player constructer works', function() {
        expect(player.points).toEqual(0);
        expect(player.roundPoints).toEqual(0);
        expect(player.currentNumber).toEqual(0);
    });

    it('should test whether roundpoints has increased', function() {
        player.pointLogic(2);
        expect(player.roundPoints).toEqual(2);
    });

    it('should test whether roundpoints has reset', function() {
        player.roundPoints = 5;
        player.currentNumber = 1; 
        player.pointLogic(1);  
        expect(player.roundPoints).toEqual(0);
    });

    it('should test whether points have been added', function() {
        player.roundPoints = 10;
        player.addToPoints();
        expect(player.points).toEqual(10);
    });

});

